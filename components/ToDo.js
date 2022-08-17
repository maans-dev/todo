import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { TiEdit } from 'react-icons/ti';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const ToDo = ({ value, completeToDo, removeToDo, updateToDo }) => {
  const [edit, setEdit] = useState({
    id: 0,
    input: '',
  });

  const submitUpdate = (value) => {
    updateToDo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return value.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeToDo(todo.id)}>
        {todo.text}
      </div>

      <div className='icons'>
        <BsFillCheckCircleFill
          onClick={() => removeToDo(todo.id)}
          className='delete-icon'
        />

        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default ToDo;
