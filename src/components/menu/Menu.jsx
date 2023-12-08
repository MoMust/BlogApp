import React from "react";
import Styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/menuPost";
import MenuCategories from "../menuCategories/MenuCategories";

const getData = async () => {
  const resp = await fetch("http://localhost:3000/api/popular?popular=true", {
    cache: "no-store",
  });

  if (!resp.ok) {
    throw new Error("Failed");
  }

  return resp.json();
};

const Menu = async () => {

  const data = await getData();
  
  return (
    <div className={Styles.container}>
      <h2 className={Styles.subtitle}>Whats hot now</h2>
      <h1 className={Styles.title}>Most popular</h1>
      {data.popularPosts?.map((item) =>(
      <MenuPost post={item} key={item._id}/>
      ))}
      <h2 className={Styles.subtitle}>Discover by topic</h2>
      <h1 className={Styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={Styles.subtitle}>Chosen by the editor</h2>
      <h1 className={Styles.title}>Editors pick</h1>
      {/* <MenuPost/> */}
    </div>
  );
};

export default Menu;
