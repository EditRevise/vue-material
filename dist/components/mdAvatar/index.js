/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=397)})({0:function(e,t){e.exports=function(e,t,r,n){var o,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,a=e.default);var d="function"==typeof a?a.options:a;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),r&&(d._scopeId=r),n){var c=d.computed||(d.computed={});Object.keys(n).forEach((function(e){var t=n[e];c[e]=function(){return t}}))}return{esModule:o,exports:a,options:d}}},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},112:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default={mixins:[a.default]},e.exports=t.default},217:function(e,t){},233:function(e,t){e.exports=".THEME_NAME.md-avatar.md-primary.md-avatar-icon{background-color:PRIMARY-COLOR}.THEME_NAME.md-avatar.md-primary.md-avatar-icon .md-icon{color:PRIMARY-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-accent.md-avatar-icon{background-color:ACCENT-COLOR}.THEME_NAME.md-avatar.md-accent.md-avatar-icon .md-icon{color:ACCENT-CONTRAST-0.99999}.THEME_NAME.md-avatar.md-warn.md-avatar-icon{background-color:WARN-COLOR}.THEME_NAME.md-avatar.md-warn.md-avatar-icon .md-icon{color:WARN-CONTRAST-0.99999}\n"},260:function(e,t,r){r(217);var n=r(0)(r(112),r(368),null,null);e.exports=n.exports},368:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-avatar",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}},397:function(e,t,r){e.exports=r(71)},71:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-avatar",u.default),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=r(260),u=n(a),d=r(233),c=n(d);e.exports=t.default}})}));