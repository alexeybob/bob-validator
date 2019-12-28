/**
 * @private
 * @function
 * @name _typeLookup
 * @description Create look up table for types
 */
var _typeLookup = function () {
    var result = { };
    var names = ["Array", "Object", "Function", "Date", "RegExp", "Float32Array"];

    for (var i = 0; i < names.length; i++)
        result["[object " + names[i] + "]"] = names[i].toLowerCase();

    return result;
}();

/**
 * @name abv
 * @namespace
 * @description Root namespace for the Bob Validator Library
 */
var abv = {
    version: "__CURRENT_SDK_VERSION__",
    revision: "__REVISION__",
    config: { },
    common: { },


    /**
     * @private
     * @function
     * @name abv.parceRules
     * @description Parce validation rules from string
     * @param {String} rules Validation rules in string format
     * @returns {Object} The roles in array format
     */
    parceRules: function (rules) {
        var parceRules = {};
        var splitted = rules.split('|');
        var validators = {};

        for (key in splitted) {
            if (!splitted.hasOwnProperty(key)) continue;

            var rule = splitted[key];
            var validator = rule.substring(0, rule.indexOf(';'));
            var options = {};

            if ('' === validator) {
                validator = rule;
            } else {
                rule.substring(rule.indexOf(';') + 1).split(',').map(function (element) {
                    var option = element.split(':');
                    options[option[0]] = option[1];
                });
            }

            validators[validator] = options;
        }

        return validators;
    },

    /**
     * @function
     * @name abv.isType
     * @description Parce validation rules from string
     * @param {String} type Type string
     * @param {*} data Data, which type needs to be checked
     * @returns {Boolean} Is correct data type.
     */
    isType: function (type, data) {
        switch (type) {
            case'array':
                return Array.isArray(data);
                break;
            case'bool':
            case'boolean':
                return ("boolean" === typeof data);
                break;
            case'callable':
                return ("function" === typeof data);
                break;
            case'float':
            case'double':
                return (Number(data) === data && data % 1 !== 0);
                break;
            case'int':
            case'integer':
                return (Number(data) === data && data % 1 === 0);
                break;
            case'null':
                return (null === data) ? true : false;
                break;
            case'iterable':
                // checks for null and undefined
                if (data == null) {
                    return false;
                }
                return ('function' === typeof data[Symbol.iterator]) ? true : false;
                break;
            case'numeric':
                return /^[0-9]+\.?[0-9]+$/.test(data);
                break;
            case'object':
                return ('object' === typeof data) ? true : false;
                break;
            case'real':
                return ('number' === typeof data && !isNaN(data) && isFinite(data)) ? true : false;
            case'scalar': // Scalar variables are those containing an integer, float, string or boolean.
                return (
                    true === this.isType('integer', data)
                    || true === this.isType('float', data)
                    || true === this.isType('string', data)
                    || true === this.isType('boolean', data)
                ) ? true : false;
                break;
            case'string':
                return ('string' === typeof data) ? true : false;
                break;
            case'alnum':
                return /^[a-zA-Z0-9]+$/.test(data);
                break;
            case'alpha':
                return /^[a-zA-Z]+$/.test(data);
                break;
            case'digit':
                return /^[0-9]+$/.test(data);
                break;
            case'graph':
                return /\s/.test(data) ? false : true;
                break;
            case'lower':
                var matches;
                if ((matches = /[a-z]+/m.exec(data)) !== null) {
                    if (
                        'undefined' !== matches[0]
                        && matches[0] === data
                    ) {
                        return true;
                    }
                    return false;
                }
                return false;
                break;
            case'print':
                var regex = /[\r|\n|\t]+/mg;
                var m;
                var counter = 0;
                while ((m = regex.exec(data)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    counter ++;
                }

                return (counter > 0) ? false : true;
                break;
            case'punct':
                return /^[^0-9a-zA-Z ]+$/.test(data);
            case'space':
                return /^[\r\n\t]+$/.test(data);
            case'upper':
                var matches;
                if ((matches = /[A-Z]+/m.exec(data)) !== null) {
                    if (
                        'undefined' !== matches[0]
                        && matches[0] === data
                    ) {
                        return true;
                    }
                    return false;
                }
                return false;
                break;
            case'xdigit':
                return /^[A-Fa-f0-9]+$/.test(data);
                break;
        }

        return false;
    },

    /**
     * @function
     * @name abv.createValidator
     * @description Create object of the validator
     * @param {*} data The data which needs to be validated
     * @param {String} validator Validator name
     * @param {Object} options Settings for validator
     * @returns {Object} The roles in array format
     */
    createValidator: function (data, validator, options) {
        var validatorObject;
        var lang = abv.app.lang;

        switch (validator) {
            case 'required':
            case 'not-blank':
                validatorObject = new abv.NotBlankValidator(data, options, lang);
                break;
            case 'blank':
                validatorObject = new abv.BlankValidator(data, options, lang);
                break;
            case 'not-null':
                validatorObject = new abv.NotNullValidator(data, options, lang);
                break;
            case 'is-null':
            case 'null':
                validatorObject = new abv.NotNullValidator(data, options, lang);
                break;
            case 'is-true':
            case 'true':
                validatorObject = new abv.IsTrueValidator(data, options, lang);
                break;
            case 'is-false':
            case 'false':
                validatorObject = new abv.IsFalseValidator(data, options, lang);
                break;
            case 'type':
                validatorObject = new abv.TypeValidator(data, options, lang);
                break;
        }

        return validatorObject;
    },

    /**
     * @function
     * @name abv.isValid
     * @description Check if data valid according to validation rules
     * @param {*} data The data which needs to be validated
     * @param {String} rules Validation rules in string format
     * @returns {Boolean} Validation status
     */
    isValid: function (data, rules) {
        var engine = new abv.Application();

        validator = engine.createSingle(
            data,
            rules
        );

        return validator.isValid();
    }
};

if (typeof exports !== 'undefined')
    exports.abv = abv;