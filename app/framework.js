
if (window.Vue) {
    //components
    Vue.component('input-category', require('./components/input-category.vue'));
    Vue.component('input-tags', require('./components/input-tags.vue'));
    require('./components/input-file.vue');
    //directives
    Vue.directive('spinner', require('./directives/spinner'));
    //partials
    Vue.partial('fieldtype-basic', require('./templates/fieldtype-basic.html'));
    Vue.partial('fieldtype-settings', require('./templates/fieldtype-settings.html'));
    Vue.partial('fieldtype-appearance', require('./templates/fieldtype-appearance.html'));
    //fields
    require('./form-fields/fields')(Vue);

}
