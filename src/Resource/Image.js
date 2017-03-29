import BaseResource from './BaseResource.js';

class Image extends BaseResource {
  constructor(src, name){
    super(src, name);

    console.log(PIXI);
  }
}

export default Image;
