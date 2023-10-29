import React from "react";
import Styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Title</h1>
      <div className={Styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
