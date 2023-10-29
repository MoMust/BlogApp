import React from "react";
import Styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../menuPost/menuPost";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.subtitle}>Whats hot now</h2>
      <h1 className={Styles.title}>Most popular</h1>
      <MenuPost withImage={false}/>
      <h2 className={Styles.subtitle}>Discover by topic</h2>
      <h1 className={Styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={Styles.subtitle}>Chosen by the editor</h2>
      <h1 className={Styles.title}>Editors pick</h1>
      <MenuPost withImage={true}/>
    </div>
  );
};

export default Menu;
