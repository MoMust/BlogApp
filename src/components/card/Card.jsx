import Image from "next/image";
import Styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={Styles.image} />
      </div>
      <div className={Styles.textContainer}>
        <div className={Styles.detail}>
          <span className={Styles.date}>01.07.2023 - </span>
          <span className={Styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
            adipisci?
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
