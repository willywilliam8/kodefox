type EventMap = Map<string, ListOfEvent>;

class EventEmitter {
  event: EventMap = new Map();
  addListener(eventName, eventListener) {
    ListOfEvent = this.event.get(eventName);
    if (ListOfEvent == null) {
      ListOfEvent = new Set();
      this.events.set(eventName, ListOfEvent);
    }
    ListOfEvent.add(eventListener);
    return [eventName, eventListener];
  }
  emit(eventName) {
    let ListOfEvent = this.evets.get(eventName);
    if (ListOfEvent) {
      for (let eventHandler of ListOfEvent) {
        eventHandler();
      }
    }
  }
  removeListenerByID(eventID) {
    let [eventName, eventListener] = id;
    let ListOfEvent = this.events.get(eventName);
    if (ListOfEvent != null) {
      ListOfEvent.delete(eventListener);
    }
  }
}
