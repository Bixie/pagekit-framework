<template>

    <div :class="classes(['uk-form-row'], field.data.classSfx)">
        <label :for="fieldid" class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}</label>

        <div class="uk-form-controls">

            <select v-if="field.data.multiple" class="uk-form-width-large" multiple="multiple"
                    :name="fieldid"
                    v-bind="{id: fieldid, size:field.data.size > 1 ? field.data.size : false}"
                    v-model="inputValue"
                    v-validate:required="fieldRequired">
                <option v-for="option in field.options" :value="option.value">{{ option.text }}</option>
            </select>

            <select v-else class="uk-form-width-large"
                    :name="fieldid"
                    v-bind="{id: fieldid, size:field.data.size > 1 ? field.data.size : false}"
                    v-model="inputValue"
                    v-validate:required="fieldRequired">
                <option v-for="option in field.options" :value="option.value">{{ option.text }}</option>
            </select>

            <p class="uk-form-help-block uk-text-danger" v-show="fieldInvalid(form)">{{ field.data.requiredError ||
                'Please select a value' | trans }}</p>
        </div>
    </div>

</template>

<script>

    module.exports = {

        mixins: [BixieFieldtypeMixin],

        settings: {},

        appearance: {
            'size': {
                type: 'number',
                label: 'Size',
                attrs: {'class': 'uk-form-width-small uk-text-right', 'min': 1}
            }
        },

        data: function () {
            return {
                fieldid: _.uniqueId('formmakerfield_')
            };
        }

    };

    window.BixieFieldtypes.components['pulldown'] = module.exports;

</script>
