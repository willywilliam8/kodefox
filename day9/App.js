import React, {Component} from 'react';
import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';

import type {State} from './state';

type Props = {};

class App extends Component<Props, State> {
  state = {
    todoItems: [
      {id: '100', content: 'Buy Apples', isDone: false},
      {id: '120', content: 'Wash Car', isDone: false},
    ],
    inputValue: '',
    searchValue: '',
  };

  _onToggleDone = (id: string) => {
    let newItems = this.state.todoItems.map((item) =>
      item.id === id ? {...item, isDone: !item.isDone} : item,
    );
    this.setState({
      todoItems: newItems,
    });
  };

  _addItem = (content: string) => {
    let {todoItems} = this.state;
    let newItem = {
      id: Math.random().toString(),
      content,
      isDone: false,
    };
    this.setState({
      todoItems: [...todoItems, newItem],
      inputValue: '',
    });
  };

  _onClear = () => {
    this.setState({
      inputValue: '',
    });
  };

  _onTextChange = (e: Event) => {
    this.setState({inputValue: e.target.value});
  };

  render() {
    let {todoItems, inputValue, searchValue} = this.state;
    let onSearchChange = (event) => {
      this.setState({searchValue: event.target.value});
    };

    let newItems = [
      ...todoItems.filter((item) => !item.isDone),
      ...todoItems.filter((item) => item.isDone),
    ];
    let todoFiltered = newItems.filter((item) => {
      return item.content.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
      <div>
        <input
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={onSearchChange}
        />
        <ul>
          {todoFiltered.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              toggleDone={this._onToggleDone}
            />
          ))}
        </ul>
        <button onClick={this._onClear}>Clear Input</button>
        <NewItemForm
          inputValue={inputValue}
          onTextChange={this._onTextChange}
          onAddItem={this._addItem}
          onClearItem={this.state.clear}
        />
      </div>
    );
  }
}

export default App;
