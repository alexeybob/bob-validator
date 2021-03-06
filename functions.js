/**
 * @author Alexey Bob <alexey.bob@gmail.com>
 */
'use strict';

/**
 * Basic Constraints
 * These are the basic constraints: use them to assert very basic things about the value of properties or the return value of methods on your object.
 */
var isNotBlank = require('./lib/Constraints/Functions/isNotBlank');
var isBlank = require('./lib/Constraints/Functions/isBlank');
var isNotNull = require('./lib/Constraints/Functions/isNotNull');
var isNull = require('./lib/Constraints/Functions/isNull');
var isTrue = require('./lib/Constraints/Functions/isTrue');
var isFalse = require('./lib/Constraints/Functions/isFalse');
var isArray = require('./lib/Constraints/Functions/isArray');
var isBool = require('./lib/Constraints/Functions/isBool');
var isFloat = require('./lib/Constraints/Functions/isFloat');
var isDouble = require('./lib/Constraints/Functions/isDouble');
var isInt = require('./lib/Constraints/Functions/isInt');
var isNumeric = require('./lib/Constraints/Functions/isNumeric');
var isObject = require('./lib/Constraints/Functions/isObject');
var isScalar = require('./lib/Constraints/Functions/isScalar');
var isString = require('./lib/Constraints/Functions/isString');
var isCallable = require('./lib/Constraints/Functions/isCallable');
var isLong = require('./lib/Constraints/Functions/isLong');
var isReal = require('./lib/Constraints/Functions/isReal');
var isAlnum = require('./lib/Constraints/Functions/isAlnum');
var isAlpha = require('./lib/Constraints/Functions/isAlpha');
var isDigit = require('./lib/Constraints/Functions/isDigit');
var isLower = require('./lib/Constraints/Functions/isLower');
var isSpace = require('./lib/Constraints/Functions/isSpace');
var isUpper = require('./lib/Constraints/Functions/isUpper');
var isXdigit = require('./lib/Constraints/Functions/isXdigit');

/**
 * String Constraints
 */
var isEmail = require('./lib/Constraints/Functions/isEmail');
var isLength = require('./lib/Constraints/Functions/isLength');
var isUrl = require('./lib/Constraints/Functions/isUrl');
var isPregMatch = require('./lib/Constraints/Functions/isPregMatch');
var isIp = require('./lib/Constraints/Functions/isIp');
var isUuid = require('./lib/Constraints/Functions/isUuid');

/**
 * Number Constraints
 */
var isRange = require('./lib/Constraints/Functions/isRange');
var isEqualTo = require('./lib/Constraints/Functions/isEqualTo');
var isNotEqualTo = require('./lib/Constraints/Functions/isNotEqualTo');
var isIdenticalTo = require('./lib/Constraints/Functions/isIdenticalTo');
var isNotIdenticalTo = require('./lib/Constraints/Functions/isNotIdenticalTo');
var isLessThan = require('./lib/Constraints/Functions/isLessThan');
var isLessThanOrEqual = require('./lib/Constraints/Functions/isLessThanOrEqual');
var isGreaterThan = require('./lib/Constraints/Functions/isGreaterThan');
var isGreaterThanOrEqual = require('./lib/Constraints/Functions/isGreaterThanOrEqual');

/**
 * Date Constraints
 */
var isDateFormat = require('./lib/Constraints/Functions/isDateFormat');
var isDateTimeFormat = require('./lib/Constraints/Functions/isDateTimeFormat');
var isTimeFormat = require('./lib/Constraints/Functions/isTimeFormat');

/**
 * Collection Constraints
 */
var isIn = require('./lib/Constraints/Functions/isIn');
var isInMultiple = require('./lib/Constraints/Functions/isInMultiple');
var isCount = require('./lib/Constraints/Functions/isCount');
var isUniqueEntity = require('./lib/Constraints/Functions/isUniqueEntity');
var isLanguage = require('./lib/Constraints/Functions/isLanguage');
var isLocale = require('./lib/Constraints/Functions/isLocale');
var isCountry = require('./lib/Constraints/Functions/isCountry');

/**
 * File Constraints
 */
//@todo: FileValidator
//@todo: ImageValidator

/**
 * Financial and other Number Constraints
 */
var isBic = require('./lib/Constraints/Functions/isBic');
var isCardScheme = require('./lib/Constraints/Functions/isCardScheme');
var isCurrency = require('./lib/Constraints/Functions/isCurrency');
var isLuhn = require('./lib/Constraints/Functions/isLuhn');
var isIban = require('./lib/Constraints/Functions/isIban');
var isIsbn = require('./lib/Constraints/Functions/isIsbn');
var isIssn = require('./lib/Constraints/Functions/isIssn');

/**
 * Other Constraints
 */
//@todo: CallbackValidator
//@todo: CustomValidator
//@todo: AllValidator



module.exports = {
    'isNotBlank': isNotBlank,
    'isBlank': isBlank,
    'isNotNull': isNotNull,
    'isNull': isNull,
    'isTrue': isTrue,
    'isFalse': isFalse,
    'isArray': isArray,
    'isBool': isBool,
    'isFloat': isFloat,
    'isDouble': isDouble,
    'isInt': isInt,
    'isNumeric': isNumeric,
    'isObject': isObject,
    'isScalar': isScalar,
    'isString': isString,
    'isEmail': isEmail,
    'isLength': isLength,
    'isUrl': isUrl,
    'isIp': isIp,
    'isEqualTo': isEqualTo,
    'isNotEqualTo': isNotEqualTo,
    'isIdenticalTo': isIdenticalTo,
    'isNotIdenticalTo': isNotIdenticalTo,
    'isLessThan': isLessThan,
    'isLessThanOrEqual': isLessThanOrEqual,
    'isGreaterThan': isGreaterThan,
    'isGreaterThanOrEqual': isGreaterThanOrEqual,
    'isLanguage': isLanguage,
    'isLocale': isLocale,
    'isCountry': isCountry,
    'isPregMatch': isPregMatch,
    'isUuid': isUuid,
    'isRange': isRange,
    'isDateFormat': isDateFormat,
    'isDateTimeFormat': isDateTimeFormat,
    'isTimeFormat': isTimeFormat,
    'isCount': isCount,
    'isIn': isIn,
    'isInMultiple': isInMultiple,
    'isBic': isBic,
    'isCardScheme': isCardScheme,
    'isCurrency': isCurrency,
    'isLuhn': isLuhn,
    'isIban': isIban,
    'isIsbn': isIsbn,
    'isIssn': isIssn,
    'isUniqueEntity': isUniqueEntity,
    'isCallable': isCallable,
    'isLong': isLong,
    'isReal': isReal,
    'isAlnum': isAlnum,
    'isAlpha': isAlpha,
    'isDigit': isDigit,
    'isLower': isLower,
    'isSpace': isSpace,
    'isUpper': isUpper,
    'isXdigit': isXdigit
};