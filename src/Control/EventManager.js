class EventManager {
  constructor(){
    this._allocateResources();
  }

  addEvent(eventName, fooName, targetFoo, context){

  }

  addOnce(eventName, fooName, targetFoo, context){

  }

  removeEvent(eventName, fooName, targetFoo, context){

  }

  _allocateResources(){
    this._events = [];
  }

  _createNewEvent(name){
    let e = {};
    e.name = name;
    e._functions = [];

    return e;
  }

  _createNewFunction(fooName, targetFoo, context){
    let functionExe = targetFoo.bind(context);
    let f = {};

    f.name = fooName;
    f._target = functionExe;
  }

  _indexOfEvent(eventName){
    let lim = this._events.length;

    for(let c = 0; c < lim; c++){
      let currentEvent = this._events[c];
      if(currentEvent.name === eventName) return c;
    }

    //-1 = not found
    return -1;
  }

  _eventExist(eventName){
    if(this._indexOfEvent(eventName) > -1){
      return true;
    } else {
      return false;
    }
  }

  _indexOfFunction(eventName, functionName){
    let eventPos = this._indexOfEvent(eventName);
    if(eventPos === -1) return -1;

    let fooArr = this._events[eventPos]._functions;
    let lim = fooArr.length;

    for(let c = 0; c < lim; c++){
      let currentFunction = fooArr[c];
      if(currentFunction.name === functionName) return c;
    }

    return -1;
  }

  _functionExist(eventName, functionName){
    if(this._indexOfFunction(eventName, functionName) > -1){
      return true;
    } else {
      return false;
    }
  }

}

export default EventManager;
