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
        <Link href="*" className=''> 
          Nossos Produtos
        </Link>
        <Link href="*"> Home </Link>
        <Link href="*"> Explorar </Link>
        <Link href="*"> Dicas </Link>
        <Link href='*'>Quem somos</Link>
      </nav>
    </header>
  )
}