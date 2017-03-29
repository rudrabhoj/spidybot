import LoadData from './LoadData.js';
import Resource from '../Resource/main.js';

class Loader{
  constructor(){
    this._allocateResources();
  }

  loadImage(name, src){
    let img = new Resource.Image(src, name);
    this._loadData.addData(img);
  }

  loadSound(name, src){
    let snd = new Resource.Sound(src, name);
    this._loadData.addData(snd);
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

  _allocateResources(){
    this._loadData = new LoadData();

    this._fileLoadFoo = ()=>{};
    this._allLoadedFoo = ()=>{};
  }
}
