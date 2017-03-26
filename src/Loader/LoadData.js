class LoadData {
  constructor(){
    this._allocateResources();
  }

  _allocateResources(){
    this._itemList = [];
  }

  _checkExist(itm){
    let lim = this._itemList.length;
    let itmName = itm.getName();

    for(let c = 0; c < lim; c++){
      let currentItm = this._itemList[c];
      let currentName = currentItm.getName();

      if(itmName === currentItm) return true;
    }

    return false;
  }
}

export default LoadData;
