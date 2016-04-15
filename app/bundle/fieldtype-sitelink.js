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
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\fieldtypes\\sitelink\\sitelink.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\fieldtypes\\sitelink\\sitelink.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 16:
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
	        'blank_default': {
	            type: 'checkbox',
	            label: 'Default new window',
	            optionlabel: 'Open in new window',
	            attrs: {}
	        },
	        'link_text_default': {
	            type: 'text',
	            label: 'Default link text',
	            attrs: { 'class': 'uk-form-width-large' }
	        }
	    },

	    appearance: {
	        'href_class': {
	            type: 'text',
	            label: 'Link class',
	            attrs: { 'class': 'uk-form-width-large' }
	        }
	    },

	    data: function data() {
	        return {
	            fieldid: _.uniqueId('formmakerfield_')
	        };
	    },

	    created: function created() {
	        if (this.fieldValue.value.length == 0) {
	            this.addValue('', {
	                value: '',
	                link_text: this.field.data.link_text_default,
	                blank: this.field.data.blank_default
	            });
	        }
	    }

	};

	window.BixieFieldtypes.components['sitelink'] = module.exports;

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"classes(['uk-form-row'], field.data.classSfx)\">\n    <label :for=\"fieldid\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans }}\n        <a v-if=\"field.data.help_text && field.data.help_show == 'tooltip_icon'\"\n           class=\"uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right\"\n           :title=\"field.data.help_text\" data-uk-tooltip=\"{delay: 100}\"></a>\n    </label>\n\n    <div class=\"uk-form-controls\">\n        <ul class=\"uk-list uk-margin-remove uk-list-line\">\n            <li v-for=\"site in fieldValue.data\">\n\n                <div class=\"uk-flex uk-flex-middle uk-flex-space-between\">\n                    <input type=\"text\" class=\"uk-form-width-large\"\n                           placeholder=\"{{ field.data.placeholder || '' | trans }}\"\n                           :name=\"fieldid + $index\" :id=\"fieldid\" v-validate:url\n                           v-validate:required=\"fieldRequired && $index == 0\"\n                           v-model=\"site.value\" @change=\"fieldValue.value[$index] = site.value\">\n\n                    <a v-if=\"$index > 0\"\n                       class=\"uk-icon-hover uk-icon-trash-o uk-margin-left\"\n                       @click=\"removeValue(site.value)\" :title=\"'Remove value' | trans\"></a>\n\n                </div>\n\n\n                <p class=\"uk-form-help-block uk-text-danger\" v-show=\"fieldInvalid(form, $index)\">{{ field.data.requiredError ||\n                    'Please enter a valid url' | trans }}</p>\n\n                <div v-if=\"field.data.controls\" class=\"uk-margin-small-top uk-flex uk-flex-middle uk-flex-space-between\">\n\n                    <input type=\"text\" class=\"uk-form-width-medium\" :placeholder=\"'Link text' | trans\"\n                           v-model=\"site.link_text\"/>\n                    <label><input type=\"checkbox\" :true-value=\"1\" :false-value=\"0\" class=\"uk-margin-small-right\"\n                                  v-model=\"site.blank\" number/>{{ 'Open in new window' | trans }}</label>\n                </div>\n\n            </li>\n        </ul>\n\n        <div v-if=\"allowNewValue\" class=\"uk-margin-small-top\">\n            <a @click=\"addValue('', {value: '', link_text: field.data.link_text_default, blank: field.data.blank_default})\">\n                <i class=\"uk-icon-hover uk-icon-plus uk-margin-small-right\"></i>{{ 'Add value' | trans }}</a>\n        </div>\n\n        <p v-if=\"field.data.help_text && field.data.help_show == 'block'\"\n           class=\"uk-form-help-block\">{{{field.data.help_text}}}</p>\n\n    </div>\n</div>\n\n";

/***/ }

/******/ });