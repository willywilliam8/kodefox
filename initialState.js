import type {State} from './types/State';

let initialState = {
  toDoList: [
    {id: '4', activity: 'Buy Oreos', isDone: false},
    {id: '9', activity: 'Teach Bootcamp', isDone: false},
    {id: '1', activity: 'Clean Laptop', isDone: false},
  ],
  newItem: '',
};

// let initialState = {
//   name: 'Listi',
//   count: 1,
// };

export default initialState;
