import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import List from '../../components/list/List';
import Footer from '../../components/footer/Footer';
import './todo.css';

export default class Todo extends Component {
  state = {
    todos: [],
    select: 'all',
  };

  onAddTodo = todo => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { id: Number(new Date().getTime()), text: todo, isDone: false }],
    });
  };

  onToggleComplete = todo => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === todo.id);
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...todo,
          isDone: !todo.isDone,
        },
        ...todos.slice(index + 1),
      ],
    });
  };

  onDeleteTodo = todo => {
    const { todos } = this.state;
    const updatedTodos = todos.filter(x => x.id !== todo.id);
    this.setState({ todos: updatedTodos });
  };

  onSelect = select => {
    this.setState({ select });
  };

  render() {
    const { todos, select } = this.state;

    const filteredTodos = todos.filter(x => {
      switch (select) {
        case 'pending':
          return !x.isDone;
        case 'completed':
          return x.isDone;
        default:
          return true;
      }
    });

    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        {/* implement Header */}
        <Header title="Todo App" />
        <Form onAddTodo={this.onAddTodo} />
        <div style={{ flex: 1 }}>
          <List
            todos={filteredTodos}
            onToggleComplete={this.onToggleComplete}
            onDeleteTodo={this.onDeleteTodo}
          />
        </div>
        <Footer onSelect={this.onSelect} select={select} />
      </div>
    );
  }
}
