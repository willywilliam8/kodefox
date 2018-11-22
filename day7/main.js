import renderApp from './App';
import eventHandlers from './eventHandlers';
import initialState from './initialState';

let state = initialState;
// let state = {
//   name: 'Listi',
//   count: 1,
// };

global.emitEvent = (eventName, eventData) => {
  let eventHandler = eventHandlers[eventName];
  if (eventHandler) {
    state = eventHandler(state, eventData);
    render();
  }
};

// function renderApp(state) {
//   return `<p onClick="changeCount()">Hello ${state.count}</p>`;
// }

function render() {
  let html = renderApp(state);
  if (document.body) {
    document.body.innerHTML = html;
  }
}

render();
