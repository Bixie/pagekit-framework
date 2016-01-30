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

	module.exports = __webpack_require__(2)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(4)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\app\\fieldtypes.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <template>

	//     <div>
	//         <component v-for="field in fields | orderBy 'priority'"
	//                    :is="field.type"
	//                    :field="field"
	//                    :model="model"
	//                    :is-admin="isAdmin"
	//                    :form="form"></component>
	//     </div>

	// </template>

	// <script>

	window.BixieFieldtypeMixin = __webpack_require__(3);
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

	// </script>

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {

	    props: ['isAdmin', 'field', 'model', 'form'],

	    methods: {
	        getDataObject: function (defaultValue) {
	            if (this.isAdmin) {
	                this.field.data.value = this.field.data.value || defaultValue;
	                return this.field.data;
	            }
	            this.model[this.field.slug].type = this.field.type;
	            this.model[this.field.slug].label = this.field.label;
	            this.model[this.field.slug].value = this.model[this.field.slug].data.value || defaultValue;
	            this.model[this.field.slug].prepared = this.field.prepared;
	            return this.model[this.field.slug];
	        },
	        fieldInvalid: function (form) {
	            return form && form[this.fieldid] ? form[this.fieldid].invalid : false;
	        },
	        classes: function (classes_array, classes_string) {
	            return (classes_array || []).concat(String(classes_string || '').split(' '));
	        }

	    },

	    computed: {
	        fieldRequired: function () {
	            return this.field.data.required && !this.isAdmin ? true : false;
	        },
	        fieldLabel: function () {
	            return this.isAdmin ? 'Default value' : this.field.label;
	        }
	    }

	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div>\n        <component v-for=\"field in fields | orderBy 'priority'\"\n                   :is=\"field.type\"\n                   :field=\"field\"\n                   :model=\"model\"\n                   :is-admin=\"isAdmin\"\n                   :form=\"form\"></component>\n    </div>";

/***/ }
/******/ ]);