!function(e){function t(i){if(a[i])return a[i].exports;var l=a[i]={exports:{},id:i,loaded:!1};return e[i].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}({0:function(e,t,a){var i,l;i=a(10),l=a(21),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)},10:function(e,t){"use strict";e.exports={mixins:[BixieFieldtypeMixin],settings:{placeholder:{type:"text",label:"Placeholder",attrs:{"class":"uk-form-width-large"}},minLength:{type:"number",label:"Min length input",attrs:{"class":"uk-form-width-small uk-text-right",min:0}},maxLength:{type:"number",label:"Max length input",attrs:{"class":"uk-form-width-small uk-text-right",min:0}}},appearance:{rows:{type:"number",label:"Rows textarea",attrs:{"class":"uk-form-width-small uk-text-right",min:0}}},data:function(){return{fieldid:_.uniqueId("formmakerfield_")}},created:function(){this.field.data.rows=this.field.data.rows||4,this.field.data.minLength=this.field.data.minLength||0,this.field.data.maxLength=this.field.data.maxLength||0},computed:{minLength:function(){return this.field.data.minLength?this.field.data.minLength:!1},maxLength:function(){return this.field.data.maxLength?this.field.data.maxLength:!1}}},window.BixieFieldtypes.components.textbox=e.exports},21:function(e,t){e.exports='<div :class="classes([\'uk-form-row\'], field.data.classSfx)"> <label :for=fieldid class=uk-form-label v-show=!field.data.hide_label>{{ fieldLabel | trans }} <a v-if="field.data.help_text && field.data.help_show == \'tooltip_icon\'" class="uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right" :title=field.data.help_text data-uk-tooltip="{delay: 100}"></a> </label> <div class=uk-form-controls> <textarea v-if="minLength || maxLength" class=uk-form-width-large placeholder="{{ field.data.placeholder || \'\' | trans }}" :name=fieldid v-bind="{id: fieldid, rows: field.data.rows}" v-model=inputValue v-validate:required=fieldRequired v-validate:minlength=minLength v-validate:maxlength=maxLength></textarea> <textarea v-else class=uk-form-width-large placeholder="{{ field.data.placeholder || \'\' | trans }}" v-bind="{name: fieldid, id: fieldid, rows: field.data.rows}" v-model=inputValue v-validate:required=fieldRequired></textarea> <p v-if="field.data.help_text && field.data.help_show == \'block\'" class=uk-form-help-block>{{{field.data.help_text}}}</p> <p class="uk-form-help-block uk-text-danger" v-show=fieldInvalid(form)>{{ fieldRequiredMessage }}</p> </div> </div>'}});