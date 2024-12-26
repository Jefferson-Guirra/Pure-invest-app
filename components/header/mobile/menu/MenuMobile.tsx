"use client"

import { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
export const MenuMobile = () => {
  const [active, setActive] = useState<boolean>(false)

  const handleActive = () => setActive(state => !state)
  return (
    <>
    <button onClick={handleActive} className={styles['menu-container']}>
      <span 
      className={!active ? styles['line-1'] : `${styles['line-1']} ${styles['active-line-1']}`}>

      </span>
      <span className={!active ? styles['line-2'] : `${styles['line-2']} ${styles['active-line-2']}`}></span>
      <span className={!active ? styles['line-3'] : `${styles['line-3']} ${styles['active-line-3']}`}></span>
    </button>
    
      <article className={!active ? styles['content-mobile'] : `${styles['content-mobile']} ${styles['active-content-mobile']}` }>
        <Link href="*"> Home </Link>
        <Link href="*"> Explorar </Link>
        <Link href='*'>Quem somos</Link>
        <Link href='*'>Blog</Link>
    </article>
    </>
  )
}