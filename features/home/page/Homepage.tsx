import styles from './styles.module.css'
import Image from 'next/image'

export const HomePage = () => {
  return (
    <>
      <article className={ styles['content-text']}>
      <h2> 
        <span>PureInvest</span> 
        Transformando dicas em oportunidades para você investir com confiança e alcançar seus objetivos financeiros.
      </h2>
    </article>
    <article className={ styles['content-img']}>
      <img src="/transparent-bull.png" alt="" />
    </article>
    </>
  )
}