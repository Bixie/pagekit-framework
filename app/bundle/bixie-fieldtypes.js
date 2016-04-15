var BixieFieldtypes =
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\fieldtypes.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\app\\fieldtypes.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	window.BixieFieldtypeMixin = __webpack_require__(2);
	window.BixieFieldtypes = module.exports = {

	    props: {
	        'fields': { type: Array, default: function _default() {
	                return [];
	            } },
	        'model': { type: Object, default: function _default() {
	                return {};
	            } },
	        'editType': { type: String, default: '' },
	        'form': { default: function _default() {
	                return {};
	            } }
	    },

	    computed: {
	        isAdmin: function isAdmin() {
	            return !!this.editType;
	        }
	    },

	    components: {}

	};

	Vue.component('fieldtypes', function (resolve) {
	    resolve(module.exports);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {

	    props: ['isAdmin', 'field', 'model', 'form'],

	    data: function () {
	        return {
	            fieldValue: {},
	            inputValue: ''
	        };
	    },

	    created: function () {
	        this.inputValue = this.fieldMultiple ? this.fieldValue.value : String(this.fieldValue.value);
	        if (!this.fieldValue.data || this.fieldValue.data.length === 0) {
	            this.fieldValue.data = {}; //fix datatype
	        }
	    },

	    methods: {
	        fieldInvalid: function (form, idx) {
	            idx = idx !== undefined ? idx : '';
	            return form && form[this.fieldid + idx] ? form[this.fieldid + idx].invalid : false;
	        },
	        classes: function (classes_array, classes_string) {
	            return (classes_array || []).concat(String(classes_string || '').split(' '));
	        },
	        addValue: function (value, valuedata) {
	            this.fieldValue.value.push(value);
	            this.$set('fieldValue.data.data' + (this.fieldValue.value.length - 1), valuedata || {'value': value});
	        },
	        removeValue: function (value) {
	            var data = {};
	            this.fieldValue.value.$remove(value);
	            this.fieldValue.value.forEach(function (value, idx) {
	                data['data' + idx] = this.getValuedata(value);
	            }.bind(this));
	            this.fieldValue.data = data;
	        },
	        valuedataModel: function (idx) {
	            return this.fieldValue.data['data' + idx] || {'value': this.fieldValue.value[idx] || ''};
	        },
	        getValuedata: function (value) {
	            return _.find(this.fieldValue.data, 'value', value) || {'value': value};
	        }

	    },

	    computed: {
	        fieldValue: function () {
	            if (this.isAdmin) {
	                return this.field.data;
	            }
	            return this.model[this.field.slug];
	        },
	        valuedata: function () {
	            if (this.fieldValue.value.length) {
	                return this.fieldValue.value.map(function (value, idx) {
	                    return _.assign({'value': value}, this.fieldValue.data['data' + idx]);
	                }.bind(this));
	            }
	            return [];
	        },
	        allowNewValue: function () {
	            return this.field.data.repeatable && this.fieldValue.value.length < (this.field.data.max_repeat || 10);
	        },
	        fieldMultiple: function () {
	            return !!this.field.data.multiple;
	        },
	        fieldRequired: function () {
	            return this.field.data.required && !this.isAdmin ? true : false;
	        },
	        fieldRequiredMessage: function () {
	            return this.field.data.requiredError || this.$trans('Please enter a value');
	        },
	        fieldLabel: function () {
	            return this.isAdmin ? this.$trans('Default value') : this.field.label;
	        }
	    },

	    watch: {
	        'inputValue': function (value) {
	            this.fieldValue.value = this.fieldMultiple ? value : [value];
	        }
	    }

	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <component v-for=\"field in fields | orderBy 'priority'\"\n               :is=\"field.type\"\n               :field=\"field\"\n               :model=\"model\"\n               :is-admin=\"isAdmin\"\n               :form=\"form\"></component>\n</div>\n\n";

/***/ }
/******/ ]);