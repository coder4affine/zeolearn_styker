import React, { useState, useContext } from 'react';
import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import List from '../../components/list/List';
import Footer from '../../components/footer/Footer';
import { TodoContext } from '../../context/todoContext';
import './todo.css';

const Todo = () => {
  const [select, setSelect] = useState('all');
  const todoContext = useContext(TodoContext);

  const onSelect = val => {
    setSelect(val);
  };

  const filteredTodos = () => {
    return todoContext.data.filter(x => {
      switch (select) {
        case 'pending':
          return !x.isDone;
        case 'completed':
          return x.isDone;
        default:
          return true;
      }
    });
  };

  return (
    <div
      id="todo"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* implement Header */}
      <Header title="Todo App" />
      {todoContext.loading && <h1 style={{ textAlign: 'center' }}>Loading....</h1>}
      {todoContext.error && <h1 style={{ textAlign: 'center' }}>{todoContext.error.message}</h1>}
      <Form onAddTodo={todoContext.onAddTodo} />
      <div style={{ flex: 1 }}>
        <List
          todos={filteredTodos()}
          onToggleComplete={todoContext.onToggleComplete}
          onDeleteTodo={todoContext.onDeleteTodo}
        />
      </div>
      <Footer onSelect={onSelect} select={select} />
    </div>
  );
};

export default Todo;

// export default class Todo extends Component {
//   state = {
//     todos: [],
//     select: 'all',
//     loading: false,
//     error: '',
//   };

//   async componentDidMount() {
//     this.setState({ loading: true });
//     try {
//       const res = await fetch('http://localhost:3004/todos');
//       const todos = await res.json();
//       this.setState({ todos });
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   render() {
//     const { todos, select, loading, error } = this.state;

// ;
//   }
// }
