// @flow

type ThingToDo = {
  id: string,
  activity: string,
  isDone: boolean,
};

export type State = {
  toDoList: Array<ThingToDo>,
  newItem: string,
};
