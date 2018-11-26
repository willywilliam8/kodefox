import React from 'react';
import TodoItem from './TodoItem';
import {setState} from './state';
import type {State} from './state';

type Props = {
  state: State,
};

export default function App(props: Props) {
  let {state} = props;
  console.log('here >>>', state.newItem);
  let {todoItems, newTodoItems} = state;
  let toggleDone = (id) => {
    let newTodoItems = state.todoItems.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
      } else {
        return item;
      }
    });
    setState({
      ...state,
      todoItems: newTodoItems,
    });
  };
  let onTextChange = (event) => {
    let text = event.target.value;
    setState({...state, newItem: String(text)});
  };
  let addItem = () => {
    let newItem = {
      id: Math.random().toString(),
      content: state.newItem,
      isDone: false,
    };
    let newTodoItems = [...state.todoItems, newItem];
    setState({...state, todoItems: newTodoItems, newItem: ''});
  };
  return (
    <div>
      <ul>
        {todoItems.map((item) => (
          <TodoItem key={item.id} item={item} toggleDone={toggleDone} />
        ))}
      </ul>
      <input type="text" value={state.newItem} onChange={onTextChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

//key={item.id}
