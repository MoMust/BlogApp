import React from "react";
import Styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Popular titles</h1>
      <div className={Styles.categories}>
          <Link href="/blog?cat=style" className={`${Styles.category} ${Styles.style}`}>
            <Image
              src="/style.png"
              alt="style"
              width={32}
              height={32}
              className={Styles.image}
            />
            Style
          </Link>
          <Link href="/blog" className={`${Styles.category} ${Styles.travel}`}>
            <Image
              src="/travel.png"
              alt="travel"
              width={32}
              height={32}
              className={Styles.image}
            />
            travel
          </Link>
          <Link href="/blog" className={`${Styles.category} ${Styles.culture}`}>
            <Image
              src="/culture.png"
              alt="culture"
              width={32}
              height={32}
              className={Styles.image}
            />
            culture
          </Link>
          <Link href="/blog" className={`${Styles.category} ${Styles.coding}`}>
            <Image
              src="/coding.png"
              alt="coding"
              width={32}
              height={32}
              className={Styles.image}
            />
            coding
          </Link>
      </div>
    </div>
  );
};

export default CategoryList;
CategoryList;
