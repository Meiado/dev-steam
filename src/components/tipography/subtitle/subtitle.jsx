import styles from './subtitle.module.css'

export const Subtitle = ({children}) => {



  return (
    <h2 className={styles.subtitle}>{children}</h2>
  )
}
