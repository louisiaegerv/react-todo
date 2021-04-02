import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos }) {
  return (
    <div className='listContainer'>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} setTodos={setTodos} />
      })}
    </div>
  )
}

export default TodoList
