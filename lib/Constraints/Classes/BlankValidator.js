/**
 * Validates that a value is blank, defined as equal to a blank string or equal to null.
 * To force that a value strictly be equal to null, see the IsNull constraint.
 * To force that a value is not blank, see NotBlank.
 *
 * @author Alexey Bob <alexey.bob@gmail.com>
 */
'use strict';

//import Validator from './AbstractValidator';
var Validator = require('./AbstractValidator');

class BlankValidator extends Validator {
    constructor() {
        super(arguments);

        var message = arguments[0]['message'];

        this.configuring();

        this.setMessage('message', message);
    }

    configuring() {
        this.setDefaultMessages({
            'message': 'This value should be blank.',
        });
    }

    validate(data, errorType) {
        if(errorType == null){
            errorType = 'array';
        }
        this.setErrorType(errorType);
        this.resetErrors();

        if(!this.isEmpty(data)){
            this.addError(this.getMessage('message'));
        }
    }
}

module.exports = BlankValidator;
