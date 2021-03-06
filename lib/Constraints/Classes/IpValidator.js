/**
 * Validates that a value is a valid IP address.
 * @todo By default, this will validate the value as IPv4, but a number of different options exist to validate as IPv6 and many other combinations.
 *
 * @author Alexey Bob <alexey.bob@gmail.com>
 * @todo: version
 */
'use strict';

//import Validator from './AbstractValidator';
var Validator = require('./AbstractValidator');

class IpValidator extends Validator {
    constructor() {
        super(arguments);

        var version = arguments[0]['version'];
        var message = arguments[0]['message'];

        this.configuring();

        this.setMessage('message', message);

        this.setParameter('version', version);
    }

    configuring() {
        this.setDefaultMessages({
            'message': 'This is not a valid IP address.',
        });

        this.setDefaultParameters({
            'version': null,
        });
    }

    validate(data, errorType) {
        errorType = (errorType == null) ? 'array' : errorType;
        this.setErrorType(errorType);
        this.resetErrors();

        if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(data) == false){
            this.addError(this.getMessage('message'));
        }
    }
}

module.exports = IpValidator;
