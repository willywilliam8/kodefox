// @Flow
import type {State} from './types/State';

// function renderItems(state: State) {
//   return `<ul>${state.name}</ul>`;
// }

// function renderApp(state: State) {
//   //return `<p onClick="changeCount()">Hello ${state.count}</p>`;
//   return `
//   <p><b>Input to do list</b></p>
//   <p><input type="text" id="toDoItems" name="toDoItems" size="30"></p>
//   <button onClick="emitEvent('addToDoList')">Add</button>
//   <p>------------------------------------------------------------</p>
//   `;
//   //renderItems(state);
// }

// function renderApp(state: State) {
//   //return `<p onClick="changeCount()">Hello ${state.count}</p>`;
//   return `
//   <p>Hello ${state.count}</p>
//   <button onClick="emitEvent('increaseCount')">Increase</button>
//   <button onClick="emitEvent('decreaseCount')">Decrease</button>
//   `;
// }
function renderToDo(item) {
  let content = item.isDone ? `<s>${item.activity}</s>` : item.activity;
  return `<li onclick="emitEvent('doneButton', '${item.id}')">${content}</li>`;
}

function renderApp(state: State) {
  console.log('state value >>', state);
  //return `<p onClick="changeCount()">Hello ${state.count}</p>`;
  return `
    <ul>${state.toDoList.map((item) => renderToDo(item)).join('')}</ul>
    <input type="text" 
    value="${state.newItem}" onBlur="emitEvent('onTextChange', this.value)">
    <button onClick="emitEvent('addItem')">Add</button>
  `;
}

export default renderApp;
