import React from "react";
import Styles from "./cardList.module.css";
import Pagination from "../pagination/pagination";

const CardList = () => {
  return (
    <div className={Styles.container}>
      <Pagination />
    </div>
  );
};

export default CardList;
