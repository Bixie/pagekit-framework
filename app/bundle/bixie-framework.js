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

	
	if (window.Vue) {
	    //components
	    Vue.component('input-category', __webpack_require__(3));
	    Vue.component('input-tags', __webpack_require__(6));

	    //fields
	    Vue.field.templates.formrow = __webpack_require__(9);
	    Vue.field.templates.raw = __webpack_require__(10);
	    Vue.field.types.text = '<input type="text" v-bind="attrs" v-model="value">';
	    Vue.field.types.textarea = '<textarea v-bind="attrs" v-model="value"></textarea>';
	    Vue.field.types.select = '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>';
	    Vue.field.types.radio = '<p class="uk-form-controls-condensed"><label v-for="option in options"><input type="radio" :value="option" v-model="value"> {{ $key | trans }}</label></p>';
	    Vue.field.types.checkbox = '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel | trans }}</label></p>';
	    Vue.field.types.number = '<input type="number" v-bind="attrs" v-model="value" number>';
	    Vue.field.types.title = '<h3 v-bind="attrs">{{ title | trans }}</h3>';
	}


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(5)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\app\\components\\input-category.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <ul class="uk-list">

	//         <li v-for="value in values">

	//             <div class="uk-nestable-panel uk-visible-hover uk-flex uk-flex-middle">

	//                 <div class="uk-flex-item-1">

	//                     {{ getText(value) }}

	//                 </div>

	//                 <div class="">

	//                     <ul class="uk-subnav pk-subnav-icon">

	//                         <li><a class="pk-icon-star"

	//                                data-uk-tooltip="{delay: 300}" title="{{ 'Make primary category' | trans }}"

	//                                :class="{'uk-invisible': primary !== value}"

	//                                @click.prevent="primary = value"></a></li>

	//                         <li><a class="pk-icon-delete pk-icon-hover uk-invisible" @click.prevent="removeCategory(value)"></a></li>

	//                     </ul>

	//                 </div>

	//             </div>

	//         </li>

	//     </ul>

	//     <div id="select-category" class="uk-flex uk-flex-middle uk-margin">

	//         <div>

	//             <div class="uk-position-relative" data-uk-dropdown="{justify:'#select-category'}">

	//                 <button type="button" class="uk-button uk-button-small">{{ 'Please select' | trans }}</button>

	//                 <div class="uk-dropdown uk-dropdown-small">

	//                     <ul class="uk-nav uk-nav-dropdown">

	//                         <category-item v-for="category in tree[0]" :category="category" :tree="tree"></category-item>

	//                     </ul>

	//                 </div>

	//             </div>

	//         </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    props: {
	        'values': { default: [] },
	        'primary': { default: 0 },
	        'categories': { default: [] }
	    },

	    data: function data() {
	        return {
	            'tree': {}
	        };
	    },

	    created: function created() {
	        this.tree = _(this.categories).sortBy('priority').groupBy('parent_id').value();
	    },

	    methods: {

	        addCategory: function addCategory(value) {
	            if (!this.isSelected(value)) {
	                this.values.push(value);
	                this.checkPrimary();
	            }
	        },

	        removeCategory: function removeCategory(value) {
	            this.values.$remove(value);
	            this.checkPrimary();
	        },

	        isSelected: function isSelected(value) {
	            return this.values.indexOf(value) > -1;
	        },

	        getText: function getText(value) {
	            return _.find(this.categories, 'id', value).title;
	        },

	        checkPrimary: function checkPrimary() {
	            if (this.values.length && this.values.indexOf(this.primary) == -1) {
	                this.primary = this.values[0];
	            }
	        }

	    },

	    components: {

	        categoryItem: {

	            name: 'categoryItem',

	            props: ['category', 'tree'],

	            template: '<li :class="{\'uk-parent\': tree[category.id]}">\n    <a @click.prevent="addCategory()" :class="{\'uk-text-primary\': isSelected()}">{{ category.title }}</a>\n    <ul class="uk-nav-sub" v-if="tree[category.id]">\n        <category-item v-for="category in tree[category.id]" :category="category" :tree="tree"></category-item>\n    </ul>\n</li>',

	            methods: {
	                isSelected: function isSelected() {
	                    this.getBase().isSelected(this.category.id);
	                },
	                addCategory: function addCategory() {
	                    this.getBase().addCategory(this.category.id);
	                },
	                getBase: function getBase() {
	                    var base = this.$parent;
	                    do {

	                        if (base.$options.name == 'input-category') {
	                            return base;
	                        }

	                        base = base.$parent;
	                    } while (base);
	                }
	            }
	        }

	    }

	};

	// </script>

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"uk-list\">\r\n        <li v-for=\"value in values\">\r\n            <div class=\"uk-nestable-panel uk-visible-hover uk-flex uk-flex-middle\">\r\n                <div class=\"uk-flex-item-1\">\r\n                    {{ getText(value) }}\r\n                </div>\r\n                <div class=\"\">\r\n                    <ul class=\"uk-subnav pk-subnav-icon\">\r\n                        <li><a class=\"pk-icon-star\"\r\n                               data-uk-tooltip=\"{delay: 300}\" title=\"{{ 'Make primary category' | trans }}\"\r\n                               :class=\"{'uk-invisible': primary !== value}\"\r\n                               @click.prevent=\"primary = value\"></a></li>\r\n                        <li><a class=\"pk-icon-delete pk-icon-hover uk-invisible\" @click.prevent=\"removeCategory(value)\"></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n\r\n    <div id=\"select-category\" class=\"uk-flex uk-flex-middle uk-margin\">\r\n        <div>\r\n            <div class=\"uk-position-relative\" data-uk-dropdown=\"{justify:'#select-category'}\">\r\n                <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Please select' | trans }}</button>\r\n\r\n                <div class=\"uk-dropdown uk-dropdown-small\">\r\n                    <ul class=\"uk-nav uk-nav-dropdown\">\r\n                        <category-item v-for=\"category in tree[0]\" :category=\"category\" :tree=\"tree\"></category-item>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(8)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\app\\components\\input-tags.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div class="uk-flex uk-flex-wrap" data-uk-margin="">

	//         <div v-for="tag in tags" class="uk-badge uk-margin-small-right">

	//             <a class="uk-float-right uk-close" @click.prevent="removeTag(tag)"></a>

	//             {{ tag }}

	//         </div>

	//     </div>

	//     <div class="uk-flex uk-flex-middle uk-margin">

	//         <div>

	//             <div class="uk-position-relative" data-uk-dropdown="">

	//                 <button type="button" class="uk-button uk-button-small">{{ 'Existing' | trans }}</button>

	//                 <div class="uk-dropdown uk-dropdown-small">

	//                     <ul class="uk-nav uk-nav-dropdown">

	//                         <li v-for="tag in existing"><a @click.prevent="addTag(tag)">{{ tag }}</a></li>

	//                     </ul>

	//                 </div>

	//             </div>

	//         </div>

	//         <div class="uk-flex-item-1 uk-margin-small-left">

	//             <div class="uk-form-password">

	//                 <input type="text" class="uk-width-1-1" v-model="newtag">

	//                 <a class="uk-form-password-toggle" @click.prevent="addTag()"><i class="uk-icon-check uk-icon-hover"></i></a>

	//             </div>

	//         </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    props: ['tags', 'existing'],

	    data: function data() {
	        return {
	            'newtag': ''
	        };
	    },

	    methods: {

	        addTag: function addTag(tag) {
	            if (!tag) return;
	            this.tags.push(tag || this.newtag);
	            this.$nextTick(function () {
	                UIkit.$html.trigger('resize'); //todo why no check.display or changed.dom???
	            });
	            this.newtag = '';
	        },

	        removeTag: function removeTag(tag) {
	            this.tags.$remove(tag);
	        }

	    }

	};

	// </script>

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-flex uk-flex-wrap\" data-uk-margin=\"\">\r\n        <div v-for=\"tag in tags\" class=\"uk-badge uk-margin-small-right\">\r\n            <a class=\"uk-float-right uk-close\" @click.prevent=\"removeTag(tag)\"></a>\r\n            {{ tag }}\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"uk-flex uk-flex-middle uk-margin\">\r\n        <div>\r\n            <div class=\"uk-position-relative\" data-uk-dropdown=\"\">\r\n                <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Existing' | trans }}</button>\r\n\r\n                <div class=\"uk-dropdown uk-dropdown-small\">\r\n                    <ul class=\"uk-nav uk-nav-dropdown\">\r\n                        <li v-for=\"tag in existing\"><a @click.prevent=\"addTag(tag)\">{{ tag }}</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"uk-flex-item-1 uk-margin-small-left\">\r\n            <div class=\"uk-form-password\">\r\n                <input type=\"text\" class=\"uk-width-1-1\" v-model=\"newtag\">\r\n                <a class=\"uk-form-password-toggle\" @click.prevent=\"addTag()\"><i class=\"uk-icon-check uk-icon-hover\"></i></a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div v-for=\"field in fields\" :class=\"{'uk-form-row': !field.raw}\">\r\n    <label v-if=\"field.label\" class=\"uk-form-label\">\r\n        <i v-if=\"field.tip\" class=\"uk-icon-info uk-icon-hover uk-margin-small-right\" data-uk-tooltip=\"{delay: 100}\" :title=\"field.tip\"></i>\r\n        {{ field.label | trans }}\r\n    </label>\r\n    <div v-if=\"!field.raw\" class=\"uk-form-controls\" :class=\"{'uk-form-controls-text': ['checkbox', 'radio'].indexOf(field.type)>-1}\">\r\n        <field :config=\"field\" :values.sync=\"values\"></field>\r\n    </div>\r\n    <field v-else :config=\"field\" :values.sync=\"values\"></field>\r\n</div>\r\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<template v-for=\"field in fields\">\r\n    <field :config=\"field\" :values.sync=\"values\"></field>\r\n</template>\r\n";

/***/ }
/******/ ]);