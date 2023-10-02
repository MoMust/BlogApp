import CardList from "../components/cardList/cardList";
import CategoryList from "../components/categoryList/CategoryList";
import Featured from "../components/featured/Featured";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/menu";
import Navbar from "../components/navbar/Navbar";
import styles from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
