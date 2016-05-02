!function e(t,i,n){function a(s,o){if(!i[s]){if(!t[s]){var h="function"==typeof require&&require;if(!o&&h)return h(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=i[s]={exports:{}};t[s][0].call(f.exports,function(e){var i=t[s][1][e];return a(i?i:e)},f,f.exports,e,t,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+e+"=([^&#]*)",i=new RegExp(t),n=i.exec(window.location.search);return null===n?null:decodeURIComponent(n[1].replace(/\+/g," "))}Object.defineProperty(i,"__esModule",{value:!0});var h=e("./states/main"),u=n(h);"function"!=typeof Object.assign&&!function(){Object.assign=function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(void 0!==n&&null!==n)for(var a in n)n.hasOwnProperty(a)&&(t[a]=n[a])}return t}}();var f={width:512,height:512,renderer:Phaser.CANVAS,parent:"stage",scaleMode:Phaser.ScaleManager.SHOW_ALL,antialias:!1},l=function(e){function t(){a(this,t);var e=o("b")||"http://pengc.asuscomm.com/spindemo/democ148",i=parseInt(o("w")||512),n=parseInt(o("h")||512),s=parseInt(o("c")||148),h=parseInt(o("p")||1);e=e.replace(/(\/+)$/,""),h%=s;var l=Object.assign({},f,{spinUrl:e,width:i,height:n,spritesCount:s,thumbnailFrame:h}),c=r(this,Object.getPrototypeOf(t).call(this,l));return c.state.add("mainState",new u["default"],!0),c}return s(t,e),t}(Phaser.Game);i["default"]=l},{"./states/main":3}],2:[function(e,t,i){(function(t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var n=e("./demoStage"),a=i(n);t.DemoStage=new a["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./demoStage":1}],3:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(e){function t(){return n(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return r(t,e),s(t,[{key:"preload",value:function(){var e=this.game.config,t=e.spinUrl,i=e.spritesCount,n=e.thumbnailFrame;this.spinUrl=t,this.thumbnailFrame=n,this.spritesCount=i;var a=this.getCacheKey(this.thumbnailFrame);this.game.load.image(a,this.spinUrl+"/"+a),this.game.stage.disableVisibilityChange=!0}},{key:"getCacheKey",value:function(e){var t=Phaser.Utils.pad(e.toString(),3,"0",1);return t+".jpg"}},{key:"create",value:function(){this.isLoaded=!1,this.frameIndex=-1,this.currentIndex=-1,this.isDragging=!1,this.timeNextFrame=0,this.speed=1,this.delay=40,this.isPaused=!0,this.images={};var e=this.getCacheKey(this.thumbnailFrame);this.images[e]=this.game.add.image(0,0,e),this.currentImage=this.images[e],this.game.load.onFileComplete.add(this.fileComplete,this),this.game.load.onLoadComplete.add(this.loadComplete,this);for(var t=1;t<=this.spritesCount;t++)if(t!==this.thumbnailFrame){var i=this.getCacheKey(t),n=this.spinUrl+"/"+i;this.game.load.image(i,n)}this.text=this.game.add.text(32,32,"loading ...",{fill:"#ffffff"}),this.game.load.start()}},{key:"onTap",value:function(){this.isPaused=!this.isPaused}},{key:"onDown",value:function(){this.isDragging=!0,this.indexOnDown=this.frameIndex}},{key:"onUp",value:function(){this.isDragging=!1}},{key:"onMove",value:function(e){if(this.isDragging){var t=e.positionDown,i=e.position,n=this.game.math.distance(t.x,t.y,i.x,i.y),a=Math.floor(n/5);this.speed=i.x<t.x?1:-1,this.frameIndex=this.indexOnDown+a*this.speed,this.updateCurrentFrame()}}},{key:"fileComplete",value:function(e,t){this.text.setText(e+"%");var i=this.game.add.image(0,0,t);i.visible=!1,this.images[t]=i}},{key:"loadComplete",value:function(){this.isLoaded=!0,this.frameIndex=this.thumbnailFrame,this.isPaused=!1,this.text.kill(),this.game.input.onTap.add(this.onTap,this),this.game.input.onDown.add(this.onDown,this),this.game.input.onUp.add(this.onUp,this),this.game.input.addMoveCallback(this.onMove,this)}},{key:"update",value:function(){return!this.isLoaded||this.isPaused||this.isDragging?(this.timeNextFrame=this.game.time.time,!1):(this.game.time.time>=this.timeNextFrame&&(this.frameSkip=1,this.frameDiff=this.game.time.time-this.timeNextFrame,this.frameDiff>this.delay&&(this.frameSkip=Math.floor(this.frameDiff/this.delay),this.frameDiff-=this.frameSkip*this.delay),this.timeNextFrame=this.game.time.time+(this.delay-this.frameDiff),this.frameIndex+=this.frameSkip*this.speed,this.updateCurrentFrame()),!0)}},{key:"updateCurrentFrame",value:function(){if(this.frameIndex%=this.spritesCount,this.frameIndex>this.spritesCount&&(this.frameIndex-=this.spritesCount),this.frameIndex<1&&(this.frameIndex+=this.spritesCount),this.currentIndex!==this.frameIndex){this.currentImage&&(this.currentImage.visible=!1);var e=this.images[this.getCacheKey(this.frameIndex)];e.visible=!0,this.currentIndex=this.frameIndex,this.currentImage=e}}}]),t}(Phaser.State);i["default"]=o},{}]},{},[2]);