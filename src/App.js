import React, { Component } from 'react';
import TodoList from './TodoList';

export default class App extends Component {
  state = {
    todos: [
      {id: 1, title: 'Купить сок', completed: false},
      {id: 2, title: 'Посадить дерево', completed: true},
      {id: 3, title: 'Съесть мороженое', completed: true},
    ]
  }

  render() {
    return (
      <div className="container">
        <h1>Список дел</h1>

          <div className="input-field">
            <input type="text" />
            <label>Введите задачу</label>
          </div>

          <TodoList todos={this.state.todos} />
      </div>
    );
  }
}