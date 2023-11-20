import Image from "next/image";
import Styles from "./card.module.css";
import Link from "next/link";

const Card = ({post, key}) => {

  
  return (
    <div className={Styles.container} key={key}>
        {post.img && (
        <div className={Styles.imageContainer}>
          <Image src={post.img} alt="" fill className={Styles.image} />
        </div>
        )}
      <div className={Styles.textContainer}>
        <div className={Styles.detail}>
          <span className={Styles.date}>
            {post.createdAt.substring(0, 10)} - {""}
          </span>
          <span className={Styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <p className={Styles.desc}>{post.desc.substring(0, 60)}</p>
        <Link href={`/posts/${post.slug}`} className={Styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
