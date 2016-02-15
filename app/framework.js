
if (window.Vue) {
    //components
    Vue.component('input-category', require('./components/input-category.vue'));
    Vue.component('input-tags', require('./components/input-tags.vue'));
    //directives
    Vue.directive('spinner', require('./directives/spinner'));
    //fields
    require('./form-fields/fields')(Vue);

}
