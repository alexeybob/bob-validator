/**
 * Validates that a value is a valid date, meaning either a Date object *or a string (or an object that can be cast into a string)* that follows a valid format.
 *
 * @todo: or a string (or an object that can be cast into a string)
 * @author Alexey Bob <alexey.bob@gmail.com>
 */
'use strict';

//import Validator from './ValidatorAbstract';
var Validator = require('./ValidatorAbstract');

/**
 * http://momentjs.com/
 */
var moment = require('moment');
//import moment from 'moment';

class DateValidator extends Validator {
    constructor() {
        super(arguments);

        var format = arguments[0]['format'];
        var message = arguments[0]['message'];

        this.configuring();

        this.setMessage('message', message);

        if(
            this.isEmpty(format) == false
            && !this.isDateFormatValid('ymd', format)
        ){
            throw new Error(`Invalid format (available: [${this.YearMonthDayTokens.join(", ")}])`);
        }

        this.setParameter('format', format);
    }

    configuring() {
        this.setDefaultMessages({
            'message': 'This value is not a valid date.',
        });

        this.setDefaultParameters({
            'format': 'YYYY-MM-DD',
        });
    }

    validate(data, errorType) {
        errorType = (errorType == null) ? 'array' : errorType;
        this.setErrorType(errorType);
        this.resetErrors();

        if(!moment(data, this.getParameter('format'), true).isValid()){
            this.addError(this.getMessage('message'));
        }
    }
}

module.exports = DateValidator;