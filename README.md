# SpidyBot - HTML5 Game Framework

SpidyBot is a rendering-engine agnostic HTML5 game framework currently under-construction. It is inspired from Phaser, PixiJS and OpenFL.


Primary reason for the development of SpidyBot is to make PixiJS 4.x usable from a high level game engine. Most game frameworks, if not tightly coupled with their rendering-engine, are heavily dependent upon them.


While SpidyBot would initially be using unmodified version of PixiJS 4.x for rendering, it wouldn't be dependent upon it. CreateJS or anything else could easily be used as the backend too.


Being agnostic to lower-end implementation is followed throughout. From rendering to audio and physics.


Once the engine is stable, more rendering engines could be made available, including but not limited to Phaser 3.x rendering engine and CreateJS. However, the focus would always be to make it work with the latest Pixi first as the biggest reason to even start the project was the fact that Phaser dependent upon an ancient version of Pixi.
