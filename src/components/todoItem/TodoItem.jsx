import styles from  './TodoItem.module.css'

const TodoItem = () => {
  return (
    <div className={styles.todoItem}>
            <p>Wash clothes</p>
            <div className={styles.todoButtons}>
            <button className={styles.done}>Done</button>
            <button className={styles.edit}>Edit</button>
            <button className={styles.delete}>Delete</button>
            </div>
        </div>
  )
}

export default TodoItem