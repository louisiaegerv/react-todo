import React, { useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Wow', completed: false },
    { id: 2, content: 'This is amazing', completed: false },
    { id: 3, content: 'How neat', completed: false },
  ])

  return (
    <>
      <div className='container'>
        <h3 style={{ textAlign: 'center' }}>The Amazing To Do List</h3>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <p style={{ textAlign: 'center', marginBottom: '100px' }}>
        Click a todo to complete it
      </p>
    </>
  )
}

export default App
