class LoadData {
  constructor(){
    this._allocateResources();
  }

  addData(dat){
    if(!this._checkExist(dat)){
      this._addData(dat);
    }
  }

  getImages(){
    return this._imgList;
  }

  getSounds(){
    return this._sndList;
  }

  getToalResources(){
    return this._totalResources;
  }

  _allocateResources(){
    this._sndList = [];
    this._imgList = [];

    this._uploadResourceCount();
  }

  _uploadResourceCount(){
    this._totalImages = this._imgList.length();
    this._totalSounds = this._sndList.length();

    this._totalResources = this._totalImages + this._totalSounds;
  }

  _checkExist(itm){
    if(this._checkExistImg(itm)) return true;
    if(this._checkExistSnd(itm)) return true;

    return false;
  }

  _checkExistImg(img){
    return this._checkExistInArr(img, this._imgList);
  }

  _checkExistSnd(snd){
    return this._checkExistInArr(img, this._sndList);
  }

  _checkExistInArr(itm, arr){
    let lim = this.arr.length;
    let itmName = itm.getName();

    for(let c = 0; c < lim; c++){
      let currentItm = this.arr[c];
      let currentName = currentItm.getName();

      if(itmName === currentItm) return true;
    }

    return false;
  }

  _addData(dat){
    let type = dat.getType();

    if(type === 'img'){
      this._addImage(dat);
    } else{
      this._addSound(dat);
    }
  }

  _addImage(img){
    this._imgList.push(img);
  }

  _addSound(snd){
    this._sndList.push(snd);
  }
}

export default LoadData;
