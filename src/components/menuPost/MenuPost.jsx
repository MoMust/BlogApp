import React from 'react'
import Styles from './menuPost.module.css'
import Link from 'next/link';
import Image from 'next/image';

const MenuPost = ({post, key}) => {

  return (
    <div className={Styles.items} key={key}>
      <Link href="/" className={Styles.item}>
        {post.img && (
          <div className={Styles.imageContainer}>
            <Image src={post?.img} alt="" fill className={Styles.image} />
          </div>
        )}
        <div className={Styles.textContainer}>
          <span className={`${Styles.category} ${Styles.travel}`}>{post.catSlug}</span>
          <h3 className={Styles.postTitle}>{post.title}</h3>
          <div className={Styles.detail}>
            <span className={Styles.username}>{post.user.name}</span>
            <span className={Styles.date}>
            {""} - {post.createdAt.substring(0, 10)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPost