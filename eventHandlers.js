import type {State} from './types/State';

type UpdateFunction = (State) => State;
type EventHandlerObject = {[eventName: string]: UpdateFunction};

let eventHandlers: EventHandlerObject = {
  // onChangeCount: (oldState) => {
  //   return {...oldState, count: oldState.count + 1};
  // },
  doneButton: (oldState, id) => {
    let newToDoList = oldState.toDoList.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
      } else {
        return item;
      }
    });
    return {...oldState, toDoList: newToDoList};
  },
  onTextChange: (oldState, text) => {
    return {...oldState, newItem: String(text)};
  },
  addItem: (oldState) => {
    let newItem = {
      id: Math.random().toString(),
      activity: oldState.newItem,
      isDone: false,
    };
    let newToDoList = [...oldState.toDoList, newItem];
    return {...oldState, toDoList: newToDoList, newItem: ''};
  },

  // addToDoList: (oldState) => {
  //   let arrayToDoList = [];
  //   arrayToDoList.push(input);
  //   return {...};
  // }
};

export default eventHandlers;
