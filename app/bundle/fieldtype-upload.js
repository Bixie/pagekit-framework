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
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] packages\\bixie\\framework\\fieldtypes\\upload\\upload.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\fieldtypes\\upload\\upload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 22:
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    mixins: [BixieFieldtypeMixin],

	    settings: {
	        'path': {
	            type: 'text',
	            label: 'Upload folder',
	            tip: 'Folder will be a subfolder of Pagekit storage',
	            attrs: { 'class': 'uk-form-width-large' }
	        },
	        'text1': {
	            type: 'paragraph',
	            text: 'To enable uploads, make sure to allow uploading in the usergroups permissions (section bixie/framework)',
	            attrs: { 'class': 'uk-text-small' }
	        },
	        'allowed': {
	            type: 'tags',
	            label: 'Allowed extensions',
	            options: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'csv', 'xlsx', 'pdf', 'zip', 'gz'],
	            attrs: { 'class': 'uk-form-width-large' }
	        },
	        'max_size': {
	            type: 'number',
	            label: 'Max file size (Mb)',
	            attrs: { 'class': 'uk-form-width-medium uk-text-right', 'min': 0 }
	        },
	        'max_files': {
	            type: 'number',
	            label: 'Max files (0 is unlimited)',
	            attrs: { 'class': 'uk-form-width-medium uk-text-right', 'min': 0 }
	        }
	    },

	    appearance: {},

	    data: function data() {
	        return {
	            action: window.$fieldtypes.ajax_url,
	            path: 'uploads',
	            upload: {},
	            selected: [],
	            message: {
	                message: '',
	                msg_class: ''
	            },
	            fieldid: _.uniqueId('formmakerfield_')
	        };
	    },

	    created: function created() {
	        if (this.field.data.path) this.$set('path', this.field.data.path);
	    },

	    computed: {
	        allowedUploads: function allowedUploads() {
	            if (this.field.data.max_files >= 1) {
	                return this.field.data.max_files - this.fieldValue.value.length;
	            }
	            return true;
	        }
	    },

	    methods: {
	        isImage: function isImage(url) {
	            return url.match(/\.(?:gif|jpe?g|png|svg|ico)$/i);
	        },
	        clearMessage: function clearMessage() {
	            this.$set('message.message', '');
	        },
	        setMessage: function setMessage(message, msg_class) {
	            this.$set('message.message', message);
	            this.$set('message.msg_class', 'uk-alert-' + (msg_class || 'danger'));
	        }
	    },

	    filters: {
	        fileSize: function fileSize(size) {
	            var i = Math.floor(Math.log(size) / Math.log(1024));
	            return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
	        }
	    },

	    events: {

	        'hook:ready': function hookReady() {

	            var uploader = this,
	                settings = {

	                action: this.$url.route(uploader.action),

	                single: false,

	                allow: '*.(' + uploader.field.data.allowed.join('|') + ')',

	                notallowed: function notallowed(file, settings) {
	                    uploader.setMessage(uploader.$trans('File extension not allowed.'));
	                },

	                before: function before(options, files) {

	                    if (uploader.allowedUploads !== true && uploader.allowedUploads < files.length) {
	                        uploader.setMessage(uploader.$trans('Maximum number of files reached.'));
	                        return false;
	                    }

	                    if (uploader.field.data.max_size > 0) {
	                        if (_.filter(files, function (file) {
	                            return file.size > uploader.field.data.max_size * 1024 * 1024;
	                        }).length) {
	                            uploader.setMessage(uploader.$trans('File is too large.'));
	                            return false;
	                        }
	                    }

	                    _.assign(options.params, {
	                        field_id: uploader.field.id,
	                        action: 'uploadAction',
	                        path: uploader.path,
	                        _csrf: $pagekit.csrf
	                    });
	                },

	                loadstart: function loadstart() {
	                    uploader.clearMessage();
	                    uploader.$set('upload.running', true);
	                    uploader.$set('upload.progress', 0);
	                },

	                progress: function progress(percent) {
	                    uploader.$set('upload.progress', Math.ceil(percent));
	                },

	                allcomplete: function allcomplete(response) {

	                    var data = $.parseJSON(response);

	                    uploader.setMessage(data.message, data.error ? 'danger' : 'success');

	                    if (data.files) {
	                        data.files.forEach(function (file) {
	                            uploader.addValue(file.name, file);
	                        });
	                        uploader.$dispatch('upload.success');
	                    }

	                    uploader.$set('upload.progress', 100);

	                    setTimeout(function () {
	                        uploader.$set('upload.running', false);
	                    }, 1500);
	                }

	            };

	            UIkit.uploadSelect(this.$el.querySelector('.uk-form-file > input'), settings);
	            UIkit.uploadDrop(this.$el.querySelector('.uk-placeholder'), settings);
	        }

	    }

	};

	window.BixieFieldtypes.components['upload'] = module.exports;

/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"classes(['uk-form-row', (isAdmin ? 'uk-hidden' : '')], field.data.classSfx)\">\n    <label :for=\"fieldid\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans }}\n        <a v-if=\"field.data.help_text && field.data.help_show == 'tooltip_icon'\"\n           class=\"uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right\"\n           :title=\"field.data.help_text\" data-uk-tooltip=\"{delay: 100}\"></a>\n    </label>\n\n    <div class=\"uk-form-controls\">\n\n        <div v-if=\"message.message\" class=\"uk-alert\" :class=\"message.msg_class\">{{ message.message }}</div>\n\n        <ul class=\"uk-list uk-list-striped\" v-if=\"fieldValue.value.length\">\n            <li v-for=\"file in valuedata\" class=\"uk-flex uk-flex-middle\">\n                <div class=\"uk-flex-item-1 uk-margin-left\">\n\n                    <a class=\"uk-icon-hover uk-icon-trash-o uk-float-right uk-margin-small-top uk-margin-small-right\"\n                       @click=\"removeValue(file.value)\" :title=\"'Remove file' | trans\"></a>\n\n                    <h4 class=\"uk-margin-remove\">\n                        <a :href=\"$url(file.url)\" download><i class=\"uk-icon-file-o uk-margin-small-right\"></i>{{ file.name }}</a>\n                    </h4>\n                    <small>{{ file.size | fileSize }}</small>\n                </div>\n                <div v-if=\"isImage(file.url)\" class=\"uk-margin-left\">\n                    <img :src=\"$url(file.url)\" :alt=\"file.name\" style=\"max-height: 100px\"/>\n                </div>\n            </li>\n        </ul>\n\n        <div v-show=\"allowedUploads\" class=\"uk-placeholder\">\n            <i class=\"uk-icon-cloud-upload uk-margin-small-right\"></i>\n            {{ 'Please drop a file here or ' | trans }}<a class=\"uk-form-file\">{{ 'select a file' | trans }}<input\n                type=\"file\" name=\"files[]\" multiple=\"multiple\"></a>.\n        </div>\n\n        <div class=\"uk-progress uk-progress-mini uk-margin-remove\" v-show=\"upload.running\">\n            <div class=\"uk-progress-bar\" :style=\"{width: upload.progress + '%'}\"></div>\n        </div>\n\n        <p v-if=\"field.data.help_text && field.data.help_show == 'block'\"\n           class=\"uk-form-help-block\">{{{field.data.help_text}}}</p>\n\n    </div>\n\n</div>\n\n";

/***/ }

/******/ });