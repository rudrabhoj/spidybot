class BaseResource {
  constructor(src, name){
    this._allocateResources(src, name);
  }

  getName(){
    return this._name;
  }

  getSource(){
    return this._src;
  }

  _allocateResources(src, name){
    this._src = src;
    this._name = name;
    this._type = this._findType(this._src);
    this._data = null;
  }

  _findType(resName){
    if(resName.indexOf('.png') > -1) return 'img/png';
    if(resName.indexOf('.jpg') > -1 || resName.indexOf('.jpeg') > -1) return 'img/jpg';
    if(resName.indexOf('.gif') > -1) return 'img/gif';

    if(resName.indexOf('.ogg') > -1) return 'snd/ogg';
    if(resName.indexOf('.mp3') > -1) return 'snd/mp3';
    if(resName.indexOf('.m4a') > -1) return 'snd/m4a';
    if(resName.indexOf('.wav') > -1) return 'snd/wav';
  }
}

export default BaseResource;
