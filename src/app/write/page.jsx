"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { NextResponse } from "next/server";
import { TailSpin } from "react-loader-spinner";

const storage = getStorage(app);

const WritePage = () => {
  const { status } = useSession;
  const router = useRouter;

  const [spinner, setSpinner] = useState(false);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const upload = () => {
      const fileName = new Date().getTime + file.name;
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setSpinner(true);

    if (title === "" || value === "") {
      setSpinner(false);
      return setErrorTitle(true);
    } else {
      setErrorTitle(false);
    }
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug || "styles",
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSpinner(false);
      setModal(true);
    }
  };

  const getTime = () =>{
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const fullDate = `${currentDate.toDateString()} - ${currentHours}:${currentMinutes}`;


    
    return fullDate
  }

  return (
    <div className={styles.container}>
      {errorTitle && (
        <span className={styles.errorMessage}>
          Make sure title and textfield are not empty
        </span>
      )}
      <input
        type="text"
        className={styles.input}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="styles">styles</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            alt=""
            width={20}
            height={20}
            className={styles.image}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />

            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image
                  src="/image.png"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.image}
                />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt=""
                width={20}
                height={20}
                className={styles.image}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/video.png"
                alt=""
                width={20}
                height={20}
                className={styles.image}
              />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
        {spinner && (
          <span className={styles.loader}>
            <TailSpin
              color="white"
              radius={"1px"}
              height={"20px"}
              width={"20px"}
            />
          </span>
        )}
      </button>
      {modal && (
        <div className={styles.modalContainer}>
          <div className={styles.closeModal}>
            <button
              className={styles.closeButton}
              onClick={() => {
                setModal(false);
              }}
            >
              <Image
                src="/close.png"
                alt=""
                width={20}
                height={20}
                className={styles.image}
              />
            </button>
          </div>
          <h2
            className={styles.modalHeader}
          >{`Your new blog ${title} has been posted!`}</h2>
          <span className={styles.modalDate}>{`Post Created: ${getTime()}`}</span>
          <div className={styles.linkModalContainer}>
            <Link href={`posts/${title}`} className={styles.linkModal}>
              Visit you post here!
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WritePage;
