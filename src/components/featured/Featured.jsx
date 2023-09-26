import React from "react";
import Styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>
        This is a <b>blogg app</b>
      </h1>
      <div className={Styles.post}>
        <div className={Styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={Styles.image} />
        </div>
        <div className={Styles.textContainer}>
          <h1 className={Styles.postTitle}>A title of post</h1>
          <p className={Styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi autem
            provident ipsam, inventore eum omnis exercitationem eligendi cum?
            Architecto amet delectus quisquam! Vel architecto exercitationem qui
            facilis totam, natus ipsa.
          </p>
          <button className={Styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
