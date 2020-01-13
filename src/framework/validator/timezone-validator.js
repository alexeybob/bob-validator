Object.assign(abv, function () {
    'use strict';

    /**
     * @constructor
     * @name abv.TimezoneValidator
     * @extends abv.AbstractValidator
     * @classdesc
     * Validates that a value is a valid timezone identifier (e.g. Europe/Paris).
     * {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones|List of tz database time zones}.
     * @description Create a new Validator.
     * @param {*} data The data which needs to be validated.
     * @param {Object} options The setting options
     * @param {String} lang The language used by the application. Default: 'en'.
     * @param {Boolean} internal If this parameter is true, it means, that validation called from core.
     * @example
     * var validator = new abv.TimezoneValidator(data);
     * if (false === validator.isValid()) {
     *      validator.messages().first();
     * }
     */

    // PROPERTIES

    /**
     * @name abv.TimezoneValidator#message
     * @type {String}
     * @description
     * This message is shown if the underlying data is not a valid timezone identifier.
     * Default: "This value is not a valid timezone."
     * You can use the following parameters in this message:
     * <table>
     *     <thead>
     *         <tr>
     *             <th>Parameter</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td>%%value%%</td>
     *             <td>The current (invalid) value</td>
     *         </tr>
     *     </tbody>
     * </table>
     */

    var TimezoneValidator = function (data, options, lang, internal) {
        abv.AbstractValidator.call(this, data, options,{
            message: 'length:{"min":3,"max":255}'
        }, lang, internal);

        this.message = this.__options.message || 'This value is not a valid timezone.';

        this.__setName('TimezoneValidator');
    };
    TimezoneValidator.prototype = Object.create(abv.AbstractValidator.prototype);
    TimezoneValidator.prototype.constructor = TimezoneValidator;

    Object.defineProperty(TimezoneValidator.prototype, 'name', {
        get: function () {
            return this.__getName();
        }
    });

    Object.assign(TimezoneValidator.prototype, {
        /**
         * @private
         * @function
         * @name abv.TimezoneValidator#__validate
         * @description Validate data
         */
        __validate: function () {
            var zone = this.__moment.tz.zone(this.data);
            if (null === zone) {
                this.__setErrorMessage(this.message, this.__messageParameters());
                return ;
            }
        },

        /**
         * @private
         * @function
         * @name abv.EmailValidator#__beforeValidate
         * @description Execute before validation is running
         */
        __beforeValidate: function () {
            // Check if empty
            if (true === this.__isEmptyData()) {
                this.__skip = true;
                return ;
            }

            // Check if value is scalar
            var errorMessage = abv.isValidWithErrorMessage(this.data, 'type:{"type":"scalar"}', true);
            if(null !== errorMessage) {
                this.__setErrorMessage(errorMessage, {});
                return ;
            }

            try {
                if ('undefined' !== typeof this.data) {
                    this.data = this.data.toString();
                }
            } catch (e) {
                this.__setErrorMessage(this.message, this.__messageParameters());
                return ;
            }
        },

        /**
         * @private
         * @function
         * @name abv.TimezoneValidator#__messageParameters
         * @description Returned parameters for error message which needs to be replaced
         * @returns {Object} List of parameters
         */
        __messageParameters: function () {
            return {
                'value': this.data
            }
        }
    });

    return {
        TimezoneValidator: TimezoneValidator
    };
}());