import styles from './input.module.css';

export const Input = ({ fullWidth, ...props }) => {
  return (
    <input className={`${styles.input } ${fullWidth && styles.fullwidth}`} {...props}/>
  )
}
