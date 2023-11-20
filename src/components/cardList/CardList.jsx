import React from "react";
import Styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getData = async (page, cat) => {
const resp = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
  cache: "no-store",
});

  if (!resp.ok) {
    throw new Error("Failed");
  }

  return resp.json();
};

const CardList = async ({page, cat})=> {

  const {posts, count} = await getData(page, cat);
  
  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page -1) + POST_PER_PAGE < count;


  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Title</h1>
      <div className={Styles.posts}>
        {posts?.map((item) =>(
          <Card post={item} key={item._id}/>
        ))}
        
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
};

export default CardList;
