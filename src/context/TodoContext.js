import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
    // allow refresh so data persists or alternatively start with an empty array if there are no tasks
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('TODOS')) ?? [])

    useEffect(() => {
        if (todoList){
          window.localStorage.setItem('TODOS', JSON.stringify(todoList))
        }
      }, [todoList])
    

    const addTodo = (newItem) =>{
        setTodoList([...todoList, {task: newItem, completed: false, edit: false}])
    }

    const deleteTodo = (item)=>{
        setTodoList(todoList.filter((todo)=>todo !== item))
    }

    const completeTodo = (item)=>{
        setTodoList(todoList.map((todo)=> item === todo ? {...todo, completed: !todo.completed}: todo))
    }

    // turns edit to true so task can be updated
    const editTodo = (item)=>{
        setTodoList(todoList.map((todo)=> item === todo ? {...todo, edit:!todo.edit }: todo))
    }

    // update task and turn edit back to false
    const editTask = (item, task)=>{
        setTodoList(todoList.map((todo)=> item === todo ? {...todo, task, edit:!todo.edit}:todo))
    }

    const activeTodo = todoList.filter((todo)=> todo.completed !== true)


    return <TodoContext.Provider value={{todoList, setTodoList, addTodo, deleteTodo, completeTodo, editTodo, editTask, activeTodo}}>{children}</TodoContext.Provider>
}

export default TodoProvider;