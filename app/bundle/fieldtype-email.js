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

	module.exports = __webpack_require__(16)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(17)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\fieldtypes\\email\\email.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 16:
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div :class="classes(['uk-form-row'], field.data.classSfx)">
	//         <label :for="fieldid" class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}
	//             <a v-if="field.data.help_text && field.data.help_show == 'tooltip_icon'"
	//                class="uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right"
	//                :title="field.data.help_text" data-uk-tooltip="{delay: 100}"></a>
	//         </label>

	//         <div class="uk-form-controls">
	//             <input type="email" class="uk-form-width-large" placeholder="{{ field.data.placeholder || '' | trans }}"
	//                    :name="fieldid" :id="fieldid"
	//                    v-model="inputValue"
	//                    v-validate:required="fieldRequired" v-validate:email/>

	//             <p v-if="field.data.help_text && field.data.help_show == 'block'"
	//                class="uk-form-help-block">{{{field.data.help_text}}}</p>

	//             <p class="uk-form-help-block uk-text-danger" v-show="fieldInvalid(form)">{{ field.data.requiredError ||
	//                 'Please enter a value' | trans }}</p>
	//         </div>
	//     </div>

	// </template>

	// <script>

	module.exports = {

	    mixins: [BixieFieldtypeMixin],

	    settings: {
	        'placeholder': {
	            type: 'text',
	            label: 'Placeholder',
	            attrs: { 'class': 'uk-form-width-large' }
	        }
	    },

	    appearance: {},

	    data: function data() {
	        return {
	            fieldid: _.uniqueId('formmakerfield_')
	        };
	    },

	    watch: {
	        'field.data.user_email': function fieldDataUser_email(value) {
	            this.formitem.data.user_email_field = value ? this.field.slug : false;
	        }
	    }

	};

	window.BixieFieldtypes.components['email'] = module.exports;

	// </script>

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = "<div :class=\"classes(['uk-form-row'], field.data.classSfx)\">\n        <label :for=\"fieldid\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans }}\n            <a v-if=\"field.data.help_text && field.data.help_show == 'tooltip_icon'\"\n               class=\"uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right\"\n               :title=\"field.data.help_text\" data-uk-tooltip=\"{delay: 100}\"></a>\n        </label>\n\n        <div class=\"uk-form-controls\">\n            <input type=\"email\" class=\"uk-form-width-large\" placeholder=\"{{ field.data.placeholder || '' | trans }}\"\n                   :name=\"fieldid\" :id=\"fieldid\"\n                   v-model=\"inputValue\"\n                   v-validate:required=\"fieldRequired\" v-validate:email/>\n\n            <p v-if=\"field.data.help_text && field.data.help_show == 'block'\"\n               class=\"uk-form-help-block\">{{{field.data.help_text}}}</p>\n\n            <p class=\"uk-form-help-block uk-text-danger\" v-show=\"fieldInvalid(form)\">{{ field.data.requiredError ||\n                'Please enter a value' | trans }}</p>\n        </div>\n    </div>";

/***/ }

/******/ });