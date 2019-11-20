/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useEffect } from 'react';
import todoReducer, { initialState } from '../reducers/todoReducer';

export const TodoContext = createContext();

export const TodoContextComponent = ({ children }) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: 'LOAD_TODO_REQUEST' });
      try {
        const res = await fetch('http://localhost:3004/todos');
        const newTodos = await res.json();
        dispatch({ type: 'LOAD_TODO_SUCCESS', payload: newTodos });
      } catch (err) {
        dispatch({ type: 'LOAD_TODO_FAILURE', payload: err });
      }
    };
    loadData();
  }, []);

  const onToggleComplete = async todo => {
    dispatch({ type: 'UPDATE_TODO_REQUEST' });
    try {
      const updatedTodo = {
        ...todo,
        isDone: !todo.isDone,
      };

      const res = await fetch(`http://localhost:3004/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTodo),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const newUpdatedTodo = await res.json();

      dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: newUpdatedTodo });
    } catch (err) {
      dispatch({ type: 'UPDATE_TODO_FAILURE', payload: err });
    }
  };

  const onDeleteTodo = async todo => {
    dispatch({ type: 'DELETE_TODO_REQUEST' });
    try {
      await fetch(`http://localhost:3004/todos/${todo.id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'DELETE_TODO_SUCCESS', payload: todo });
    } catch (err) {
      dispatch({ type: 'DELETE_TODO_FAILURE', payload: err });
    }
  };

  const onAddTodo = async todo => {
    dispatch({ type: 'ADD_TODO_REQUEST' });
    try {
      const res = await fetch('http://localhost:3004/todos', {
        method: 'POST',
        body: JSON.stringify({ text: todo, isDone: false }),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const newTodo = await res.json();
      dispatch({ type: 'ADD_TODO_SUCCESS', payload: newTodo });
    } catch (err) {
      dispatch({ type: 'ADD_TODO_FAILURE', payload: err });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        ...todoState,
        onAddTodo,
        onToggleComplete,
        onDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
