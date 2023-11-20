import React from 'react'
import Styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

const BlogPage = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>{cat} Blog</h1>
        <div className={Styles.content}>
            <CardList page={page} cat={cat}/>
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage