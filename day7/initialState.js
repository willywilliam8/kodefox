import type {State} from './types/State';

let initialState = {
  toDoList: [
    {id: '4', activity: 'Buy Oreos', isDone: false},
    {id: '9', activity: 'Teach Bootcamp', isDone: false},
    {id: '1', activity: 'Clean Laptop', isDone: false},
  ],
  newItem: '',
};

export default initialState;
