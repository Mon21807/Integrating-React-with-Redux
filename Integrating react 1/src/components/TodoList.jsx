// components/TodoList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span>{todo.title}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
