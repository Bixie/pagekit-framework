<template>

    <div :class="classes(['uk-form-row'], field.data.classSfx)">
        <span class="uk-form-label" v-show="!field.data.hide_label">{{ fieldLabel | trans }}</span>

        <div class="uk-form-controls uk-form-controls-text">
            <p v-for="option in field.options" class="uk-form-controls-condensed">
                <label><input type="radio" value="{{ option.value }}"
                              v-model="inputValue"> {{ option.text }}</label>
            </p>
        </div>
    </div>

</template>

<script>

    module.exports = {

        mixins: [BixieFieldtypeMixin],

        settings: {},

        appearance: {},

        data: function () {
            return {
                fieldid: _.uniqueId('formmakerfield_')
            };
        }

    };

    window.BixieFieldtypes.components['radio'] = module.exports;

</script>
