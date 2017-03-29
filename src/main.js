import * as PIXI from 'pixi.js';
window.PIXI = PIXI;

import Resource from './Resource/main.js';
import Loader from './Loader/main.js';

window.Spidybot = {
  Resource: Resource,
  Loader: Loader
}

var test = new Resource.Image('/home/test.png', 'test');



/*
* To-Do List for (0.1):
* 1. Load Image [ ]
* 2. Load Audio [ ]
* 3. States and State Manager [ ]
* 4. Display Image [ ]
* 5. Animation Loop and Time [ ]
* 6. Movement [ ]
* 7. Animation [ ]
* 8. Click [ ]
*/



/*
 * “Whenever you can, act as a liberator.
 * Freedom, dignity, wealth - these three together constitute the greatest happiness of humanity.
 * If you bequeath all three to your people, their love for you will never die.”
 * - Kurosh (Cyrus) the Great
 */
