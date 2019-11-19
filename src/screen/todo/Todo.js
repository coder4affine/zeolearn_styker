import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import List from '../../components/list/List';
import Footer from '../../components/footer/Footer';
import './todo.css';

const Todo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [todos, setTodos] = useState([]);
  const [select, setSelect] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3004/todos');
        const newTodos = await res.json();
        setTodos(newTodos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const copy = () => {
      console.log('copied');
    };

    loadData();
    document.addEventListener('copy', copy);

    return () => {
      document.removeEventListener('copy', copy);
    };
  }, []);

  useEffect(() => {
    console.log('useEffect 1');
  }, [loading, error, select, todos]);

  const onToggleComplete = async todo => {
    setLoading(true);
    try {
      const updatedTodo = {
        ...todo,
        isDone: !todo.isDone,
      };

      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      const res = await fetch(`http://localhost:3004/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTodo),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const newUpdatedTodo = await res.json();

      const index = todos.findIndex(x => x.id === todo.id);
      setTodos([...todos.slice(0, index), newUpdatedTodo, ...todos.slice(index + 1)]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onDeleteTodo = async todo => {
    setLoading(true);
    try {
      await fetch(`http://localhost:3004/todos/${todo.id}`, {
        method: 'DELETE',
      });

      const updatedTodos = todos.filter(x => x.id !== todo.id);
      setTodos(updatedTodos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onSelect = val => {
    setSelect(val);
  };

  const onAddTodo = async todo => {
    setLoading(true);
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
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredTodos = () => {
    return todos.filter(x => {
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
      {loading && <h1 style={{ textAlign: 'center' }}>Loading....</h1>}
      {error && <h1 style={{ textAlign: 'center' }}>{error}</h1>}
      <Form onAddTodo={onAddTodo} />
      <div style={{ flex: 1 }}>
        <List
          todos={filteredTodos()}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
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
