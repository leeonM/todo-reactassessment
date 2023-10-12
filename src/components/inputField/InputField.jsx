import styles from './InputField.module.css'

const inputField = () => {

  return (
    <div className={styles.inputContainer}>
        <input type="text" className={styles.input} />
        <button className={styles.inputButton}>Add</button>
    </div>
  )
}

export default inputField