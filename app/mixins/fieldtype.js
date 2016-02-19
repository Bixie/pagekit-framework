module.exports = {

    props: ['isAdmin', 'field', 'model', 'form'],

    data: function () {
        return {
            fieldValue: {},
            inputValue: ''
        };
    },

    created: function () {
        this.inputValue = this.fieldMultiple ? this.fieldValue.value : String(this.fieldValue.value);
        if (!this.fieldValue.data || this.fieldValue.data.length === 0) {
            this.fieldValue.data = {}; //fix datatype
        }
    },

    methods: {
        fieldInvalid: function (form) {
            return form && form[this.fieldid] ? form[this.fieldid].invalid : false;
        },
        classes: function (classes_array, classes_string) {
            return (classes_array || []).concat(String(classes_string || '').split(' '));
        },
        addValue: function (value, valuedata) {
            this.fieldValue.value.push(value);
            this.$set('fieldValue.data.data' + (this.fieldValue.value.length - 1), valuedata || {});
        },
        getValuedata: function (value) {
            return _.find(this.fieldValue.data, 'value', value) || {'value': value};
        }

    },

    computed: {
        fieldValue: function () {
            if (this.isAdmin) {
                return this.field.data;
            }
            return this.model[this.field.slug];
        },
        valuedata: function () {
            if (this.fieldValue.value.length) {
                return this.fieldValue.value.map(function (value, i) {
                    return this.fieldValue.data['data' + i] || {'value': value};
                }.bind(this));
            }
            return [];
        },
        fieldMultiple: function () {
            return !!this.field.data.multiple;
        },
        fieldRequired: function () {
            return this.field.data.required && !this.isAdmin ? true : false;
        },
        fieldLabel: function () {
            return this.isAdmin ? 'Default value' : this.field.label;
        }
    },

    watch: {
        'inputValue': function (value) {
            this.fieldValue.value = this.fieldMultiple ? value : [value];
        }
    }

};