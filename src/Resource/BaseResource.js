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

  getType(){
    return this._type.type;
  }

  getFormat(){
    return this._type.format;
  }

  isDownloaded(){
    return this._downloaded;
  }

  canDownload(){
    return !this._downloaded;
  }

  _allocateResources(src, name){
    this._src = src;
    this._name = name;
    this._type = this._findType(this._src);
    this._data = null;
    this._downloaded = false;
  }

  _findType(resName){
    console.log("Got Res Name %s", resName);
    if(resName.indexOf('.png') > -1) return {type:'img', format: 'png'};
    if(resName.indexOf('.jpg') > -1 || resName.indexOf('.jpeg') > -1) return {type:'img', format: 'png'};
    if(resName.indexOf('.gif') > -1) return {type:'img', format: 'gif'};

    if(resName.indexOf('.ogg') > -1) return {type:'snd', format: 'ogg'};
    if(resName.indexOf('.mp3') > -1) return {type:'snd', format: 'mp3'};
    if(resName.indexOf('.m4a') > -1) return {type:'snd', format: 'm4a'};
    if(resName.indexOf('.wav') > -1) return {type:'snd', format: 'wav'};
  }
}

export default BaseResource;
