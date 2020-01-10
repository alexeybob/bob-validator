Object.assign(abv, function () {
    'use strict';

    /**
     * @constructor
     * @name abv.PositiveOrZeroValidator
     * @extends abv.AbstractComparisonValidator
     * @classdesc
     * Validates that a value is a positive number or equal to zero.
     * If you don't want to allow zero as value, use abv.Positive instead.
     * @description Create a new Validator.
     * @param {*} data The data which needs to be validated.
     * @param {Object} options The setting options
     * @param {String} lang The language used by the application. Defaults to 'en'.
     * @param {Boolean} internal If this parameter is true, it means, that validation called from core.
     * @example
     * var validator = new abv.PositiveOrZeroValidator(data, {"value": "the value to compare to"});
     * if (false === validator.isValid()) {
     *      validator.messages().first();
     * }
     */

    // PROPERTIES

    /**
     * @name abv.PositiveOrZeroValidator#message
     * @type {String}
     * @description
     * The default message supplied when the value is not greater than or equal to zero.
     * Defaults to "This value should be either positive or zero."
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

    var PositiveOrZeroValidator = function (data, options, lang, internal) {
        abv.AbstractComparisonValidator.call(this, data, options,{
            message: 'length:{"min":3,"max":255}'
        }, lang, internal);

        this.value = 0;
        this.message = this.__options.message || 'This value should be either positive or zero.';

        this.__setName('PositiveOrZeroValidator');
    };
    PositiveOrZeroValidator.prototype = Object.create(abv.AbstractComparisonValidator.prototype);
    PositiveOrZeroValidator.prototype.constructor = PositiveOrZeroValidator;

    Object.defineProperty(PositiveOrZeroValidator.prototype, 'name', {
        get: function () {
            return this.__getName();
        }
    });

    Object.assign(PositiveOrZeroValidator.prototype, {
        /**
         * @private
         * @function
         * @name abv.PositiveOrZeroValidator#__compareValues
         * @description Compare two value
         * @param {*} value Value
         * @param {*} comparedValue Compared value
         * @returns {Boolean}
         */
        __compareValues: function(value, comparedValue) {
            return (value >= comparedValue);
        },

        /**
         * @private
         * @function
         * @name abv.PositiveOrZeroValidator#__messageParameters
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
        PositiveOrZeroValidator: PositiveOrZeroValidator
    };
}());