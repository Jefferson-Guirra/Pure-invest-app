import { HeaderNavigation, MenuMobile  } from '../../../../components'
import styles from './styles.module.css'
export const HeaderContainer = () => {
  return (
    <section className={ styles.container }>
      <article className={ styles.content }>
        <HeaderNavigation />
        <MenuMobile />
      </article>
    </section>

  )
}