import React, {useState} from 'react';
import TodoForm from './TodoForm'
import ToDo from './ToDo'

const TodoList = () => {
 const [value, setValue] = useState([])

 const addTodo = (todo) => { 
    if(!todo.text || /^\s+$/.test(todo.text)) {
        return 
    }

    const newTodos = [todo, ...value]
    setValue(newTodos)
    //understand the line above

    console.log(todo, ...value);
 }

  const completeToDo = (id) => {
    let updatedTodos = value.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setValue(updatedTodos)
   }

  const removeToDo = (id) => { 
    const removedArr = [...value].filter(todo => todo.id !== id);

    setValue(removedArr);
  }

  const updateToDo = (idValue, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setValue(prev => prev.map(item => (item.idValue === idValue ? newValue : item)));
   }

  return (
    <div className='todolist'>
        <h3 className='todoheader'>Todo</h3>  
        <TodoForm onSubmit={addTodo} />
        <ToDo  
        completeToDo={completeToDo} 
        removeToDo={removeToDo}
        updateToDo={updateToDo}
        value={value}
        />
    </div>
  )
}

export default TodoList