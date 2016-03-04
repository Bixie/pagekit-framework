<template>

    <div :class="classes(['uk-form-row'], field.data.classSfx)">
        <label :for="fieldid" class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}
            <a v-if="field.data.help_text && field.data.help_show == 'tooltip_icon'"
               class="uk-icon-info uk-icon-hover uk-margin-small-top uk-float-right"
               :title="field.data.help_text" data-uk-tooltip="{delay: 100}"></a>
        </label>

        <div class="uk-form-controls">
            <input v-if="minLength || maxLength" type="text" class="uk-form-width-large" placeholder="{{ field.data.placeholder || '' | trans }}"
                   :name="fieldid" :id="fieldid"
                   v-model="inputValue"
                   v-validate:required="fieldRequired"
                   minlength="{{ field.data.minLength }}"
                   maxlength="{{ field.data.maxLength }}"
                   v-validate:minLength="minLength"
                   v-validate:maxLength="maxLength">
            <input v-else type="text" class="uk-form-width-large" placeholder="{{ field.data.placeholder || '' | trans }}"
                   :name="fieldid" :id="fieldid"
                   v-model="inputValue"
                   v-validate:required="fieldRequired">

            <p v-if="field.data.help_text && field.data.help_show == 'block'"
               class="uk-form-help-block">{{{field.data.help_text}}}</p>

            <p class="uk-form-help-block uk-text-danger" v-show="fieldInvalid(form)">{{ fieldRequiredMessage }}</p>
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
            },
            'minLength': {
                type: 'number',
                label: 'Min length input',
                attrs: {'class': 'uk-form-width-small uk-text-right', 'min': 0}
            },
            'maxLength': {
                type: 'number',
                label: 'Max length input',
                attrs: {'class': 'uk-form-width-small uk-text-right', 'min': 0}
            }
        },

        appearance: {},

        data: function () {
            return {
                fieldid: _.uniqueId('formmakerfield_')
            };
        },

        created: function () {
            //defaults admin
            this.field.data.minLength = this.field.data.minLength || 0;
            this.field.data.maxLength = this.field.data.maxLength || 0;
        },

        computed: {
            minLength: function () {
                return this.field.data.minLength && !this.isAdmin ? this.field.data.minLength : false;
            },
            maxLength: function () {
                return this.field.data.maxLength && !this.isAdmin ? this.field.data.maxLength : false;
            }
        }

    };

    window.BixieFieldtypes.components['text'] = module.exports;

</script>
