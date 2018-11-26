// @flow
import {render} from './main';

type TodoItem = {
  id: string,
  content: string,
  isDone: boolean,
};

export type State = {
  todoItems: Array<TodoItem>,
};

let state: State = {
  todoItems: [
    {id: '100', content: 'Buy Apples', isDone: false},
    {id: '120', content: 'Wash Car', isDone: false},
  ],
  newItem: '',
};

export function getState(): State {
  return state;
}

export function setState(newState: State) {
  state = newState;
  render();
}
