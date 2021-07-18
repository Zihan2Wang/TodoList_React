// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([{ id: '001', name: 'grocery', isDone: true },
  { id: '002', name: 'Meeting with the professor', isDone: false },
  { id: '003', name: 'Interview', isDone: true }])

  const addTodoItem = (todoObj) => {
    const newTodos = [todoObj, ...todos]
    setTodos(newTodos)
  }

  const updateTodoItem = (id, isDone) => {
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, isDone: isDone }
      else return todoObj
    })
    setTodos(newTodos)
  }

  const deleteTodoItem = (id) => {
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    setTodos(newTodos)
  }

  const checkAllTodo = (isDone) => {
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, isDone }
    })
    setTodos(newTodos)
  }

  const deleteAllCompleted = () => {
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.isDone
    })
    setTodos(newTodos)
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodoItem={addTodoItem} />
        <List todos={todos} updateTodoItem={updateTodoItem} deleteTodoItem={deleteTodoItem} />
        <Footer todos={todos} checkAllTodo={checkAllTodo} deleteAllCompleted={deleteAllCompleted} />
      </div>
    </div>
  )
}

export default App;
