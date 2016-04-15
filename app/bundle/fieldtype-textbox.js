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
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\fieldtypes\\textbox\\textbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\fieldtypes\\textbox\\textbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 20:
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    mixins: [BixieFieldtypeMixin],

	    settings: {
	        'placeholder': {
	            type: 'text',
	            label: 'Placeholder',
	            attrs: { 'class': 'uk-form-width-large' }
	        },
	        'minLength': {
	            type: 'number',
	            label: 'Min length input',
	            attrs: { 'class': 'uk-form-width-small uk-text-right', 'min': 0 }
	        },
	        'maxLength': {
	            type: 'number',
	            label: 'Max length input',
	            attrs: { 'class': 'uk-form-width-small uk-text-right', 'min': 0 }
	        }
	    },

	    appearance: {
	        'rows': {
	            type: 'number',
	            label: 'Rows textarea',
	            attrs: { 'class': 'uk-form-width-small uk-text-right', 'min': 0 }
	        }

	    },

	    data: function data() {
	        return {
	            fieldid: _.uniqueId('formmakerfield_')
	        };
	    },

	    created: function created() {
	        this.field.data.rows = this.field.data.rows || 4;
	        this.field.data.minLength = this.field.data.minLength || 0;
	        this.field.data.maxLength = this.field.data.maxLength || 0;
	    },

	    computed: {
	        minLength: function minLength() {
	            return this.field.data.minLength ? this.field.data.minLength : false;
	        },
	        maxLength: function maxLength() {
	            return this.field.data.maxLength ? this.field.data.maxLength : false;
	        }
	    }

	};

	window.BixieFieldtypes.components['textbox'] = module.exports;

/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"classes(['uk-form-row'], field.data.classSfx)\">\n    <label :for=\"fieldid\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans }}\n        <a v-if=\"field.data.help_text && field.data.help_show == 'tooltip_icon'\"\n           class=\"uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right\"\n           :title=\"field.data.help_text\" data-uk-tooltip=\"{delay: 100}\"></a>\n    </label>\n\n    <div class=\"uk-form-controls\">\n        <textarea v-if=\"minLength || maxLength\" class=\"uk-form-width-large\"\n                  placeholder=\"{{ field.data.placeholder || '' | trans }}\"\n                  :name=\"fieldid\"\n                  v-bind=\"{id: fieldid, rows: field.data.rows}\"\n                  v-model=\"inputValue\"\n                  v-validate:required=\"fieldRequired\"\n                  v-validate:minLength=\"minLength\"\n                  v-validate:maxLength=\"maxLength\"></textarea>\n\n        <textarea v-else class=\"uk-form-width-large\"\n                  placeholder=\"{{ field.data.placeholder || '' | trans }}\"\n                  v-bind=\"{name: fieldid, id: fieldid, rows: field.data.rows}\"\n                  v-model=\"inputValue\"\n                  v-validate:required=\"fieldRequired\"></textarea>\n\n        <p v-if=\"field.data.help_text && field.data.help_show == 'block'\"\n           class=\"uk-form-help-block\">{{{field.data.help_text}}}</p>\n\n        <p class=\"uk-form-help-block uk-text-danger\" v-show=\"fieldInvalid(form)\">{{ fieldRequiredMessage }}</p>\n    </div>\n</div>\n\n";

/***/ }

/******/ });