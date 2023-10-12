import TodoItem from '../todoItem/TodoItem'
import styles from  './TodoList.module.css'

const TodoList = () => {
  return (
    <div className={styles.todoListContainer}>
        <TodoItem />
        <TodoItem />
    </div>
  )
}

export default TodoList