import eventemitter3 from 'eventemitter3';

class EventManager {
  constructor(){
    this._allocateResources();
  }

  addEvent(eventName, targetFoo, context){
    this._eventEmitter.on(eventName, targetFoo, context);
  }

  addOnce(eventName, targetFoo, context){
    this._eventEmitter.once(eventName, targetFoo, context);
  }

  removeEvent(eventName, targetFoo, context){
    this._eventEmitter.removeListener(eventName, targetFoo, context);
  }

  _allocateResources(){
    this._eventEmitter = new eventemitter3();
  }
}

export default EventManager;