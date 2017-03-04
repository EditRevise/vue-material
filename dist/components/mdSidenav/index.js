/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=417)})({0:function(e,t){e.exports=function(e,t,n,i){var o,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),i){var c=u.computed||(u.computed={});Object.keys(i).forEach((function(e){var t=i[e];c[e]=function(){return t}}))}return{esModule:o,exports:s,options:u}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},151:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=i(o);t.default={data:function(){return{mdVisible:!1}},mixins:[s.default],props:{mdSwipeable:Boolean,mdSwipeThreshold:{type:Number,default:15},mdSwipeDistance:{type:Number,default:100}},computed:{classes:function(){return this.mdVisible&&"md-active"}},methods:{show:function(){this.open()},open:function(){this.mdVisible=!0,this.$el.focus(),this.$emit("open")},close:function(){this.mdVisible=!1,this.$el.blur(),this.$emit("close")},toggle:function(){this.mdVisible?this.close():this.open()},isHorizontallyInside:function(e){return e>0&&e<this.mountedRect.left+this.mountedRect.width},isVerticallyInside:function(e){return e>0&&e<this.mountedRect.top+this.mountedRect.height},isFromStartWhenClosed:function(e){return!!this.mdVisible||e<this.mdSwipeThreshold},handleTouchStart:function(e){var t=e.touches[0].clientX-this.mountedRect.left,n=e.touches[0].clientY-this.mountedRect.top;this.isHorizontallyInside(t)&&this.isVerticallyInside(n)&&this.isFromStartWhenClosed(t)&&(this.initialTouchPosition=t,this.canMove=!0)},handleTouchEnd:function(){this.canMove=!1,this.initialTouchPosition=null},handleTouchMove:function(e){if(this.canMove){var t=e.touches[0].clientX,n=this.mdVisible?this.initialTouchPosition-t:t-this.initialTouchPosition,i=this.mdVisible?"close":"open";n>this.mdSwipeDistance&&this[i]()}}},mounted:function(){this.mdSwipeable&&(this.mountedRect=this.$refs.backdrop.$el.getBoundingClientRect(),this.initialTouchPosition=null,this.canMove=!1,document.addEventListener("touchstart",this.handleTouchStart),document.addEventListener("touchend",this.handleTouchEnd),document.addEventListener("touchmove",this.handleTouchMove))},beforeDestroy:function(){this.mdSwipeable&&(document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchend",this.handleTouchEnd),document.removeEventListener("touchmove",this.handleTouchMove))}},e.exports=t.default},225:function(e,t){},250:function(e,t){e.exports=".THEME_NAME.md-sidenav .md-sidenav-content{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}\n"},308:function(e,t,n){n(225);var i=n(0)(n(151),n(383),null,null);e.exports=i.exports},383:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-sidenav",class:[e.themeClass,e.classes],attrs:{tabindex:"0"},on:{keyup:function(t){if(e._k(t.keyCode,"esc",27))return null;e.close(t)}}},[n("div",{staticClass:"md-sidenav-content"},[e._t("default")],2),e._v(" "),n("md-backdrop",{ref:"backdrop",staticClass:"md-sidenav-backdrop",on:{close:e.close}})],1)},staticRenderFns:[]}},417:function(e,t,n){e.exports=n(91)},91:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-sidenav",r.default),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var s=n(308),r=i(s),u=n(250),c=i(u);e.exports=t.default}})}));