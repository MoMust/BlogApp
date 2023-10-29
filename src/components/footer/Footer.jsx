import React from "react";
import Styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.info}>
        <div className={Styles.logo}>
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
          <h1 className={Styles.logoText}>Next-blog</h1>
        </div>
        <p className={Styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam doloremque accusamus magni iusto sunt fuga harum inventore magnam delectus consequuntur!
        </p>
        <div className={Styles.icons}>
          <Image src={"/facebook.png"} alt="" width={18} height={18} />
          <Image src={"/instagram.png"} alt="" width={18} height={18} />
          <Image src={"/tiktok.png"} alt="" width={18} height={18} />
          <Image src={"/youtube.png"} alt="" width={18} height={18} />
        </div>
      </div>
      <div className={Styles.links}>
        <div className={Styles.list}>
          <span className={Styles.listTitle}>Links</span>
          <Link href='/' >Homepage</Link>
          <Link href='/' >Blog</Link>
          <Link href='/' >About</Link>
          <Link href='/' >Contact</Link>
        </div>
        <div className={Styles.list}>
          <span className={Styles.listTitle}>Tags</span>
          <Link href='/' >Style</Link>
          <Link href='/' >Fashion</Link>
          <Link href='/' >Coding</Link>
          <Link href='/' >Travel</Link>
        </div>
        <div className={Styles.list}>
          <span className={Styles.listTitle}>Social</span>
          <Link href='/' >Facebook</Link>
          <Link href='/' >Instagram</Link>
          <Link href='/' >Tiktok</Link>
          <Link href='/' >Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
