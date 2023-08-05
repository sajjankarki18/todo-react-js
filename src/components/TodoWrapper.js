import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
uuidv4()

export default function TodoWrapper() {
    const [todos, setTodos] = useState([])

    //Loading todos from the local storage
    useEffect(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);

    //Saving todos to the local storage
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo}])
        console.log(todos)
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
   <div className='TodoWrapper'>
   <h1>TODO List</h1>
     <TodoForm addTodo={addTodo}/>
     {todos.map((todo) => {
        return <Todo task= {todo} delTodo={deleteTodo}/>
     })}
   </div>
  )
}
