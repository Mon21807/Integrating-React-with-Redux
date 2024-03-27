// components/AddTodo.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../actions';

function AddTodo() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({
        id: uuidv4(),
        title: title,
        status: false
      }));
      setTitle('');
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
