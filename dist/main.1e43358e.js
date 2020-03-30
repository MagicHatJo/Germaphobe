// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    CREDIT: "CREDIT",
    OPTION: "OPTION",
    PLAY: "PLAY",
    OVER: "OVER"
  },
  IMAGE: {
    LOGO: "logo.png",
    PLAY: "play_button.png",
    OPTIONS: "options_button.png",
    OPTION_PAGE: "option_page.png",
    CREDITS: "credits_button.png",
    CREDIT_PAGE: "credit_page.png",
    TITLE: "title_bg.png",
    FLOOR: "floor.png",
    FOG: "fog.png",
    OVER: "go_bg.png",
    RETRY: "retry_button.png",
    MAIN: "main_button.png"
  },
  AUDIO: {
    MAIN: "Friends.ogg",
    PLAY: "Resilience.ogg"
  },
  SPRITE: {
    PLAYER: "player_sprites.png",
    HEART: "heart_sprites.png",
    ENEMY01: "enemy_01_sprites.png",
    ENEMY02: "enemy_02_sprites.png"
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  var _super = _createSuper(LoadScene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.LOAD
    });
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "loadImages",
    value: function loadImages() {
      this.load.setPath("./assets/image");

      for (var prop in _CST.CST.IMAGE) {
        this.load.image(_CST.CST.IMAGE[prop], _CST.CST.IMAGE[prop]);
      }
    }
  }, {
    key: "loadAudio",
    value: function loadAudio() {
      this.load.setPath("./assets/audio");

      for (var prop in _CST.CST.AUDIO) {
        this.load.audio(_CST.CST.AUDIO[prop], _CST.CST.AUDIO[prop]);
      }
    }
  }, {
    key: "loadSprites",
    value: function loadSprites() {
      this.load.setPath("./assets/sprite");
      this.load.spritesheet(_CST.CST.SPRITE.PLAYER, _CST.CST.SPRITE.PLAYER, {
        frameHeight: 78,
        frameWidth: 65
      });
      this.load.spritesheet(_CST.CST.SPRITE.HEART, _CST.CST.SPRITE.HEART, {
        frameHeight: 27,
        frameWidth: 27
      });
      this.load.spritesheet(_CST.CST.SPRITE.ENEMY01, _CST.CST.SPRITE.ENEMY01, {
        frameHeight: 54,
        frameWidth: 58
      });
      this.load.spritesheet(_CST.CST.SPRITE.ENEMY02, _CST.CST.SPRITE.ENEMY02, {
        frameHeight: 49,
        frameWidth: 100
      });
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      this.loadImages();
      this.loadAudio();
      this.loadSprites(); //Create Loading Bar

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff
        }
      });
      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
      });
    } //Mandatory

  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  var _super = _createSuper(MenuScene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.MENU
    });
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      //Animations
      this.anims.create({
        key: "walk",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PLAYER, {
          frames: [1, 2]
        })
      }); //Background

      this.add.image(0, 0, _CST.CST.IMAGE.TITLE).setOrigin(0).setDepth(0); //Title

      this.add.image(400, 75, _CST.CST.IMAGE.LOGO);
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      //Options
      var playButton = this.add.image(50, 300, _CST.CST.IMAGE.PLAY).setOrigin(0);
      var optionButton = this.add.image(50, 400, _CST.CST.IMAGE.OPTIONS).setOrigin(0);
      var creditButton = this.add.image(50, 500, _CST.CST.IMAGE.CREDITS).setOrigin(0); //Sprite

      var player = this.add.sprite(600, 400, _CST.CST.SPRITE.PLAYER); //Audio

      var bg_music = this.sound.add(_CST.CST.AUDIO.MAIN, {
        loop: true
      });
      bg_music.setVolume(0.1);
      bg_music.play();
      player.play("walk"); //Play Button

      playButton.setInteractive();
      playButton.on("pointerover", function () {
        playButton.x += 5;
        playButton.y += 5;
      });
      playButton.on("pointerout", function () {
        playButton.x -= 5;
        playButton.y -= 5;
      });
      playButton.on("pointerdown", function () {
        playButton.setScale(0.9);
      });
      playButton.on("pointerup", function () {
        playButton.setScale(1);
        bg_music.stop();

        _this.scene.start(_CST.CST.SCENES.PLAY);
      }); //Options Button

      optionButton.setInteractive();
      optionButton.on("pointerover", function () {
        optionButton.x += 5;
        optionButton.y += 5;
      });
      optionButton.on("pointerout", function () {
        optionButton.x -= 5;
        optionButton.y -= 5;
      });
      optionButton.on("pointerdown", function () {
        optionButton.setScale(0.9);
      });
      optionButton.on("pointerup", function () {
        optionButton.setScale(1);

        _this.scene.launch(_CST.CST.SCENES.OPTION);
      }); //Credits Button

      creditButton.setInteractive();
      creditButton.on("pointerover", function () {
        creditButton.x += 5;
        creditButton.y += 5;
      });
      creditButton.on("pointerout", function () {
        creditButton.x -= 5;
        creditButton.y -= 5;
      });
      creditButton.on("pointerdown", function () {
        creditButton.setScale(0.9);
      });
      creditButton.on("pointerup", function () {
        creditButton.setScale(1);

        _this.scene.launch(_CST.CST.SCENES.CREDIT);
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js"}],"src/scenes/CreditScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CreditScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(CreditScene, _Phaser$Scene);

  var _super = _createSuper(CreditScene);

  function CreditScene() {
    _classCallCheck(this, CreditScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.CREDIT
    });
  }

  _createClass(CreditScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var page = this.add.image(0, 0, _CST.CST.IMAGE.CREDIT_PAGE).setOrigin(0);
      page.setInteractive();
      page.on("pointerup", function () {
        _this.scene.stop();
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return CreditScene;
}(Phaser.Scene);

exports.CreditScene = CreditScene;
},{"../CST":"src/CST.js"}],"src/scenes/OptionScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OptionScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(OptionScene, _Phaser$Scene);

  var _super = _createSuper(OptionScene);

  function OptionScene() {
    _classCallCheck(this, OptionScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.OPTION
    });
  }

  _createClass(OptionScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var page = this.add.image(0, 0, _CST.CST.IMAGE.OPTION_PAGE).setOrigin(0);
      page.setInteractive();
      page.on("pointerup", function () {
        _this.scene.stop();
      });
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return OptionScene;
}(Phaser.Scene);

exports.OptionScene = OptionScene;
},{"../CST":"src/CST.js"}],"src/objects/Player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Player = /*#__PURE__*/function (_Phaser$Physics$Arcad) {
  _inherits(Player, _Phaser$Physics$Arcad);

  var _super = _createSuper(Player);

  function Player(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, scene, x, y, texture, frame);
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    scene.physics.world.enableBody(_assertThisInitialized(_this));

    _this.setOrigin(0, 0);

    _this.setImmovable(true);

    _this.setCollideWorldBounds(true);

    _this.setSize(50, 50); //Attributes


    _this.hp = 3;
    return _this;
  }

  return Player;
}(Phaser.Physics.Arcade.Sprite);

exports.Player = Player;
},{}],"src/objects/Enemy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enemy = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Enemy = /*#__PURE__*/function (_Phaser$Physics$Arcad) {
  _inherits(Enemy, _Phaser$Physics$Arcad);

  var _super = _createSuper(Enemy);

  function Enemy(scene, texture, direction, type, speed, frame) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _super.call(this, scene, 0, 0, texture, frame);
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    scene.physics.world.enableBody(_assertThisInitialized(_this));

    _this.setOrigin(0, 0);

    _this.setImmovable(true);

    _this.setSize(40, 40); //randomize spawn based on direction


    switch (direction) {
      case "top":
        _this.x = Math.floor(Math.random() * 800);
        _this.y = -50;
        _this.vx = 0;
        _this.vy = 1;
        break;

      case "bottom":
        _this.x = Math.floor(Math.random() * 800);
        _this.y = 650;
        _this.vx = 0;
        _this.vy = -1;
        break;

      case "left":
        _this.x = -50;
        _this.y = Math.floor(Math.random() * 600);
        _this.vx = 1;
        _this.vy = 0;
        break;

      case "right":
        _this.x = 850;
        _this.y = Math.floor(Math.random() * 600);
        _this.vx = -1;
        _this.vy = 0;
        break;
    }

    _this.play("enemy_0" + type + "_" + direction);

    _this.setPosition(_this.x, _this.y);

    _this.direction = direction;
    _this.speed = speed;
    return _this;
  }

  _createClass(Enemy, [{
    key: "update",
    value: function update() {
      this.x += this.vx * this.speed;
      this.y += this.vy * this.speed;
      this.setPosition(this.x, this.y); //Delete if reached other side

      switch (this.direction) {
        case "top":
          if (this.y > 650) {
            this.destroy();
          }

          break;

        case "bottom":
          if (this.y < -50) {
            this.destroy();
          }

          break;

        case "left":
          if (this.x > 850) {
            this.destroy();
          }

          break;

        case "right":
          if (this.x < -50) {
            this.destroy();
          }

          break;
      }
    }
  }]);

  return Enemy;
}(Phaser.Physics.Arcade.Sprite);

exports.Enemy = Enemy;
},{}],"src/objects/Horde.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Horde = void 0;

var _CST = require("../CST");

var _Enemy = require("../objects/Enemy");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Horde = /*#__PURE__*/function () {
  function Horde(scene) {
    _classCallCheck(this, Horde);

    this.scene = scene;
    this.enemies = scene.physics.add.group({
      immovable: true
    }); //Spawning

    this.enemyDiff = 0; //key for selecting random enemy

    this.enemyLoc = 0; //key for selecting random spawn point

    this.enemySpeed = 1; //key for selecting max speed

    this.enemyLimit = 2; //key for selecting max spawn count

    this.lastCounter = 0;
    this.spriteArr = [_CST.CST.SPRITE.ENEMY01, _CST.CST.SPRITE.ENEMY02];
    this.dirArr = ["top", "bottom", "left", "right"];
    this.prev_time = 0;
    this.delay = 0;
    this.delayMax = 2500;
    this.delayMin = 500;
  }

  _createClass(Horde, [{
    key: "update",
    value: function update(time, counter) {
      for (var i = 0; i < this.enemies.getChildren().length; i++) {
        this.enemies.getChildren()[i].update();
      }
    }
  }, {
    key: "spawner",
    value: function spawner(time) {
      //regularly spawns enemies at randomized intervals
      if (time - this.prev_time > this.delay) {
        var toSpawn = Math.floor(Math.random() * this.enemyLimit + 1);

        for (var i = 0; i < toSpawn; i++) {
          this.spawn();
        }

        this.prev_time = time;
        this.delay = Math.random() * this.delayMax + this.delayMin;
      }
    }
  }, {
    key: "spawn",
    value: function spawn() {
      var randSprite = Math.floor(Math.random() * this.enemyDiff);
      var randLoc = Math.floor(Math.random() * this.enemyLoc);
      var randSpeed = Math.floor(Math.random() * this.enemySpeed) + 1;

      if (randSprite === 1) {
        randSpeed += 2;
      }

      this.enemies.add(new _Enemy.Enemy(this.scene, this.spriteArr[randSprite], this.dirArr[randLoc], randSprite + 1, randSpeed));
    }
  }]);

  return Horde;
}();

exports.Horde = Horde;
},{"../CST":"src/CST.js","../objects/Enemy":"src/objects/Enemy.js"}],"src/objects/UI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI = exports.Heart = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Heart = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Heart, _Phaser$GameObjects$S);

  var _super = _createSuper(Heart);

  function Heart(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, Heart);

    _this = _super.call(this, scene, x, y, texture, frame);
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));

    _this.setOrigin(0, 0);

    _this.setScale(2);

    _this.damaged = false;
    return _this;
  }

  _createClass(Heart, [{
    key: "update",
    value: function update() {
      if (this.damaged) {
        this.setFrame(1);
      }
    }
  }]);

  return Heart;
}(Phaser.GameObjects.Sprite);

exports.Heart = Heart;

var UI = /*#__PURE__*/function () {
  function UI(scene, hp) {
    _classCallCheck(this, UI);

    //Setup
    this.scene = scene;
    this.depth = 4;
    this.total_hp = hp;
    this.hp = hp;
    this.counter = 0; //HP

    this.hearts = scene.physics.add.group({
      immovable: true
    });

    for (var i = 0; i < hp; i++) {
      this.hearts.add(new Heart(this.scene, (i + 1) * 50, 25, _CST.CST.SPRITE.HEART, 2));
    } //Score


    this.score = this.scene.add.text(750, 20, 0, {
      fontFamily: 'Arial',
      fontSize: 40,
      color: "#000000",
      strokeThickness: 2,
      stroke: "#FFFFFF"
    }).setDepth(this.depth);
  }

  _createClass(UI, [{
    key: "damage",
    value: function damage() {
      this.hp--;
      this.hearts.getChildren()[this.hp].damaged = true;
    }
  }, {
    key: "update",
    value: function update() {
      this.counter += 0.02;

      for (var i = 0; i < this.total_hp; i++) {
        this.hearts.getChildren()[i].update();
      }

      this.score.text = Math.floor(this.counter);
      this.score.setX(750 - this.score.displayWidth);
    }
  }]);

  return UI;
}();

exports.UI = UI;
},{"../CST":"src/CST.js"}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

var _Player = require("../objects/Player");

var _Horde = require("../objects/Horde");

var _UI = require("../objects/UI");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlayScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  var _super = _createSuper(PlayScene);

  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.PLAY
    });
  }

  _createClass(PlayScene, [{
    key: "preload",
    value: function preload() {
      //Animations
      //Player
      this.anims.create({
        key: "stand",
        frameRate: 1,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PLAYER, {
          frames: [0]
        })
      });
      this.anims.create({
        key: "walk",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PLAYER, {
          frames: [1, 2]
        })
      }); //Enemies

      this.anims.create({
        key: "enemy_01_top",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY01, {
          frames: [0, 1, 0, 2]
        })
      });
      this.anims.create({
        key: "enemy_01_bottom",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY01, {
          frames: [4, 5, 4, 6]
        })
      });
      this.anims.create({
        key: "enemy_01_left",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY01, {
          frames: [3, 7, 3, 11]
        })
      });
      this.anims.create({
        key: "enemy_01_right",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY01, {
          frames: [8, 9, 8, 10]
        })
      });
      this.anims.create({
        key: "enemy_02_top",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY02, {
          frames: [1, 0, 1, 3]
        })
      });
      this.anims.create({
        key: "enemy_02_bottom",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY02, {
          frames: [6, 4, 6, 7]
        })
      });
      this.anims.create({
        key: "enemy_02_left",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY02, {
          frames: [8, 11, 8, 5]
        })
      });
      this.anims.create({
        key: "enemy_02_right",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.ENEMY02, {
          frames: [10, 9, 10, 2]
        })
      }); //Background

      this.add.image(0, 0, _CST.CST.IMAGE.FLOOR).setOrigin(0).setDepth(0);
      this.add.image(0, 0, _CST.CST.IMAGE.FOG).setOrigin(0).setDepth(5);
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      //Creating Objects
      this.player = new _Player.Player(this, 570, 360, _CST.CST.SPRITE.PLAYER);
      this.ui = new _UI.UI(this, this.player.hp);
      this.horde = new _Horde.Horde(this); //Input Handling

      this.keyboard = this.input.keyboard.addKeys("W, A, S, D"); //Audio

      var bg_music = this.sound.add(_CST.CST.AUDIO.PLAY, {
        loop: true
      });
      bg_music.setVolume(0.1);
      bg_music.play(); //Colliders

      this.physics.world.addCollider(this.player, this.horde.enemies, function (player, enemy) {
        player.hp--;

        _this.ui.damage();

        if (player.hp <= 0) {
          player.destroy();

          for (var i = _this.horde.enemies.getChildren().length - 1; i >= 0; i--) {
            _this.horde.enemies.getChildren()[i].destroy();
          }

          bg_music.stop();

          _this.scene.start(_CST.CST.SCENES.OVER, {
            score: _this.ui.score
          });
        }

        enemy.destroy();
      });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      //delta 16.666 @ 60 fps
      //UI
      this.ui.update(); //Enemy

      this.horde.spawner(time, this.ui.score.text);
      this.horde.update(time); //Spawn Modifiers

      var toCheck = Math.floor(this.ui.counter);

      if (toCheck === 30) {
        this.horde.enemyLoc = 1.9;
      }

      if (toCheck === 60) {
        this.horde.enemyDiff = 1.9;
        this.horde.enemyLoc = 2.9;
        this.delayMin -= 100;
      }

      if (toCheck === 90) {
        this.horde.enemyLoc = 3.9;
        this.delayMin -= 100;
      }

      if (toCheck === 120) {
        this.delayMin -= 100;
      }

      if (toCheck % 15 === 0 && toCheck != this.horde.lastCounter) {
        this.horde.enemySpeed++;
        this.horde.enemyLimit++;
        this.horde.lastCounter = toCheck;
      } //Player


      if (this.player.active) {
        //Input Handling
        if (this.keyboard.W.isDown) {
          this.player.setVelocityY(-250);
        }

        if (this.keyboard.A.isDown) {
          this.player.setVelocityX(-250);
        }

        if (this.keyboard.S.isDown) {
          this.player.setVelocityY(250);
        }

        if (this.keyboard.D.isDown) {
          this.player.setVelocityX(250);
        }

        if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
          this.player.setVelocityX(0);
        }

        if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
          this.player.setVelocityY(0);
        } //Animation


        if (this.player.body.velocity.x != 0 || this.player.body.velocity.y != 0) {
          this.player.play("walk", true);
        } else {
          this.player.play("stand", true);
        }
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js","../objects/Player":"src/objects/Player.js","../objects/Horde":"src/objects/Horde.js","../objects/UI":"src/objects/UI.js"}],"src/scenes/OverScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OverScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(OverScene, _Phaser$Scene);

  var _super = _createSuper(OverScene);

  function OverScene() {
    _classCallCheck(this, OverScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.OVER
    });
  }

  _createClass(OverScene, [{
    key: "init",
    value: function init(data) {
      this.score = data.score;
    }
  }, {
    key: "preload",
    value: function preload() {
      //Background
      this.add.image(0, 0, _CST.CST.IMAGE.OVER).setOrigin(0).setDepth(0);
      this.time = this.add.text(200, 250, this.score.text, {
        fontFamily: 'Arial',
        fontSize: 60,
        color: "#B8B8B8"
      }).setDepth(1);
      this.time.setX(200 - this.time.displayWidth / 2);
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var retryButton = this.add.image(25, 400, _CST.CST.IMAGE.RETRY).setOrigin(0);
      var mainButton = this.add.image(25, 500, _CST.CST.IMAGE.MAIN).setOrigin(0); //Retry Button

      retryButton.setInteractive();
      retryButton.on("pointerover", function () {
        retryButton.x += 5;
        retryButton.y += 5;
      });
      retryButton.on("pointerout", function () {
        retryButton.x -= 5;
        retryButton.y -= 5;
      });
      retryButton.on("pointerdown", function () {
        retryButton.setScale(0.9);
      });
      retryButton.on("pointerup", function () {
        retryButton.setScale(1);

        _this.scene.start(_CST.CST.SCENES.PLAY);
      }); //Main Menu Button

      mainButton.setInteractive();
      mainButton.on("pointerover", function () {
        mainButton.x += 5;
        mainButton.y += 5;
      });
      mainButton.on("pointerout", function () {
        mainButton.x -= 5;
        mainButton.y -= 5;
      });
      mainButton.on("pointerdown", function () {
        mainButton.setScale(0.9);
      });
      mainButton.on("pointerup", function () {
        mainButton.setScale(1);

        _this.scene.start(_CST.CST.SCENES.MENU);
      });
    }
  }]);

  return OverScene;
}(Phaser.Scene);

exports.OverScene = OverScene;
},{"../CST":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _CreditScene = require("./scenes/CreditScene");

var _OptionScene = require("./scenes/OptionScene");

var _PlayScene = require("./scenes/PlayScene");

var _OverScene = require("./scenes/OverScene");

/** @type {import("../typings/phaser")} */
var game = new Phaser.Game({
  width: 800,
  height: 600,
  parent: "gameContainer",
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _CreditScene.CreditScene, _OptionScene.OptionScene, _PlayScene.PlayScene, _OverScene.OverScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/CreditScene":"src/scenes/CreditScene.js","./scenes/OptionScene":"src/scenes/OptionScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js","./scenes/OverScene":"src/scenes/OverScene.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65381" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map