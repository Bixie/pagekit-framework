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
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
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

	// <template>
	//
	//     <div :class="classes(['uk-form-row'], field.data.classSfx)">
	//         <label :for="fieldid" class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}
	//             <a v-if="field.data.help_text && field.data.help_show == 'tooltip_icon'"
	//                class="uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right"
	//                :title="field.data.help_text" data-uk-tooltip="{delay: 100}"></a>
	//         </label>
	//
	//         <div class="uk-form-controls">
	//             <textarea v-if="minLength || maxLength" class="uk-form-width-large"
	//                       placeholder="{{ field.data.placeholder || '' | trans }}"
	//                       :name="fieldid"
	//                       v-bind="{id: fieldid, rows: field.data.rows}"
	//                       v-model="inputValue"
	//                       v-validate:required="fieldRequired"
	//                       v-validate:minLength="minLength"
	//                       v-validate:maxLength="maxLength"></textarea>
	//
	//             <textarea v-else class="uk-form-width-large"
	//                       placeholder="{{ field.data.placeholder || '' | trans }}"
	//                       v-bind="{name: fieldid, id: fieldid, rows: field.data.rows}"
	//                       v-model="inputValue"
	//                       v-validate:required="fieldRequired"></textarea>
	//
	//             <p v-if="field.data.help_text && field.data.help_show == 'block'"
	//                class="uk-form-help-block">{{{field.data.help_text}}}</p>
	//
	//             <p class="uk-form-help-block uk-text-danger" v-show="fieldInvalid(form)">{{ fieldRequiredMessage }}</p>
	//         </div>
	//     </div>
	//
	// </template>
	//
	// <script>

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
	        //defaults admin
	        this.field.data.rows = this.field.data.rows || 4;
	        this.field.data.minLength = this.field.data.minLength || 0;
	        this.field.data.maxLength = this.field.data.maxLength || 0;
	    },

	    computed: {
	        minLength: function minLength() {
	            return this.field.data.minLength && !this.isAdmin ? this.field.data.minLength : false;
	        },
	        maxLength: function maxLength() {
	            return this.field.data.maxLength && !this.isAdmin ? this.field.data.maxLength : false;
	        }
	    }

	};

	window.BixieFieldtypes.components['textbox'] = module.exports;

	// </script>
	//

/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div :class=\"classes(['uk-form-row'], field.data.classSfx)\">\r\n        <label :for=\"fieldid\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans }}\r\n            <a v-if=\"field.data.help_text && field.data.help_show == 'tooltip_icon'\"\r\n               class=\"uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right\"\r\n               :title=\"field.data.help_text\" data-uk-tooltip=\"{delay: 100}\"></a>\r\n        </label>\r\n\r\n        <div class=\"uk-form-controls\">\r\n            <textarea v-if=\"minLength || maxLength\" class=\"uk-form-width-large\"\r\n                      placeholder=\"{{ field.data.placeholder || '' | trans }}\"\r\n                      :name=\"fieldid\"\r\n                      v-bind=\"{id: fieldid, rows: field.data.rows}\"\r\n                      v-model=\"inputValue\"\r\n                      v-validate:required=\"fieldRequired\"\r\n                      v-validate:minLength=\"minLength\"\r\n                      v-validate:maxLength=\"maxLength\"></textarea>\r\n\r\n            <textarea v-else class=\"uk-form-width-large\"\r\n                      placeholder=\"{{ field.data.placeholder || '' | trans }}\"\r\n                      v-bind=\"{name: fieldid, id: fieldid, rows: field.data.rows}\"\r\n                      v-model=\"inputValue\"\r\n                      v-validate:required=\"fieldRequired\"></textarea>\r\n\r\n            <p v-if=\"field.data.help_text && field.data.help_show == 'block'\"\r\n               class=\"uk-form-help-block\">{{{field.data.help_text}}}</p>\r\n\r\n            <p class=\"uk-form-help-block uk-text-danger\" v-show=\"fieldInvalid(form)\">{{ fieldRequiredMessage }}</p>\r\n        </div>\r\n    </div>\r\n\r\n";

/***/ }

/******/ });