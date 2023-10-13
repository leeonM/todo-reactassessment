import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([])

    const addTodo = (newItem) =>{
        setTodoList([...todoList, newItem])
    }
    return <TodoContext.Provider value={{todoList, setTodoList, addTodo}}>{children}</TodoContext.Provider>
}

export default TodoProvider;