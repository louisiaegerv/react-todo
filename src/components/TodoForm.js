import React, { useState, useEffect, useRef } from 'react'

function TodoForm({ setTodos }) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (input) {
      // add todo to list
      setTodos((todos) => {
        return [...todos, { id: Date.now(), content: input, completed: false }]
      })
      setInput('')
    }
  }

  return (
    <>
      <form className='formContainer' onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={input}
          id='inputText'
          type='text'
          placeholder='something awesome'
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </>
  )
}

export default TodoForm
