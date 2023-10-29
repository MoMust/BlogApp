import React from 'react'
import Styles from './menuPost.module.css'
import Link from 'next/link';
import Image from 'next/image';

const MenuPost = ({withImage}) => {
  return (
    <div className={Styles.items}>
      <Link href="/" className={Styles.item}>
        {withImage && (
          <div className={Styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={Styles.image} />
          </div>
        )}
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.travel}`}>Travel</span>
          <h3 className={Styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            dolore.
          </h3>
          <div className={Styles.detail}>
            <span className={Styles.username}>John doe</span>
            <span className={Styles.date}>23.06.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={Styles.item}>
        {withImage && (
          <div className={Styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={Styles.image} />
          </div>
        )}
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.coding}`}>Coding</span>
          <h3 className={Styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            dolore.
          </h3>
          <div className={Styles.detail}>
            <span className={Styles.username}>John doe</span>
            <span className={Styles.date}>23.06.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={Styles.item}>
        {withImage && (
          <div className={Styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={Styles.image} />
          </div>
        )}
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.food}`}>Food</span>
          <h3 className={Styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            dolore.
          </h3>
          <div className={Styles.detail}>
            <span className={Styles.username}>John doe</span>
            <span className={Styles.date}>23.06.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPost