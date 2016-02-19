<template>

    <div :class="classes(['uk-form-row'], field.data.classSfx)">
        <label :for="fieldid" class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}</label>

        <div class="uk-form-controls">
            <input type="text" class="uk-form-width-large" placeholder="{{ field.data.placeholder || '' | trans }}"
                   :name="fieldid" :id="fieldid"
                   v-model="inputValue"
                   v-validate:required="fieldRequired">

            <p class="uk-form-help-block uk-text-danger" v-show="fieldInvalid(form)">{{ field.data.requiredError ||
                'Please enter a value' | trans }}</p>
        </div>
    </div>

</template>

<script>

    module.exports = {

        mixins: [BixieFieldtypeMixin],

        settings: {
            'placeholder': {
                type: 'text',
                label: 'Placeholder',
                attrs: {'class': 'uk-form-width-large'}
            }
        },

        appearance: {},

        data: function () {
            return {
                fieldid: _.uniqueId('formmakerfield_')
            };
        }

    };

    window.BixieFieldtypes.components['text'] = module.exports;

</script>
