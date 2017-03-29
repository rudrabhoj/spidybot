class LoadData {
  constructor(){
    this._allocateResources();
  }

  addData(dat){
    if(!this._checkExist(dat)){
      this._addData(dat);
    }
  }

  getImageLinks(){
    let imgArr = [];

    for(let c = 0; c < this._imgList.length; c++){
      let itm = this._imgList[c];
      let src itm.getSource();

      imgArr.push(src);
    }

    return imgArr;
  }

  _allocateResources(){
    this._sndList = [];
    this._imgList = [];
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
