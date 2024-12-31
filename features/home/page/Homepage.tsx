"use client"
import styles from './styles.module.css'
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {} from '../../../public/invest-animation.json'
export const HomePage = () => {
  return (
    <>
      <article className={ styles['content-text']}>
      <h2> 
        <span>PureInvest </span> 
         Transformando dicas em oportunidades para você investir com confiança e alcançar seus objetivos financeiros.
      </h2>
    </article>
    <article className={ styles['content-img']}>
    <DotLottieReact
      src='https://lottie.host/3bbc4855-b15f-4dda-be58-abe5b553a335/woS4GNx7Gv.lottie'
      loop
      autoplay
    />
    </article>
    </>
  )
}