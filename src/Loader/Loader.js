import LoadData from './LoadData.js';
import Resource from '../Resource/main.js';

class Loader{
  constructor(){
    this._allocateResources();
  }

  download(){
    console.log("Downloading");
  }

  setOnLoaded(foo){
    this._fileLoadFoo = foo;
  }

  setOnComplete(foo){
    this._allLoadedFoo = foo;
  }

  getTotalResources(){
    return this._loadData.getTotalResources();
  }

  loadImage(name, src){
    let img = new Resource.Image(src, name);
    this._loadData.addData(img);
  }

  loadSound(name, src){
    let snd = new Resource.Sound(src, name);
    this._loadData.addData(snd);
  }

  _allocateResources(){
    this._loadData = new LoadData();

    this._fileLoadFoo = ()=>{};
    this._allLoadedFoo = ()=>{};
  }
}
