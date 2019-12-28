Object.assign(abv, function () {
    'use strict';

    /**
     * @constructor
     * @name abv.BlankValidator
     * @extends abv.ValidatorExtension
     * @classdesc Validates that a value is blank - meaning equal to an empty string or <code class="notranslate">null</code>.
     * @description Create a new Validator.
     * @param {*} data The data which needs to be validated.
     * @param {Object} options The setting options
     * @example
     * if (
     *     '' !== this.data
     *     && null !== this.data
     * ) {
     *   // validation will fail
     * }
     */

    // PROPERTIES

    /**
     * @name abv.BlankValidator#data
     * @type {*}
     * @description Data that needs to be validated.
     */

    /**
     * @name abv.BlankValidator#lang
     * @type {String}
     * @description Language of error messages.
     */

    /**
     * @name abv.BlankValidator#message
     * @type {String}
     * @description This is the message that will be shown if the value is not blank. Defaults to "This value should be blank."
     * You can use the following parameters in this message:
     * <table>
     *     <tr>
     *         <td><b>Parameter</b></td>
     *         <td><b>Description</b></td>
     *     </tr>
     *     <tr>
     *         <td>%%value%%</td>
     *         <td>The current (invalid) value</td>
     *     </tr>
     * </table>
     */

    var BlankValidator = function (data, options, lang) {
        abv.ValidatorExtension.call(this);

        options = options || {};

        this.data = data;
        this.lang = lang || 'en';

        this.message = options.message || 'This value should be blank.';

        this.__name = 'BlankValidator';
        this.__isValid = true;
        this.__errorMessage = null;
    };
    BlankValidator.prototype = Object.create(abv.ValidatorExtension.prototype);
    BlankValidator.prototype.constructor = BlankValidator;

    Object.assign(BlankValidator.prototype, {
        /**
         * @private
         * @function
         * @name abv.BlankValidator#validate
         * @description Validate data
         */
        validate: function () {
            if (
                '' !== this.data
                && null !== this.data
            ) {
                this.__isValid = false;
                this.__errorMessage = this.prepareMessage(this.message, this.messageParameters());
            }
        },

        /**
         * @private
         * @function
         * @name abv.BlankValidator#messageParameters
         * @description Returned parameters for error message which needs to be replaced
         * @returns {Object} List of parameters
         */
        messageParameters: function () {
            return {
                'value': this.data
            }
        }
    });

    return {
        BlankValidator: BlankValidator
    };
}());