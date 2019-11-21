import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const List = ({ todos, onToggleComplete, onDeleteTodo }) => {
  console.log('List');
  return (
    <>
      {todos.map(todo => (
        <div key={todo.id} style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
          <input type="checkbox" checked={todo.isDone} onChange={() => onToggleComplete(todo)} />
          <span style={{ display: 'flex', flex: 1, padding: '0 10px' }}>{todo.text}</span>
          <Button onClick={() => onDeleteTodo(todo)}>
            <span>Delete Todo</span>
          </Button>
        </div>
      ))}
    </>
  );
};

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default memo(List);
