import Link from 'next/link';
import React from 'react'
import Styles from './MenuCategories.module.css'
const MenuCategories = () => {
  return (
    <div className={Styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${Styles.categoryItem} ${Styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${Styles.categoryItem} ${Styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${Styles.categoryItem} ${Styles.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${Styles.categoryItem} ${Styles.style}`}
      >
        Styles
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${Styles.categoryItem} ${Styles.culture}`}
      >
        Culture
      </Link>
    </div>
  );
}

export default MenuCategories