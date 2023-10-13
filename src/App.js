import { useEffect } from 'react';
import styles from  './App.module.css'
import InputField from './components/inputField/InputField';
import TodoList from './components/todoList/TodoList';

function App() {


  return (
    <div className={styles.app}>
    <div className={styles.container}>
    <div className={styles.title}>
    <h1>TODO APP</h1>
    </div>
    <InputField />
    <TodoList />
    </div>
    </div>
  );
}

export default App;
