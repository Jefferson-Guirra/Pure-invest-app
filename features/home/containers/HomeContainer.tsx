import styles from './styles.module.css'
import { HomePage } from '../page/Homepage'

export const HomeContainer = () => {
  return (
    <section className={ styles['home-container'] }>
      <HomePage />
    </section>
  )
}