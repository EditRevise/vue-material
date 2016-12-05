!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}({0:function(e,t,n){e.exports=n(20)},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(t,n){return!(!t||!t.$el)&&(0!==t._uid&&(t.$el.classList.contains(n)?t:e(t.$parent,n)))};t.default=n,e.exports=t.default},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.constructor===Array};t.default=n,e.exports=t.default},20:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-select",e.extend(o.default)),e.component("md-option",e.extend(r.default)),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var l=n(162),o=i(l),u=n(161),r=i(u),a=n(116),c=i(a);e.exports=t.default},61:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),l=i(s);t.default={props:{value:[String,Boolean,Number]},data:function(){return{parentSelect:{},check:!1,index:0}},computed:{isSelected:function(){if(this.value&&this.parentSelect.value){var e=this.value.toString();return this.parentSelect.multiple?this.parentSelect.value.indexOf(e)>=0:this.value&&this.parentSelect.value&&e===this.parentSelect.value.toString()}return!1},classes:function(){return{"md-selected":this.isSelected,"md-checked":this.check}}},methods:{selectOption:function(e){this.parentSelect.multiple?this.check=!this.check:this.parentSelect.selectOption(this.value,this.$refs.item.textContent),this.$emit("selected",e)}},watch:{isSelected:function(e){this.parentSelect.multiple&&(this.check=e)},check:function(e){e?this.parentSelect.selectMultiple(this.index,this.value,this.$refs.item.textContent):this.parentSelect.selectMultiple(this.index)}},mounted:function(){if(this.parentSelect=(0,l.default)(this.$parent,"md-select"),this.parentContent=(0,l.default)(this.$parent,"md-menu-content"),!this.parentSelect)throw new Error("You must wrap the md-option in a md-select");this.parentSelect.optionsAmount++,this.index=this.parentSelect.optionsAmount,this.parentSelect.multipleOptions[this.index]={},this.parentSelect.options[this.index]=this},beforeDestroy:function(){this.parentSelect&&(delete this.parentSelect.options[this.index],delete this.parentSelect.multipleOptions[this.index])}},e.exports=t.default},62:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=n(1),o=i(l),u=n(3),r=i(u);t.default={props:{name:String,id:String,required:Boolean,multiple:Boolean,value:[String,Number,Array],disabled:Boolean,placeholder:String,mdMenuClass:String},data:function(){return{selectedValue:null,selectedText:null,multipleText:null,multipleOptions:{},options:{},optionsAmount:0}},computed:{classes:function(){return{"md-disabled":this.disabled}},contentClasses:function(){return this.multiple?"md-multiple "+this.mdMenuClass:this.mdMenuClass}},watch:{value:function(e){this.setTextAndValue(e)}},methods:{getSingleValue:function(e){var t=this,n={};return Object.keys(this.options).forEach(function(i){var s=t.options[i];s.value===e&&(n.value=e,n.text=s.$refs.item.textContent)}),n},getMultipleValue:function(e){var t=this;if((0,r.default)(this.value)){var n=function(){var n=[];return e.forEach(function(e){Object.keys(t.options).forEach(function(i){var s=t.options[i];if(s.value===e){var l=s.$refs.item.textContent;t.multipleOptions[i]={value:e,text:l},n.push(l)}})}),{v:{value:e,text:n.join(", ")}}}();if("object"===("undefined"==typeof n?"undefined":s(n)))return n.v}return{}},setTextAndValue:function(e){var t=this.multiple?this.getMultipleValue(e):this.getSingleValue(e);this.selectedValue=t.value,this.selectedText=t.text,this.parentContainer&&this.$parent.setValue(t.text)},changeValue:function(e){this.$emit("input",e),this.$emit("change",e)},selectMultiple:function(e,t,n){var i=[];this.multipleOptions[e]={value:t,text:n};for(var s in this.multipleOptions)this.multipleOptions.hasOwnProperty(s)&&this.multipleOptions[s].value&&i.push(this.multipleOptions[s].value);this.changeValue(i)},selectOption:function(e,t){this.selectedText=t,this.changeValue(e)}},mounted:function(){this.parentContainer=(0,o.default)(this.$parent,"md-input-container"),this.setTextAndValue(this.value),this.parentContainer&&(this.parentContainer.setValue(this.value),this.parentContainer.hasSelect=!0)},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.setValue(""),this.parentContainer.hasSelect=!1)}},e.exports=t.default},85:function(e,t){},116:function(e,t){e.exports=".THEME_NAME .md-select-content .md-menu-item.md-selected,.THEME_NAME .md-select-content .md-menu-item.md-checked,.THEME_NAME.md-select-content .md-menu-item.md-selected,.THEME_NAME.md-select-content .md-menu-item.md-checked{color:PRIMARY-COLOR}\n"},161:function(e,t,n){var i,s;i=n(61);var l=n(221);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=l.render,s.staticRenderFns=l.staticRenderFns,e.exports=i},162:function(e,t,n){var i,s;n(85),i=n(62);var l=n(192);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=l.render,s.staticRenderFns=l.staticRenderFns,e.exports=i},192:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{staticClass:"md-select",class:e.classes},[t("md-menu",{attrs:{"md-close-on-select":!e.multiple}},[t("span",{ref:"value",staticClass:"md-select-value",attrs:{"md-menu-trigger":""}},[e._s(e.selectedText||e.multipleText||e.placeholder)])," ",t("md-menu-content",{staticClass:"md-select-content",class:e.contentClasses},[e._t("default")])])," ",t("select",{attrs:{name:e.name,id:e.id,required:e.required,tabindex:"-1"}},[t("option",{domProps:{value:e.value}},[e._s(e.value)])])])},staticRenderFns:[]}},221:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("md-menu-item",{staticClass:"md-option",class:e.classes,attrs:{tabindex:"-1"},on:{click:e.selectOption}},[e.parentSelect.multiple?t("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.check,expression:"check"}],staticClass:"md-primary",domProps:{value:e.check},on:{input:function(t){e.check=t}}},[t("span",{ref:"item"},[e._t("default")])]):t("span",{ref:"item"},[e._t("default")])," "])},staticRenderFns:[]}}})});