Object.assign(abv, function () {
    'use strict';

    /**
     * @constructor
     * @name abv.GtValidator
     * @extends abv.AbstractValidator
     * @classdesc
     * <p>The field under validation must be <code>greater</code> than the given field. The two fields must be of the same type.</p>
     * <p><code>Strings</code>, <code>numerics</code>, <code>arrays</code>, <code>dates</code> and files are evaluated using the same conventions as the size rule.</p>
     * @description
     * <p>Create a new Validator.</p>
     * @param {*} data The data which needs to be validated.
     * @param {Object} options The setting options
     * @param {Object} optionRules The validation rules for setting options.
     * @param {String} lang The language used by the application. Default: "<code>en</code>".
     * @param {Boolean} internal If this parameter is true, it means, that validation called from core.
     * @example
     * var validator = new abv.GtValidator(data);
     * if (false === validator.isValid()) {
     *      validator.errors().first();
     * }
     */

    // PROPERTIES

    /**
     * @name abv.GtValidator#value
     * @type {*}
     * @description
     * <p>This option is required.</p>
     * <p>It defines the value to compare to.</p>
     * <p>It can be a data in <code>string</code>, <code>number</code>, <code>array</code> or <code>date object</code> formats.</p>
     */

    var GtValidator = function (data, options, optionRules, lang, internal) {
        abv.AbstractValidator.call(this, data, options, {
            value: optionRules.value || 'required|type:{"type":["numeric","datetime","date-string","boolean"],"any":true}',
        }, lang, internal);

        this.value = this.__options.value;
        this.dateMessage = 'The %%attribute%% must be greater than %%value%% date.';
        this.numericMessage = 'The %%attribute%% must be greater than %%value%%.';
        this.stringMessage = 'The %%attribute%% must be greater than %%value%% characters.';
        this.arrayMessage = 'The %%attribute%% must have more than %%value%% items.';

        this.name = 'GtValidator';
    };
    GtValidator.prototype = Object.create(abv.AbstractValidator.prototype);
    GtValidator.prototype.constructor = GtValidator;

    Object.defineProperty(GtValidator.prototype, 'alias', {
        get: function () {
            return 'gt';
        }
    });

    Object.defineProperty(GtValidator.prototype, 'options', {
        get: function () {
            return [
                {
                    'name': 'value',
                    'type': 'boolean|string|numeric|array|datetime'
                }
            ];
        }
    });

    Object.assign(GtValidator.prototype, {
        /**
         * @private
         * @function
         * @name abv.GtValidator#__validate
         * @description
         * <p>Validate data.</p>
         */
        __validate: function () {
            this.__data = this.__prepareDataForComparing(this.__convertDataToValueType());
            this.__value = this.__prepareDataForComparing(this.value);

            if (
                true === abv.isType('integer', this.value)
                && (
                    true === abv.isType('array', this.data)
                    || true === abv.isType('string', this.data)
                )
            ) {
                if (this.data.length <= this.value) {
                    this.__setErrorMessage((true === abv.isType('string', this.data)) ? this.stringMessage : this.arrayMessage, this.__messageParameters());
                    return;
                }
            } else {
                if (false === abv.isValid(this.data, {
                    'greater-than': {
                        "value": this.value
                    }
                }, true)) {
                    var __message = this.dateMessage;
                    if (
                        true === abv.isType('numeric', this.value)
                        || true === abv.isType('boolean', this.value)
                    ) {
                        __message = this.numericMessage;
                    }

                    this.__setErrorMessage(__message, this.__messageParameters());
                    return;
                }
            }
        },

        /**
         * @private
         * @function
         * @name abv.GtValidator#__beforeValidate
         * @description
         * <p>Execute before validation is running</p>
         */
        __beforeValidate: function () {
            // Check if empty
            if (true === this.__isEmptyData()) {
                this.__skip = true;
                return ;
            }
        },

        /**
         * @private
         * @function
         * @name abv.GtValidator#__messageParameters
         * @description
         * <p>Returned parameters for error message which needs to be replaced.</p>
         * @returns {Object} List of parameters
         */
        __messageParameters: function () {
            return {
                'attribute': 'value',
                'value': this.__formattedData(this.value)
            }
        },
    });

    return {
        GtValidator: GtValidator
    };
}());

abv.registry(abv.GtValidator);