import { useContext } from 'react'
import styles from './InputField.module.css'
import { TodoContext } from '../../context/TodoContext'
import { useState } from 'react'

const InputField = () => {
  const [todoItem, setTodoItem] = useState("")
  const {addTodo} = useContext(TodoContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!todoItem){
      return
    }

    addTodo(todoItem)
    setTodoItem("")
    alert("Todo added successfully")
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <input type="text" className={styles.input} value={todoItem} onChange={(e)=>setTodoItem(e.target.value)} />
        <button className={styles.inputButton} type='submit'>Add</button>
    </form>
  )
}

export default InputField