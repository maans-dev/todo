import React, {useState, useRef, useEffect } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    const handleChange = (e) => { 
        setInput(e.target.value) 
    }

    useEffect(() => {
        inputRef.current.focus();
      });
    
    const handleSubmit = (e) => {
        setInput(e.target.value)
        
        props.onSubmit({
            id: Math.floor(Math.random() * 1000000),
            text: input,
        })

        setInput('')
    }

  return (
        <form type='text' className='todoform' onSubmit={handleSubmit}>
             {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) 
      
      : 
      
      (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            todo
          </button>
        </>
      )}
        </form>
  )
}

export default TodoForm