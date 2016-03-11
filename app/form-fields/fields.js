module.exports = function (Vue) {

    Vue.field.templates.formrow = require('./formrow.html');
    Vue.field.templates.raw = require('./raw.html');
    Vue.field.templates.descriptionlist = require('./descriptionlist.html');

    Vue.field.types.text = '<input type="text" v-bind="attrs" v-model="value">';
    Vue.field.types.textarea = '<textarea v-bind="attrs" v-model="value"></textarea>';
    Vue.field.types.select = '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>';
    Vue.field.types.radio = '<p class="uk-form-controls-condensed"><label v-for="option in options" v-bind="attrs"><input type="radio" :value="option" v-model="value"> {{ $key }}</label></p>';
    Vue.field.types.checkbox = '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel }}</label></p>';

    Vue.field.types.email = '<input type="email" v-bind="attrs" v-model="value">';
    Vue.field.types.number = '<input type="number" v-bind="attrs" v-model="value" number>';
    Vue.field.types.title = '<h3 v-bind="attrs">{{ title }}</h3>';
    Vue.field.types.paragraph = '<p v-bind="attrs">{{ text }}</p>';
    Vue.field.types.price = '<i class="uk-icon-euro uk-margin-small-right"></i><input type="number" v-bind="attrs" v-model="value" number>';
    Vue.field.types.multiselect = '<multiselect :values.sync="value" :options="options"></multiselect>';

    Vue.field.types.tags = '<input-tags v-bind="attrs" :tags.sync="value" :existing="options" :style="style || \'tags\'"></input-tags>';

    Vue.field.types.format = '<span v-bind="attrs">{{ value }}</span>';

};
