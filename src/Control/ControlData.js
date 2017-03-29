import EventManager from './EventManager.js';

class ControlData {
  constructor(){
    this._allocateResources();
  }

  _allocateResources(){
    this.eventManager = new EventManager();
  }
}

export default ControlData;