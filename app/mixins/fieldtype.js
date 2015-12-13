module.exports = {

    props: ['isAdmin', 'field', 'model', 'form'],

    methods: {
        getDataObject: function (defaultValue) {
            if (this.isAdmin) {
                this.field.data.value = this.field.data.value || defaultValue;
                return this.field.data;
            }
            this.model[this.field.id].type = this.field.type;
            this.model[this.field.id].label = this.field.label;
            this.model[this.field.id].value = defaultValue;
            this.model[this.field.id].prepared = this.field.prepared;
            return this.model[this.field.id];
        },
        fieldInvalid: function (form) {
            return form && form[this.fieldid] ? form[this.fieldid].invalid : false;
        },
        classes: function (classes_array, classes_string) {
            return (classes_array || []).concat(String(classes_string || '').split(' '));
        }

    },

    computed: {
        fieldRequired: function () {
            return this.field.data.required && !this.isAdmin ? true : false;
        },
        fieldLabel: function () {
            return this.isAdmin ? 'Default value' : this.field.label;
        }
    }

};