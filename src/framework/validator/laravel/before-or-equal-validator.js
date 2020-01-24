Object.assign(abv, function () {
    'use strict';

    /**
     * @constructor
     * @name abv.BeforeOrEqualValidator
     * @extends abv.AbstractValidator
     * @classdesc
     * <p>The field under validation must be a value preceding or equal to the given <code>date</code>.</p>
     * <p>The dates will be passed into the <code>Data object</code>.</p>
     * <p>In addition, like the after rule, the name of another field under validation may be supplied as the value of <code>date</code>.</p>
     * @description
     * <p>Create a new Validator.</p>
     * @param {*} data The data which needs to be validated.
     * @param {Object} options The setting options
     * @param {Object} optionRules The validation rules for setting options.
     * @param {String} lang The language used by the application. Default: "<code>en</code>".
     * @param {Boolean} internal If this parameter is true, it means, that validation called from core.
     * @example
     * var validator = new abv.BeforeOrEqualValidator(data, {"value": "the value to compare to"});
     * if (false === validator.isValid()) {
     *      validator.errors().first();
     * }
     */

    // PROPERTIES

    /**
     * @name abv.BeforeOrEqualValidator#value
     * @type {*}
     * @description
     * <p>This option is required.</p>
     * <p>It defines the value to compare to.</p>
     * <p>It can be a data in <code>string</code>, <code>number</code> or <code>date object</code> formats.</p>
     */

    var BeforeOrEqualValidator = function (data, options, optionRules, lang, internal) {
        abv.LessThanOrEqualValidator.call(this, data, {
            message: "The %%attribute%% must be a date before or equal to %%date%%.",
            value: options.value
        }, {
            value: 'required|type:{"type":["date","date-string"],"any":true}'
        }, lang, internal);

        this.name = 'BeforeOrEqualValidator';
    };
    BeforeOrEqualValidator.prototype = Object.create(abv.LessThanOrEqualValidator.prototype);
    BeforeOrEqualValidator.prototype.constructor = BeforeOrEqualValidator;

    Object.defineProperty(BeforeOrEqualValidator.prototype, 'alias', {
        get: function () {
            return [
                'before_or_equal',
                'before-or-equal'
            ];
        }
    });

    Object.defineProperty(BeforeOrEqualValidator.prototype, 'options', {
        get: function () {
            return [
                {
                    'name': 'value',
                    'type': 'date'
                }
            ];
        }
    });

    Object.assign(BeforeOrEqualValidator.prototype, {
        /**
         * @private
         * @function
         * @name abv.BeforeOrEqualValidator#__messageParameters
         * @description Returned parameters for error message which needs to be replaced
         * @returns {Object} List of parameters
         */
        __messageParameters: function () {
            return {
                'attribute': 'value',
                'date': this.data
            }
        }
    });

    return {
        BeforeOrEqualValidator: BeforeOrEqualValidator
    };
}());

abv.registry(abv.BeforeOrEqualValidator);