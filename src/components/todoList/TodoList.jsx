import { useContext } from 'react'
import TodoItem from '../todoItem/TodoItem'
import styles from  './TodoList.module.css'
import { TodoContext } from '../../context/TodoContext'

const TodoList = () => {
    const {todoList} = useContext(TodoContext)
  return (
    <div className={styles.todoListContainer}>
        {todoList.map((item,index)=>(
            <TodoItem item={item} key={index} />
        ))}
    </div>
  )
}

export default TodoList