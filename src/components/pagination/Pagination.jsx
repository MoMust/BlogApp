import React from "react";
import Styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={Styles.container}>
      <button className={Styles.button}>Prev</button>
      <button className={Styles.button}>Next</button>
    </div>
  );
};

export default Pagination;
