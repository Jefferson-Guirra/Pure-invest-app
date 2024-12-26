import styles from './styles.module.css'

export const HomeContainer = () => {
  return (
    <section className={ styles['home-container'] }>

      <article className={ styles['content-text']}>
        <h2> 
          <span>PureInvest</span> 
          Transformando dicas em oportunidades para você investir com confiança e alcançar seus objetivos financeiros.
        </h2>
      </article>
      <article className={ styles['content-img']}></article>

    </section>
  )
}