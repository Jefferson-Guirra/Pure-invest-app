import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export const HeaderNavigation = () => {
  return (
    <header className={styles.header}>
      <article>
        <p>Logo</p>
      </article>
  
      <nav className={ styles.nav}> 
        <Link href="*"> Home </Link>
        <Link href="*"> Explorar </Link>
        <Link href='*'>Quem somos</Link>
        <Link href='*'>Blog</Link>
      </nav>
    </header>
  )
}