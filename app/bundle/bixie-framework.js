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
	    Vue.component('input-category', __webpack_require__(1));
	    Vue.component('input-tags', __webpack_require__(4));
	    Vue.component('input-folder', __webpack_require__(7));
	    Vue.component('input-prices', __webpack_require__(10));
	    Vue.component('input-related-item', __webpack_require__(13));
	    Vue.component('input-related-items', __webpack_require__(16));
	    Vue.component('table-list', __webpack_require__(19));
	    __webpack_require__(22);
	    //directives
	    Vue.directive('spinner', __webpack_require__(25));
	    //partials
	    Vue.partial('fieldtype-basic', __webpack_require__(26));
	    Vue.partial('fieldtype-settings', __webpack_require__(27));
	    Vue.partial('fieldtype-appearance', __webpack_require__(28));
	    //fields
	    __webpack_require__(29);

	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\input-category.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./input-category.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n\n<ul class=\"uk-list\">\n    <li v-for=\"value in values\">\n        <div class=\"uk-nestable-panel uk-visible-hover uk-flex uk-flex-middle\">\n            <div class=\"uk-flex-item-1\">\n                {{ getText(value) }}\n            </div>\n            <div class=\"\">\n                <ul class=\"uk-subnav pk-subnav-icon\">\n                    <li><a class=\"pk-icon-star\"\n                           data-uk-tooltip=\"{delay: 300}\" title=\"{{ 'Make primary category' | trans }}\"\n                           :class=\"{'uk-invisible': primary !== value}\"\n                           @click.prevent=\"primary = value\"></a></li>\n                    <li><a class=\"pk-icon-delete pk-icon-hover uk-invisible\" @click.prevent=\"removeCategory(value)\"></a></li>\n                </ul>\n            </div>\n        </div>\n    </li>\n</ul>\n\n<div id=\"select-category\" class=\"uk-flex uk-flex-middle uk-margin\">\n    <div>\n        <div class=\"uk-position-relative\" data-uk-dropdown=\"{justify:'#select-category'}\">\n            <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Please select' | trans }}</button>\n\n            <div class=\"uk-dropdown uk-dropdown-small\">\n                <ul class=\"uk-nav uk-nav-dropdown\">\n                    <category-item v-for=\"category in tree[0]\" :category=\"category\" :tree=\"tree\"></category-item>\n                </ul>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(5)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\input-tags.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./input-tags.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    props: {
	        'tags': Array,
	        'existing': Array,
	        'style': { type: String, default: 'tags' }
	    },

	    data: function data() {
	        return {
	            'newtag': ''
	        };
	    },

	    methods: {

	        addTag: function addTag(tag) {
	            tag = tag || this.newtag;
	            if (this.selected(tag)) {
	                return;
	            }
	            this.tags.push(tag);
	            if (this.style == 'tags') {
	                this.$nextTick(function () {
	                    UIkit.$html.trigger('resize');
	                });
	            }
	            this.newtag = '';
	        },

	        removeTag: function removeTag(tag) {
	            this.tags.$remove(tag);
	        },

	        selected: function selected(tag) {
	            return this.tags.indexOf(tag) > -1;
	        }

	    }

	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <ul v-if=\"style == 'list'\" class=\"uk-list uk-list-line\">\n        <li v-for=\"tag in tags\">\n            <a class=\"uk-float-right uk-close\" @click.prevent=\"removeTag(tag)\"></a>\n            {{ tag }}\n        </li>\n    </ul>\n    <div v-else class=\"uk-flex uk-flex-wrap\" data-uk-margin=\"\">\n        <div v-for=\"tag in tags\" class=\"uk-badge uk-margin-small-right\" track-by=\"$index\">\n            <a class=\"uk-float-right uk-close\" @click.prevent=\"removeTag(tag)\"></a>\n            {{ tag }}\n        </div>\n    </div>\n\n    <div class=\"uk-flex uk-flex-middle uk-margin\">\n        <div v-show=\"existing.length\">\n            <div class=\"uk-position-relative\" data-uk-dropdown=\"\">\n                <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Existing' | trans }}</button>\n\n                <div class=\"uk-dropdown uk-dropdown-small\">\n                    <ul class=\"uk-nav uk-nav-dropdown\">\n                        <li v-for=\"tag in existing\"><a :class=\"{'uk-text-muted': selected(tag)}\" @click.prevent=\"addTag(tag)\">{{ tag }}</a></li>\n                    </ul>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"uk-flex-item-1 uk-margin-small-left\">\n            <div class=\"uk-form-password\">\n                <input type=\"text\" class=\"uk-width-1-1\" v-model=\"newtag\">\n                <a class=\"uk-form-password-toggle\" @click.prevent=\"addTag()\"><i\n                        class=\"uk-icon-check uk-icon-hover\"></i></a>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\input-folder.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./input-folder.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    props: ['folder', 'class'],

	    data: function data() {
	        return $pagekit;
	    },

	    methods: {

	        pick: function pick() {
	            this.$refs.modal.open();
	        },

	        select: function select() {
	            this.folder = this.$refs.finder.getSelected()[0];
	            this.$dispatch('folder-selected', this.folder);
	            this.$refs.finder.removeSelection();
	            this.$refs.modal.close();
	        },

	        remove: function remove(e) {
	            e.stopPropagation();
	            this.folder = '';
	        },

	        hasSelection: function hasSelection() {
	            var selected = this.$refs.finder.getSelected();
	            return selected.length === 1 && !selected[0].match(/\.(.+)$/i);
	        }

	    }

	};

	Vue.component('input-folder', function (resolve, reject) {
	    Vue.asset({
	        js: ['app/assets/uikit/js/components/upload.min.js', 'app/system/modules/finder/app/bundle/panel-finder.js']
	    }).then(function () {
	        resolve(module.exports);
	    });
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n\n<div @click=\"pick\" :class=\"class\">\n    <ul class=\"uk-float-right uk-subnav pk-subnav-icon\">\n        <li><a class=\"pk-icon-delete pk-icon-hover\" :title=\"'Delete' | trans\"\n               data-uk-tooltip=\"{delay: 500, 'pos': 'left'}\" @click=\"remove\"></a></li>\n    </ul>\n    <a class=\"pk-icon-folder-circle uk-margin-right\"></a>\n    <a v-if=\"!folder\" class=\"uk-text-muted\">{{ 'Select folder' | trans }}</a>\n    <a v-else>{{ folder }}</a>\n</div>\n\n<v-modal v-ref:modal large>\n\n    <panel-finder :root=\"storage\" v-ref:finder modal></panel-finder>\n\n    <div class=\"uk-modal-footer uk-text-right\">\n        <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\n        <button class=\"uk-button uk-button-primary\" type=\"button\" :disabled=\"!hasSelection()\" @click=\"select()\">{{ 'Select' | trans }}</button>\n    </div>\n\n</v-modal>\n\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\input-prices.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./input-prices.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    props: {
	        prices: Array,
	        readonly: Boolean
	    },

	    created: function created() {
	        if (!this.prices) {
	            this.prices = [];
	        }
	    },

	    methods: {

	        add: function add() {
	            this.prices.push({
	                min_quantity: 1,
	                max_quantity: 1,
	                price: 0,
	                currency: 'EUR'
	            });
	        },
	        remove: function remove(price) {
	            this.prices.$remove(price);
	        }

	    }

	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"uk-form uk-form-stacked\">\n\n    <ul class=\"uk-list uk-list-line\">\n        <li v-for=\"price in prices\">\n\n            <div class=\"uk-flex uk-flex-middle\">\n                <div class=\"uk-width-1-5\">\n                    <label class=\"uk-form-label\">{{ 'Minimum quantity' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <input v-model=\"price.min_quantity\" type=\"number\" class=\"uk-width-8-10 uk-text-right\"\n                               step=\"1\" min=\"0\" number/>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-5\">\n                    <label class=\"uk-form-label\">{{ 'Maximum quantity' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <input v-model=\"price.max_quantity\" type=\"number\" class=\"uk-width-8-10 uk-text-right\"\n                               step=\"1\" min=\"0\" number/>\n                    </div>\n                </div>\n                <div class=\"uk-width-1-5\">\n                    <label class=\"uk-form-label\">{{ 'Currency' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <select v-model=\"price.currency\">\n                            <option value=\"EUR\">{{ 'Euro' | trans }}</option>\n                            <option value=\"USD\">{{ 'US Dollar' | trans }}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"uk-flex-item-1\">\n                    <label class=\"uk-form-label\">{{ 'Price' | trans }}</label>\n                    <div class=\"uk-form-controls\">\n                        <i class=\"uk-icon-euro uk-margin-small-right\"></i>\n                        <input v-model=\"price.price\" type=\"number\" class=\"uk-width-8-10 uk-text-right\"\n                               step=\"0.01\" min=\"0\" number/>\n                    </div>\n                </div>\n                <ul class=\"uk-subnav pk-subnav-icon uk-margin-small-left\">\n                    <li><a class=\"pk-icon-delete pk-icon-hover\"  @click=\"remove(price)\"\n                           :title=\"'Delete' | trans\" data-uk-tooltip=\"{delay: 500}\"></a></li>\n                </ul>\n            </div>\n        </li>\n    </ul>\n\n    <a v-if=\"!readonly\" @click=\"add\"><i class=\"uk-icon-plus uk-margin-small-right\"></i>{{ 'Add price' | trans }}</a>\n\n</div>\n\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\input-related-item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./input-related-item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    name: 'input-related-item',

	    props: {
	        'model': { default: '' },
	        'selected': { type: Object, default: function _default() {
	                return {};
	            } },
	        'resource': { type: String, default: '' },
	        'config': { type: Object, default: function _default() {
	                return {};
	            } },
	        'name': { type: String, default: 'items' },
	        'identifier': { type: String, default: 'id' },
	        'label': { type: String, default: 'title' },
	        'buttonClass': { type: String, default: 'uk-button-small' },
	        'extra_key': { type: String, default: 'slug' },
	        'onSelect': { type: Function, default: function _default() {
	                _.noop();
	            } },
	        'onRemove': { type: Function, default: function _default() {
	                _.noop();
	            } }
	    },

	    computed: {
	        selected_identifier: function selected_identifier() {
	            return this.selected ? this.selected[this.identifier] : '';
	        },
	        selected_name: function selected_name() {
	            return this.selected ? this.selected[this.label] : '';
	        },
	        selected_extra_key: function selected_extra_key() {
	            return this.selected ? this.selected[this.extra_key] : '';
	        },
	        excluded: function excluded() {
	            return [this.selected_identifier];
	        }
	    },

	    methods: {

	        pick: function pick() {
	            this.$refs.modal.open();
	        },

	        select: function select() {
	            this.selected = _.first(this.$refs.tableList.getSelected());
	            this.model = this.selected[this.identifier];
	            this.onSelect(this.selected);
	            this.$refs.modal.close();
	        },

	        remove: function remove() {
	            this.selected = {};
	            this.model = '';
	            this.onRemove();
	        },

	        hasSelection: function hasSelection() {
	            return this.$refs.tableList.nrSelected() == 1;
	        },

	        isSelected: function isSelected(item) {
	            return this.selected === item;
	        }

	    }

	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <div v-show=\"selected_identifier\" class=\"uk-badge uk-flex uk-flex-middle\">\n        <em class=\"uk-text-small uk-margin-small-right\">{{ selected_identifier }}</em>\n        <span class=\"uk-flex-item-1 uk-text-left\">{{ selected_name }} </span>\n        <small v-if=\"extra_key\" class=\"uk-margin-small-left\">({{ selected_extra_key }})</small>\n        <a @click=\"remove\" class=\"uk-close uk-margin-small-left\"></a>\n    </div>\n\n    <p>\n        <button type=\"button\" class=\"uk-button\" :class=\"buttonClass\" @click=\"pick\">{{ 'Please select' | trans }}</button>\n    </p>\n\n    <v-modal v-ref:modal large>\n\n        <table-list v-ref:table-list\n                    :resource=\"resource\"\n                    :config=\"config\"\n                    :name=\"name\"\n                    :excluded=\"excluded\"\n                    :label=\"label\"\n                    :extra_key=\"extra_key\"\n                    :identifier=\"identifier\"></table-list>\n\n        <div class=\"uk-modal-footer uk-text-right\">\n            <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\n            <button class=\"uk-button uk-button-primary\" type=\"button\" :disabled=\"!hasSelection()\" @click=\"select()\">\n                {{ 'Select' | trans }}\n            </button>\n        </div>\n\n    </v-modal>\n</div>\n\n\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\input-related-items.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./input-related-items.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    name: 'input-related-items',

	    props: {
	        'model': { type: Array, default: function _default() {
	                return [];
	            } },
	        'selected': { type: Array, default: function _default() {
	                return {};
	            } },
	        'resource': { type: String, default: '' },
	        'config': { type: Object, default: function _default() {
	                return {};
	            } },
	        'name': { type: String, default: 'items' },
	        'identifier': { type: String, default: 'id' },
	        'label': { type: String, default: 'title' },
	        'extra_key': { type: String, default: 'slug' },
	        'onSelect': { type: Function, default: function _default() {
	                _.noop();
	            } },
	        'onRemove': { type: Function, default: function _default() {
	                _.noop();
	            } }
	    },

	    watch: {
	        selected: function selected(items) {
	            this.model = _.map(items, function (item) {
	                return this.getIdentifier(item);
	            }, this);
	        }
	    },

	    methods: {

	        pick: function pick() {
	            this.$refs.modal.open();
	        },

	        select: function select() {
	            var selected = _.filter(this.$refs.tableList.getSelected(), function (item) {
	                return _.find(this.selected, this.identifier, this.getIdentifier(item)) === undefined;
	            }, this);
	            this.selected = this.selected.concat(selected);
	            this.onSelect(selected);
	            this.$refs.modal.close();
	        },

	        remove: function remove(item) {
	            this.selected.$remove(item);
	            this.onRemove(item);
	        },

	        getIdentifier: function getIdentifier(item) {
	            return item[this.identifier] || '';
	        },

	        getLabel: function getLabel(item) {
	            return item[this.label] || '';
	        },

	        getExtraKey: function getExtraKey(item) {
	            if (!this.extra_key) return '';
	            return item[this.extra_key] || '';
	        },

	        hasSelection: function hasSelection() {
	            return this.$refs.tableList.nrSelected() > 0;
	        },

	        isSelected: function isSelected(item) {
	            return this.selected === item;
	        }

	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <div class=\"uk-grid\">\n        <div v-for=\"item in selected\" class=\"uk-width-1-1\">\n            <div class=\"uk-badge uk-flex uk-flex-middle uk-margin-small-bottom\"\n                 track-by=\"$index\">\n                <em class=\"uk-text-small uk-margin-small-right\">{{ getIdentifier(item) }}</em>\n                <span class=\"uk-flex-item-1 uk-text-left\">{{ getLabel(item) }} </span>\n                <small v-if=\"extra_key\" class=\"uk-margin-small-left\">({{ getExtraKey(item) }})</small>\n                <a @click=\"remove(item)\" class=\"uk-close uk-margin-small-left\"></a>\n            </div>\n        </div>\n    </div>\n\n    <p>\n        <button type=\"button\" class=\"uk-button uk-button-small\" @click=\"pick\">{{ 'Please select' | trans }}</button>\n    </p>\n\n    <v-modal v-ref:modal large>\n\n        <table-list v-ref:table-list\n                    :resource=\"resource\"\n                    :config=\"config\"\n                    :excluded=\"model\"\n                    :name=\"name\"\n                    :extra_key=\"extra_key\"\n                    :label=\"label\"\n                    :identifier=\"identifier\"></table-list>\n\n        <div class=\"uk-modal-footer uk-text-right\">\n            <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\n            <button class=\"uk-button uk-button-primary\" type=\"button\" :disabled=\"!hasSelection()\" @click=\"select()\">\n                {{ 'Select' | trans }}\n            </button>\n        </div>\n\n    </v-modal>\n\n</div>\n\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\table-list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./table-list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    name: 'table-list',

	    props: {
	        'config': { type: Object, default: function _default() {
	                return { filter: { search: '', order: 'title asc' } };
	            } },
	        'resource': { type: String, default: '' },
	        'excluded': { type: Array, default: function _default() {
	                return [];
	            } },
	        'identifier': { type: String, default: 'id' },
	        'name': { type: String, default: 'items' },
	        'extra_key': { type: String, default: 'slug' },
	        'limit': { type: Number, default: 10 },
	        'label': { type: String, default: 'title' }
	    },

	    data: function data() {
	        return {
	            items: false,
	            pages: 0,
	            count: '',
	            selected: []
	        };
	    },

	    created: function created() {
	        this.Resource = this.$resource(this.resource);
	        this.config.filter.limit = this.limit;
	        this.$watch('config.page', this.load, { immediate: true });
	    },

	    watch: {

	        'config.filter': {
	            handler: function handler(filter) {
	                if (this.config.page) {
	                    this.config.page = 0;
	                } else {
	                    this.load();
	                }
	            },
	            deep: true
	        }

	    },

	    methods: {
	        active: function active(item) {
	            return this.selected.indexOf(item[this.identifier]) != -1;
	        },

	        disabled: function disabled(item) {
	            return this.excluded.indexOf(item[this.identifier]) != -1;
	        },

	        load: function load() {
	            this.Resource.query(this.config).then(function (res) {
	                var data = res.data;

	                this.$set('items', data[this.name]);
	                this.$set('pages', data.pages);
	                this.$set('count', data.count);
	                this.$set('selected', []);
	            }, function () {
	                this.$notify('Loading failed.', 'danger');
	            });
	        },

	        select: function select(item) {
	            if (this.selected.indexOf(item[this.identifier]) === -1) {
	                this.selected.push(item[this.identifier]);
	            }
	        },

	        getLabel: function getLabel(item) {
	            return item[this.label] || '';
	        },

	        getIdentifier: function getIdentifier(item) {
	            return item[this.identifier] || '';
	        },

	        getExtraKey: function getExtraKey(item) {
	            if (!this.extra_key) return '';
	            return item[this.extra_key] || '';
	        },

	        nrSelected: function nrSelected() {
	            return this.selected.length;
	        },

	        getSelected: function getSelected() {
	            return this.items.filter(function (item) {
	                return this.selected.indexOf(item[this.identifier]) !== -1;
	            }, this);
	        }

	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <div class=\"uk-form uk-form-icon\">\n        <i class=\"uk-icon-search\"></i>\n        <input type=\"search\" v-model=\"config.filter.search\" :placeholder=\"'Search' | trans\" debounce=\"300\">\n    </div>\n\n    <div class=\"uk-margin uk-overflow-container\">\n        <table class=\"uk-table uk-table-hover uk-table-middle uk-form\">\n            <thead>\n            <tr>\n                <th class=\"pk-table-width-minimum\"><input type=\"checkbox\" v-check-all:selected.literal=\"input[name=id]\" number></th>\n                <th class=\"pk-table-width-minimum\">{{ 'ID' | trans }}</th>\n                <th class=\"pk-table-min-width-200\">{{ 'Name' | trans }}</th>\n                <th v-if=\"extra_key\" class=\"pk-table-min-width-100\">{{ 'Extra' | trans }}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr class=\"check-item\" v-for=\"item in items\" :class=\"{'uk-active': active(item)}\">\n                <td><input type=\"checkbox\" name=\"id\" :value=\"getIdentifier(item)\" :disabled=\"disabled(item)\" number></td>\n                <td>{{ getIdentifier(item) }}</td>\n                <td>\n                    <span v-if=\"disabled(item)\" class=\"uk-text-muted\">{{ getLabel(item) }}</span>\n                    <a v-else @click=\"select(item)\">{{ getLabel(item) }}</a>\n                </td>\n                <td v-if=\"extra_key\">{{ getExtraKey(item) }}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <h3  v-show=\"items && !items.length\"class=\"uk-text-muted uk-text-center\">{{ 'No items found.' | trans }}</h3>\n\n    <v-pagination :page.sync=\"config.page\" :pages=\"pages\" v-show=\"pages > 1\"></v-pagination>\n\n</div>\n\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\app\\components\\input-file.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./input-file.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    props: {
	        'file': { default: '' },
	        'ext': { type: Array, default: [] },
	        'multiple': { type: Boolean, default: false },
	        'root': { default: 'storage' },
	        'class': { default: '' }
	    },

	    data: function data() {
	        return _.merge({}, $pagekit);
	    },

	    computed: {
	        fileName: function fileName() {
	            return this.file.split('/').pop();
	        }
	    },

	    methods: {

	        pick: function pick() {
	            this.$refs.modal.open();
	        },

	        select: function select() {
	            this.$set('file', this.root + this.getSelected()[0]);
	            this.$dispatch('file-selected', this.file);
	            this.$refs.finder.removeSelection();
	            this.$refs.modal.close();
	        },

	        remove: function remove(e) {
	            e.stopPropagation();
	            this.file = '';
	        },

	        getSelected: function getSelected() {
	            return this.$refs.finder.selected.map(function (name) {
	                return _.find(this.$refs.finder.items, 'name', name).path;
	            }, this);
	        },

	        hasSelection: function hasSelection() {
	            var selected = this.$refs.finder.getSelected();
	            if (!this.multiple && !(selected.length === 1)) {
	                return false;
	            }

	            return selected[0].match(new RegExp('\.(?:' + this.ext.join('|') + ')$', 'i'));
	        }

	    }

	};

	Vue.component('input-file', function (resolve, reject) {
	    Vue.asset({
	        js: ['app/assets/uikit/js/components/upload.min.js', 'app/system/modules/finder/app/bundle/panel-finder.js']
	    }).then(function () {
	        resolve(module.exports);
	    });
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n\n<div @click=\" pick\" class=\"{{ class }}\">\n    <ul class=\"uk-float-right uk-subnav pk-subnav-icon\">\n        <li><a class=\"pk-icon-delete pk-icon-hover\" title=\"{{ 'Delete' | trans }}\" data-uk-tooltip=\"{delay: 500, 'pos': 'left'}\" @click.prevent=\"remove\"></a></li>\n    </ul>\n    <a class=\"pk-icon-folder-circle uk-margin-right\"></a>\n    <a v-if=\"!file\" class=\"uk-text-muted\">{{ 'Select file' | trans }}</a>\n    <a v-else data-uk-tooltip=\"\" title=\"{{ file }}\">{{ fileName }}</a>\n</div>\n\n<v-modal v-ref:modal large>\n\n    <panel-finder :root=\"root\" v-ref:finder :modal=\"true\"></panel-finder>\n\n    <div v-show=\"!hasSelection()\" class=\"uk-alert\">{{ 'Select one file of the following types' | trans }}: {{ this.ext.join(', ') }}</div>\n\n    <div class=\"uk-modal-footer uk-text-right\">\n        <button class=\"uk-button uk-button-link uk-modal-close\" type=\"button\">{{ 'Cancel' | trans }}</button>\n        <button class=\"uk-button uk-button-primary\" type=\"button\" :disabled=\"!hasSelection()\" @click=\"select()\">{{ 'Select' | trans }}</button>\n    </div>\n\n</v-modal>\n\n";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {

	    params: ['icon', 'spinner'],

	    bind: function () {
	        var base = this.el.className || 'uk-margin-small-right';
	        this.iconClass = base + ' uk-icon-' + this.params.icon;
	        this.spinningClass = base + ' uk-icon-spin uk-icon-' + (this.params.spinner || 'circle-o-notch');

	    },

	    update: function (value) {
	        this.el.className = value ? this.spinningClass : this.iconClass;
	    }

	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-row\">\r\n    <label for=\"form-label\" class=\"uk-form-label\">{{ 'Label' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-label\" class=\"uk-form-width-large\" type=\"text\" name=\"label\"\r\n               v-model=\"field.label\" v-validate:required>\r\n    </div>\r\n    <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.label.invalid\">{{ 'Please enter a label' | trans }}</p>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-slug\" class=\"uk-form-label\">{{ 'Slug' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-slug\" class=\"uk-form-width-large\" type=\"text\" v-model=\"field.slug\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-margin\" v-if=\"fieldSettings\">\r\n    <bixie-fields :config=\"fieldSettings\" :values.sync=\"field.data\"></bixie-fields>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-slug\" class=\"uk-form-label\">{{ 'Help text' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <textarea id=\"form-help_text\" class=\"uk-form-width-large\"\r\n                  rows=\"2\" cols=\"40\" v-model=\"field.data.help_text\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"type.required < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Field required' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"required\" v-model=\"field.data.required\"> {{ 'Required' | trans\r\n            }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div v-if=\"type.multiple < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Multiple values' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"multiple\" v-model=\"field.data.multiple\"> {{ 'Multiple' | trans\r\n            }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div v-if=\"type.controls < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Extra controls' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"controls\" v-model=\"field.data.controls\"> {{ 'Show controls' | trans\r\n            }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div v-if=\"type.repeatable < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Field repeat' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"repeatable\" v-model=\"field.data.repeatable\"> {{ 'Repeatable' | trans\r\n            }}</label>\r\n\r\n        <div v-show=\"field.data.repeatable == 1\" class=\"uk-flex uk-flex-middle uk-margin-left\">\r\n            <span class=\"uk-margin-small-right\">{{ 'Maximum' | trans }}</span>\r\n            <input type=\"number\" class=\"uk-text-right uk-form-small uk-form-width-mini\"\r\n                   v-model=\"field.data.max_repeat\" min=\"1\" :max=\"type.max_repeat\" number/>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\" v-if=\"field.roles\">\r\n    <span class=\"uk-form-label\">{{ 'Restrict Access' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <p v-for=\"role in roles\" class=\"uk-form-controls-condensed\">\r\n            <label><input type=\"checkbox\" :value=\"role.id\" v-model=\"field.roles\" number> {{ role.name }}</label>\r\n        </p>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Label' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"hide-label\" v-model=\"field.data.hide_label\"> {{ 'Hide Label' |\r\n            trans }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-class\" class=\"uk-form-label\">{{ 'Class suffix' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"field.data.classSfx\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\" v-show=\"field.data.required\">\r\n    <label for=\"form-required-error\" class=\"uk-form-label\">{{ 'Required error message' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-required-error\" class=\"uk-form-width-large\" type=\"text\"\r\n               v-model=\"field.data.requiredError\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-required-error\" class=\"uk-form-label\">{{ 'Display help text' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <select id=\"form-help_show\" class=\"uk-form-width-medium\" v-model=\"field.data.help_show\">\r\n            <option value=\"\">{{ 'Don\\'t show' | trans }}</option>\r\n            <option value=\"tooltip_icon\">{{ 'Tooltip icon' | trans }}</option>\r\n            <option value=\"block\">{{ 'Below input' | trans }}</option>\r\n         </select>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	Vue.component('bixie-fields', {
	    extends: Vue.component('fields'),
	    template: __webpack_require__(30),
	    fields: {
	        text: '<input type="text" v-bind="attrs" v-model="value">',
	        textarea: '<textarea v-bind="attrs" v-model="value"></textarea>',
	        select: '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>',
	        radio: '<p class="uk-form-controls-condensed"><label v-for="option in options" v-bind="attrs"><input type="radio" :value="option" v-model="value"> {{ $key }}</label></p>',
	        checkbox: '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel }}</label></p>',

	        email: '<input type="email" v-bind="attrs" v-model="value">',
	        number: '<input type="number" v-bind="attrs" v-model="value" number>',
	        title: '<h3 v-bind="attrs">{{ title }}</h3>',
	        paragraph: '<p v-bind="attrs">{{ text }}</p>',
	        price: '<i class="uk-icon-euro uk-margin-small-right"></i><input type="number" v-bind="attrs" v-model="value" number>',
	        multiselect: '<multiselect :values.sync="value" :options="options"></multiselect>',

	        tags: '<input-tags v-bind="attrs" :tags.sync="value" :existing="options" :style="style || \'tags\'"></input-tags>',
	        format: '<span v-bind="attrs">{{ value }}</span>'
	    }
	});
	Vue.component('bixie-fields-raw', {
	    extends: Vue.component('bixie-fields'),
	    template:__webpack_require__(31)
	});
	Vue.component('bixie-fields-list', {
	    extends: Vue.component('bixie-fields'),
	    template: __webpack_require__(32)
	});

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div v-for=\"field in fields\" :class=\"{'uk-form-row': !field.raw}\">\r\n    <label v-if=\"field.label\" class=\"uk-form-label\">\r\n        <i v-if=\"field.tip\" class=\"uk-icon-info uk-icon-hover uk-margin-small-right\" data-uk-tooltip=\"{delay: 100}\" :title=\"field.tip\"></i>\r\n        {{ field.label | trans }}\r\n    </label>\r\n    <div v-if=\"!field.raw\" class=\"uk-form-controls\" :class=\"{'uk-form-controls-text': ['checkbox', 'radio'].indexOf(field.type)>-1}\">\r\n        <component :is=\"field.type\" :field=\"field\"></component>\r\n    </div>\r\n    <component v-else :is=\"field.type\" :field=\"field\"></component>\r\n</div>\r\n";

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<template v-for=\"field in fields\">\r\n    <component :is=\"field.type\" :field=\"field\"></component>\r\n</template>\r\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<template v-for=\"field in fields\">\r\n    <dt v-if=\"field.label\">\r\n        <i v-if=\"field.tip\" class=\"uk-icon-info uk-icon-hover uk-margin-small-right\" data-uk-tooltip=\"{delay: 100}\" :title=\"field.tip\"></i>\r\n        {{ field.label }}\r\n    </dt>\r\n    <dd>\r\n        <component :is=\"field.type\" :field=\"field\"></component>\r\n    </dd>\r\n</template>\r\n";

/***/ }
/******/ ]);