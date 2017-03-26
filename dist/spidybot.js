(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseResource = function () {
  function BaseResource(src, name) {
    _classCallCheck(this, BaseResource);

    this._allocateResources(src, name);
  }

  _createClass(BaseResource, [{
    key: 'getName',
    value: function getName() {
      return this._name;
    }
  }, {
    key: 'getSource',
    value: function getSource() {
      return this._src;
    }
  }, {
    key: '_allocateResources',
    value: function _allocateResources(src, name) {
      this._src = src;
      this._name = name;
      this._type = this._findType(this._src);
      this._data = null;
    }
  }, {
    key: '_findType',
    value: function _findType(resName) {
      if (resName.indexOf('.png') > -1) return 'img/png';
      if (resName.indexOf('.jpg') > -1 || resName.indexOf('.jpeg') > -1) return 'img/jpg';
      if (resName.indexOf('.gif') > -1) return 'img/gif';

      if (resName.indexOf('.ogg') > -1) return 'snd/ogg';
      if (resName.indexOf('.mp3') > -1) return 'snd/mp3';
      if (resName.indexOf('.m4a') > -1) return 'snd/m4a';
      if (resName.indexOf('.wav') > -1) return 'snd/wav';
    }
  }]);

  return BaseResource;
}();

exports.default = BaseResource;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseResource2 = require('./BaseResource.js');

var _BaseResource3 = _interopRequireDefault(_BaseResource2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_BaseResource) {
  _inherits(Image, _BaseResource);

  function Image(src, name) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, src, name));
  }

  return Image;
}(_BaseResource3.default);

exports.default = Image;

},{"./BaseResource.js":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseResource2 = require('./BaseResource.js');

var _BaseResource3 = _interopRequireDefault(_BaseResource2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sound = function (_BaseResource) {
  _inherits(Sound, _BaseResource);

  function Sound(src, name) {
    _classCallCheck(this, Sound);

    return _possibleConstructorReturn(this, (Sound.__proto__ || Object.getPrototypeOf(Sound)).call(this, src, name));
  }

  return Sound;
}(_BaseResource3.default);

exports.default = Sound;

},{"./BaseResource.js":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _Sound = require('./Sound.js');

var _Sound2 = _interopRequireDefault(_Sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resource = {
  Image: _Image2.default,
  Sound: _Sound2.default
};

exports.default = Resource;

},{"./Image.js":2,"./Sound.js":3}],5:[function(require,module,exports){
'use strict';

var _main = require('./Resource/main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Spidybot = {
  Resource: _main2.default
};

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

},{"./Resource/main.js":4}]},{},[5]);
