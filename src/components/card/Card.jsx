import Image from "next/image";
import Styles from "./card.module.css";
import Link from "next/link";

const Card = ({data, key}) => {

  
  return (
    <div className={Styles.container} key={key}>
      <div className={Styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={Styles.image} />
      </div>
      <div className={Styles.textContainer}>
        <div className={Styles.detail}>
          <span className={Styles.date}>{data.createdAt}</span>
          <span className={Styles.category}>{data.catSlug}</span>
        </div>
        <Link href="/">
          <h1>
            {data.title}
          </h1>
        </Link>
        <p className={Styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem
          odit iusto, corrupti consectetur nam quae fugiat distinctio. Ut, cum
          eius excepturi velit at iusto neque quod odio in possimus!
        </p>
        <Link href="/" className={Styles.link}>Read more</Link>
      </div>
    </div>
  );
};

export default Card;
