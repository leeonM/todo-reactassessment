import { useState } from 'react'
import styles from  './TodoItem.module.css'

const TodoItem = ({item, deleteTodo, completeTodo, editTodo, editTask}) => {
  const [update, setUpdate] = useState("")

  return (
    <div className={styles.todoItem}>
            {item.edit ? (
              <div>
              <input type='text' value={update} onChange={(e)=>setUpdate(e.target.value)} />
              </div>              
              ) : 
            (<p className={item.completed ? styles.complete : styles.incomplete}>{item.task}</p>)}
            <div className={styles.todoButtons}>
            {!item.edit && <button className={styles.done} onClick={()=>completeTodo(item)}>{item.completed ? 'Incomplete' : 'Complete'}</button>}
            {item.edit ? <button className={styles.edit} onClick={()=>editTask(item, update)}>Submit</button> : <button className={styles.edit} onClick={()=>editTodo(item)}>Edit</button>}
            {!item.edit && <button className={styles.delete} onClick={()=>deleteTodo(item)}>Delete</button>}
            </div>
        </div>
  )
}

export default TodoItem