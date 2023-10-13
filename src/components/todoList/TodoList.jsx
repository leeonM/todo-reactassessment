import { useContext, useState } from 'react'
import TodoItem from '../todoItem/TodoItem'
import styles from  './TodoList.module.css'
import { TodoContext } from '../../context/TodoContext'
import { useEffect } from 'react'

const TodoList = () => {
    //store todo list in context so accessible from inputfield and todolist components
    const {todoList, deleteTodo, completeTodo, editTodo, editTask, activeTodo} = useContext(TodoContext)

    
  return (
    <div className={styles.todoListContainer}>
    <div>You have {activeTodo.length} tasks remaining</div>
        {todoList.map((item,index)=>(
            <TodoItem item={item} deleteTodo={deleteTodo} editTodo={editTodo} editTask={editTask} completeTodo={completeTodo} key={index} />
        ))}
    </div>
  )
}

export default TodoList