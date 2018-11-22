// @Flow
import type {State} from './types/State';

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
