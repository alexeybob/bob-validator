Object.assign(abv, function () {
    'use strict';

    /**
     * @constructor
     * @name abv.NegativeValidator
     * @extends abv.AbstractComparisonValidator
     * @classdesc
     * Validates that a value is a negative number.
     * Zero is neither positive nor negative, so you must use abv.NegativeOrZero if you want to allow zero as value.
     * @description Create a new Validator.
     * @param {*} data The data which needs to be validated.
     * @param {Object} options The setting options
     * @param {String} lang The language used by the application. Defaults to 'en'.
     * @param {Boolean} internal If this parameter is true, it means, that validation called from core.
     * @example
     * var validator = new abv.NegativeValidator(data, {"value": "the value to compare to"});
     * if (false === validator.isValid()) {
     *      validator.messages().first();
     * }
     */

    // PROPERTIES

    /**
     * @name abv.NegativeValidator#message
     * @type {String}
     * @description
     * The default message supplied when the value is not less than zero.
     * Defaults to "This value should be negative."
     * You can use the following parameters in this message:
     * <table>
     *     <tr>
     *         <td><b>Parameter</b></td>
     *         <td><b>Description</b></td>
     *     </tr>
     *     <tr>
     *         <td>%%compared_value%%</td>
     *         <td>The expected value</td>
     *     </tr>
     *     <tr>
     *         <td>%%compared_value_type%%</td>
     *         <td>TThe expected value type</td>
     *     </tr>
     *     <tr>
     *         <td>%%value%%</td>
     *         <td>The current (invalid) value</td>
     *     </tr>
     * </table>
     */

    var NegativeValidator = function (data, options, lang, internal) {
        abv.AbstractComparisonValidator.call(this, data, options,{
            message: 'length:{"min":3,"max":255}'
        }, lang, internal);

        this.value = 0;
        this.message = this.__options.message || 'This value should be negative.';

        this.__setName('NegativeValidator');
    };
    NegativeValidator.prototype = Object.create(abv.AbstractComparisonValidator.prototype);
    NegativeValidator.prototype.constructor = NegativeValidator;

    Object.defineProperty(NegativeValidator.prototype, 'name', {
        get: function () {
            return this.__getName();
        }
    });

    Object.assign(NegativeValidator.prototype, {
        /**
         * @private
         * @function
         * @name abv.NegativeValidator#__compareValues
         * @description Compare two value
         * @param {*} value Value
         * @param {*} comparedValue Compared value
         * @returns {Boolean}
         */
        __compareValues: function(value, comparedValue) {
            return (value < comparedValue);
        },

        /**
         * @private
         * @function
         * @name abv.NegativeValidator#__messageParameters
         * @description Returned parameters for error message which needs to be replaced
         * @returns {Object} List of parameters
         */
        __messageParameters: function () {
            return {
                'value': this.data,
                'compared_value': this.value,
                'compared_value_type': abv.getType(this.value)
            }
        }
    });

    return {
        NegativeValidator: NegativeValidator
    };
}());