"use client";

import React from "react";
import Styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className={Styles.container}>
      <button
        disabled={!hasPrev}
        className={Styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Prev
      </button>
      <button
        disabled={!hasNext}
        className={Styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
