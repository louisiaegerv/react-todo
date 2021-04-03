import React, { useState, useRef } from 'react'

import { FiEdit, FiSave } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Todo({ todo, setTodos }) {
  const [editing, setEditing] = useState(false)

  const [editText, setEditText] = useState('')

  const editRef = useRef(null)

  const selectEdit = () => {
    setEditing(true)
    setTimeout(() => {
      editRef.current.focus()
    }, 100)
    setEditText(todo.content)
  }

  const changeText = (e) => {
    const { value } = e.target
    setEditText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editText) {
      setEditing(false)
      setTodos((todos) => {
        return todos.map((item) => {
          if (item.id === todo.id) {
            item.content = editText
          }
          return item
        })
      })
    }
  }

  const deleteTodo = () => {
    setTodos((todos) => {
      return todos.filter((item) => {
        return item !== todo
      })
    })
  }

  const setComplete = () => {
    setTodos((todos) => {
      return todos.map((item) => {
        if (item.id === todo.id) {
          console.log('matched', item)
          return { ...item, completed: !item.completed }
        }
        return item
      })
    })
  }

  return (
    <div
      className={`todoContainer ${todo.completed ? 'completed' : ''} ${
        editing ? 'editing' : ''
      }`}
    >
      {editing ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              className='edit'
              ref={editRef}
              type='text'
              onChange={changeText}
              value={editText}
            />
            <button onClick={handleSubmit}>
              <FiSave />
            </button>
          </form>
        </>
      ) : (
        <>
          <p onClick={setComplete} className='todoText'>
            {todo.completed ? <strike>{todo.content}</strike> : todo.content}
          </p>
          <button onClick={selectEdit}>
            <FiEdit />
          </button>
          <button onClick={deleteTodo}>
            <RiDeleteBin6Line />
          </button>
        </>
      )}
    </div>
  )
}
