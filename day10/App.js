// @flow
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';

import type {State} from './state';
import Flexbox from 'flexbox-react';

type Props = {};

class App extends Component<Props, State> {
  state = {
    todoItems: [
      {id: '100', content: 'Buy Apples', isDone: false},
      {id: '120', content: 'Wash Car', isDone: false},
      {id: '180', content: 'Do Laundry', isDone: false},
      {id: '200', content: 'Teach Class', isDone: false},
    ],
    selectedIndex: 0,
    inputValue: '',
    searchValue: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown);
  }

  _onKeyDown = (event: Object) => {
    let {selectedIndex, todoItems} = this.state;
    let index = selectedIndex;
    let maxIndex = todoItems.length - 1;
    let newIndex = index;
    if (event.key === 'ArrowUp') {
      newIndex = Math.max(0, index - 1);
    }
    if (event.key === 'ArrowDown') {
      newIndex = Math.min(maxIndex, index + 1);
    }
    if (newIndex !== index) {
      this.setState({selectedIndex: newIndex});
    }
    if (event.key === ' ' && document.activeElement === document.body) {
      let selectedItem = todoItems[index];
      this._onToggleDone(selectedItem.id);
    }
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
    let {todoItems, inputValue} = this.state;
    if (inputValue.trim() === '') {
      return;
    }
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
    let {todoItems, inputValue, searchValue, selectedIndex} = this.state;
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
        <ul style={{listStyle: 'none', padding: 0}}>
          {todoFiltered.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              isSelected={index === selectedIndex}
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
