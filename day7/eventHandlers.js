import type {State} from './types/State';

type UpdateFunction = (State) => State;
type EventHandlerObject = {[eventName: string]: UpdateFunction};

let eventHandlers: EventHandlerObject = {
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
};

export default eventHandlers;
