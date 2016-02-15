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

	module.exports = __webpack_require__(30)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(31)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\fieldtypes\\upload\\upload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 30:
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div :class="classes(['uk-form-row', (isAdmin ? 'uk-hidden' : '')], field.data.classSfx)">
	//         <label :for="fieldid" class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}</label>

	//         <div class="uk-form-controls">

	//             <div v-if="message.message" class="uk-alert" :class="message.msg_class">{{ message.message }}</div>

	//             <ul class="uk-list uk-list-striped" v-if="dataObject.value.length">
	//                 <li v-for="file in dataObject.value" class="uk-flex uk-flex-middle">
	//                     <div class="uk-flex-item-1 uk-margin-left">
	//                         <h4 class="uk-margin-remove">
	//                             <a :href="$url(file.url)" download><i class="uk-icon-file-o uk-margin-small-right"></i>{{ file.name }}</a>
	//                         </h4>
	//                         <small>{{ file.size | fileSize }}</small>
	//                     </div>
	//                     <div v-if="isImage(file.url)" class="uk-margin-left">
	//                         <img :src="file.url" :alt="file.name" style="max-height: 100px"/>
	//                     </div>
	//                 </li>
	//             </ul>

	//             <div v-show="allowedUploads" class="uk-placeholder">
	//                 <i class="uk-icon-cloud-upload uk-margin-small-right"></i>
	//                 {{ 'Please drop a file here or ' | trans }}<a class="uk-form-file">{{ 'select a file' | trans }}<input type="file" name="files[]" multiple="multiple"></a>.
	//             </div>

	//             <div class="uk-progress uk-progress-mini uk-margin-remove" v-show="upload.running">
	//                 <div class="uk-progress-bar" :style="{width: upload.progress + '%'}"></div>
	//             </div>
	//     </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    mixins: [BixieFieldtypeMixin],

	    settings: {
	        'path': {
	            type: 'text',
	            label: 'Upload folder',
	            tip: 'Folder will be a subfolder of Pagekit storage',
	            attrs: { 'class': 'uk-form-width-large' }
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
	            path: 'uploads',
	            upload: {},
	            selected: [],
	            dataObject: {},
	            fileCount: 0,
	            message: {
	                message: '',
	                msg_class: ''
	            },
	            fieldid: _.uniqueId('formmakerfield_')
	        };
	    },

	    created: function created() {
	        this.$set('dataObject', this.getDataObject(this.field.data.value || []));
	        if (this.field.data.path) this.$set('path', this.field.data.path);
	    },

	    computed: {
	        allowedUploads: function allowedUploads() {
	            if (this.field.data.max_files >= 1) {
	                return this.field.data.max_files - this.dataObject.value.length;
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

	        /**
	         * Init upload
	         */

	        'hook:ready': function hookReady() {

	            var uploader = this,
	                uploadedfiles = uploader.dataObject.value.length,
	                settings = {

	                action: this.$url.route('api/formmaker/submission/ajax'),

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
	                        uploader.setMessage(uploader.$trans('File is too large.'));
	                        if (_.filter(files, function (file) {
	                            return file.size > uploader.field.data.max_size * 1024 * 1024;
	                        }).length) {
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
	                        uploader.$set('dataObject.value', uploader.dataObject.value.concat(data.files));
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

	// </script>

/***/ },

/***/ 31:
/***/ function(module, exports) {

	module.exports = "<div :class=\"classes(['uk-form-row', (isAdmin ? 'uk-hidden' : '')], field.data.classSfx)\">\n        <label :for=\"fieldid\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans }}</label>\n\n        <div class=\"uk-form-controls\">\n\n            <div v-if=\"message.message\" class=\"uk-alert\" :class=\"message.msg_class\">{{ message.message }}</div>\n\n            <ul class=\"uk-list uk-list-striped\" v-if=\"dataObject.value.length\">\n                <li v-for=\"file in dataObject.value\" class=\"uk-flex uk-flex-middle\">\n                    <div class=\"uk-flex-item-1 uk-margin-left\">\n                        <h4 class=\"uk-margin-remove\">\n                            <a :href=\"$url(file.url)\" download><i class=\"uk-icon-file-o uk-margin-small-right\"></i>{{ file.name }}</a>\n                        </h4>\n                        <small>{{ file.size | fileSize }}</small>\n                    </div>\n                    <div v-if=\"isImage(file.url)\" class=\"uk-margin-left\">\n                        <img :src=\"file.url\" :alt=\"file.name\" style=\"max-height: 100px\"/>\n                    </div>\n                </li>\n            </ul>\n\n            <div v-show=\"allowedUploads\" class=\"uk-placeholder\">\n                <i class=\"uk-icon-cloud-upload uk-margin-small-right\"></i>\n                {{ 'Please drop a file here or ' | trans }}<a class=\"uk-form-file\">{{ 'select a file' | trans }}<input type=\"file\" name=\"files[]\" multiple=\"multiple\"></a>.\n            </div>\n\n            <div class=\"uk-progress uk-progress-mini uk-margin-remove\" v-show=\"upload.running\">\n                <div class=\"uk-progress-bar\" :style=\"{width: upload.progress + '%'}\"></div>\n            </div>\n    </div>\n\n    </div>";

/***/ }

/******/ });