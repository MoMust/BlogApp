import React from 'react'
import Styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

const BlogPage = () => {
  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>Style Blog</h1>
        <div className={Styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage