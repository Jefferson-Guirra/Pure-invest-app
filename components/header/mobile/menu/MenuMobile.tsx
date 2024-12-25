"use client"

import { useState } from 'react'
import styles from './styles.module.css'
export const MenuMobile = () => {
  const [active, setActive] = useState<boolean>(false)
  console.log(active)

  const handleActive = () => setActive(state => !state)
  return (
    <>
    <article onClick={handleActive} className={styles['menu-container']}>
      <span className={styles['line-1']}></span>
      <span className={styles['line-2']}></span>
      <span className={styles['line-3']}></span>
    </article>
    
    </>
  )
}