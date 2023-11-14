import React from "react";
import Styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";


const getData = async () => {
  const resp = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!resp.ok) {
    throw new Error("Failed");
  }

  return resp.json();
};

const CategoryList = async () => {
  const data = await getData();

  console.log("data:",data)

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Popular Categories</h1>
      <div className={Styles.categories}>
          {data.categories?.map((item) =>(
            <Link
              href="/blog?cat=style"
              className={`${Styles.category} ${Styles[item.slug]}`}
              key={item._id}
            >
             { item.img && (<Image
                src={item.img}
                alt="style"
                width={32}
                height={32}
                className={Styles.image}
              />)}
              {item.title}
            </Link>
          ))}
          
      </div>
    </div>
  );
};

export default CategoryList;
CategoryList;
