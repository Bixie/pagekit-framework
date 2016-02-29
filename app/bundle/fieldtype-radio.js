/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\fieldtypes\\radio\\radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 14:
/***/ function(module, exports) {

	'use strict';

	// <template>
	//
	//     <div :class="classes(['uk-form-row'], field.data.classSfx)">
	//         <span class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}
	//             <a v-if="field.data.help_text && field.data.help_show == 'tooltip_icon'"
	//                class="uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right"
	//                :title="field.data.help_text" data-uk-tooltip="{delay: 100}"></a>
	//         </span>
	//
	//         <div class="uk-form-controls uk-form-controls-text">
	//             <p v-for="option in field.options" class="uk-form-controls-condensed">
	//                 <label><input type="radio" value="{{ option.value }}"
	//                               v-model="inputValue"> {{ option.text }}</label>
	//             </p>
	//         </div>
	//
	//         <p v-if="field.data.help_text && field.data.help_show == 'block'"
	//            class="uk-form-help-block">{{{field.data.help_text}}}</p>
	//
	//     </div>
	//
	// </template>
	//
	// <script>

	module.exports = {

	    mixins: [BixieFieldtypeMixin],

	    settings: {},

	    appearance: {},

	    data: function data() {
	        return {
	            fieldid: _.uniqueId('formmakerfield_')
	        };
	    }

	};

	window.BixieFieldtypes.components['radio'] = module.exports;

	// </script>
	//

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div :class=\"classes(['uk-form-row'], field.data.classSfx)\">\r\n        <span class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans }}\r\n            <a v-if=\"field.data.help_text && field.data.help_show == 'tooltip_icon'\"\r\n               class=\"uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right\"\r\n               :title=\"field.data.help_text\" data-uk-tooltip=\"{delay: 100}\"></a>\r\n        </span>\r\n\r\n        <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <p v-for=\"option in field.options\" class=\"uk-form-controls-condensed\">\r\n                <label><input type=\"radio\" value=\"{{ option.value }}\"\r\n                              v-model=\"inputValue\"> {{ option.text }}</label>\r\n            </p>\r\n        </div>\r\n\r\n        <p v-if=\"field.data.help_text && field.data.help_show == 'block'\"\r\n           class=\"uk-form-help-block\">{{{field.data.help_text}}}</p>\r\n\r\n    </div>\r\n\r\n";

/***/ }

/******/ });