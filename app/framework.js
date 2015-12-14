
if (window.Vue) {
    //components
    Vue.component('input-category', require('./components/input-category.vue'));
    Vue.component('input-tags', require('./components/input-tags.vue'));

    //fields
    Vue.field.templates.formrow = require('./templates/formrow.html');
    Vue.field.templates.raw = require('./templates/raw.html');
    Vue.field.types.text = '<input type="text" v-bind="attrs" v-model="value">';
    Vue.field.types.textarea = '<textarea v-bind="attrs" v-model="value"></textarea>';
    Vue.field.types.select = '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>';
    Vue.field.types.radio = '<p class="uk-form-controls-condensed"><label v-for="option in options"><input type="radio" :value="option" v-model="value"> {{ $key | trans }}</label></p>';
    Vue.field.types.checkbox = '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel | trans }}</label></p>';
    Vue.field.types.number = '<input type="number" v-bind="attrs" v-model="value" number>';
    Vue.field.types.title = '<h3 v-bind="attrs">{{ title | trans }}</h3>';
}
