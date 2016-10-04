# bob-validator

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]

A library of validators

### Navigation

* [Installation and Using](#installation-and-using)
* [Validation Functions](#validation-functions)
* [Basic Usage Example](#basic-usage-example)
* [Schema Usage Example](#schema-usage-example)
* [Tests](#tests)
* [Documentation](#documentation)

---------------

### Installation and Using

**Server-side usage**

Install the library with:
```sh
$ npm install bob-validator
```

```javascript
var _v = require('bob-validator');

// ...
let AllValidator = _v.AllValidator;
```

**ES6:**
```javascript
import {
    // ...
    AllValidator
} from 'bob-validator';
```

---------------

#### Validation Functions

```javascript
var _v = require('bob-validator');

if(_v.func.isEmail('email@domain.com')){
    // Some code ...
}
```

##### Basic Constraints

These are the basic constraints: use them to assert very basic things about the value of properties or the return value of methods on your object.

* **[isNotBlank][is-notblank-url](data)** - Validates that a value is not blank, defined as not strictly `false`, not equal to a blank string and also not equal to `null`. To force that a value is simply not equal to `null`, see the [isNotNull][is-notnull-url] constraint.
* **[isBlank][is-blank-url](data)** - Validates that a value is blank, defined as equal to a blank string or equal to `null`. To force that a value strictly be equal to `null`, see the [isNull][is-null-url] constraint. To force that a value is not blank, see [isNotBlank][is-notblank-url].
* **[isNotNull][is-notnull-url](data)** - Validates that a value is not strictly equal to `null`. To ensure that a value is simply not blank (not a blank string), see the [isNotBlank][is-notblank-url] constraint.
* **[isNull][is-null-url](data)** - Validates that a value is exactly equal to `null`. To force that a property is simply blank (blank string or `null`), see the [isBlank][is-blank-url] constraint. To ensure that a property is not null, see [isNotNull][is-notnull-url].
* **[isTrue][is-true-url](data)** - Validates that a value is `true`. Specifically, this checks to see if the value is exactly `true`, exactly the integer `1`, or exactly the string "`1`".
* **[isFalse][is-false-url](data)** - Validates that a value is `false`. Specifically, this checks to see if the value is exactly `false`, exactly the integer `0`, or exactly the string "`0`".
* **[isArray][is-array-url](data)** - Validates that a value is `array` data type.
* **[isBool][is-bool-url](data)** - Validates that a value is `boolean` data type.
* **[isFloat][is-float-url](data)** - Validates that a value is `float` data type.
* **[isDouble][is-double-url](data)** - Validates that a value is `double` data type.
* **[isInt][is-int-url](data)** - Validates that a value is `integer` data type.
* **[isNumeric][is-numeric-url](data)** - Validates that a value is `numeric` data type.
* **[isObject][is-object-url](data)** - Validates that a value is `object` data type.
* **[isScalar][is-scalar-url](data)** - Validates that a value is `scalar` data type.
* **[isString][is-string-url](data)** - Validates that a value is `string` data type.

##### String Constraints

* **[isEmail][is-email-url](data)** - Validates that a value is a valid email address. The underlying value is cast to a string before being validated.
* **[isLength][is-length-url](data, options)** - Validates that a given string length is between some minimum and maximum value. Required options: {'`min`': 1, '`max`': 100}.
* **[isUrl][is-url-url](data)** - Validates that a value is a valid URL string.
* **[isPregMatch][is-pregmatch-url](data)** - Validates that a value matches a regular expression. Required options: {'`pattern`': /^.+\@\S+\.\S+$/}.
* **[isIp][is-ip-url](data)** - Validates that a value is a valid IP address.
* **[isUuid][is-uuid-url](data, options)** - Validates that a value is a valid [Universally unique identifier (UUID)](https://en.wikipedia.org/wiki/Universally_unique_identifier) per [RFC 4122](https://tools.ietf.org/html/rfc4122). By default, this will validate the format according to the RFC's guidelines, but this can be relaxed to accept non-standard UUIDs that other systems (like PostgreSQL) accept. UUID versions can also be restricted using a whitelist. Optional options: {'`versions`': [1,2,3,4,5], '`strict`': false}.

##### Number Constraints

* **[isRange][is-range-url](data)** - Validates that a given number is *between* some minimum and maximum number or date. Required options: {'`min`': 1, '`max`': 100} or {'`min`': new Date(2015, 0, 1, 0, 0, 0, 0), '`max`': new Date(2017, 0, 1, 0, 0, 0, 0)}.

##### Comparison Constraints

* **[isEqualTo][is-equalto-url](data, options)** - Validates that a value is equal to another value, defined in the options. To force that a value is *not* equal, see [isNotEqualTo][is-notequalto-url]. This constraint compares using `==`, so `3` and "`3`" are considered equal. Use [isIdenticalTo][is-identicalto-url] to compare with `===`. Required options: {'`value`': 100}.
* **[isNotEqualTo][is-notequalto-url](data, options)** - Validates that a value is not equal to another value, defined in the options. To force that a value is equal, see [isEqualTo][is-equalto-url]. This constraint compares using `!=`, so `3` and "`3`" are considered equal. Use [isNotIdenticalTo][is-notidenticalto-url] to compare with `!==`. Required options: {'`value`': 100}.
* **[isIdenticalTo][is-identicalto-url](data, options)** - Validates that a value is identical to another value, defined in the options. To force that a value is *not* identical, see [isNotIdenticalTo][is-notidenticalto-url]. This constraint compares using `===`, so `3` and "`3`" are not considered equal. Use [isEqualTo][is-equalto-url] to compare with `==`. Required options: {'`value`': 100}.
* **[isNotIdenticalTo][is-notidenticalto-url](data, options)** - Validates that a value is **not** identical to another value, defined in the options. To force that a value is identical, see [isIdenticalTo][is-identicalto-url]. This constraint compares using `!==,` so `3` and "`3`" are considered not equal. Use [isNotEqualTo][is-notequalto-url] to compare with `!=`. Required options: {'`value`': 100}.
* **[isLessThan][is-lessthan-url](data, options)** - Validates that a value is less than another value, defined in the options. To force that a value is less than or equal to another value, see [isLessThanOrEqual][is-lessthanorequal-url]. To force a value is greater than another value, see [isGreaterThan][is-greaterthan-url]. Required options: {'`value`': 100}.
* **[isLessThanOrEqual][is-lessthanorequal-url](data, options)** - Validates that a value is less than or equal to another value, defined in the options. To force that a value is less than another value, see [isLessThan][is-lessthan-url]. Required options: {'`value`': 100}.
* **[isGreaterThan][is-greaterthan-url](data, options)** - Validates that a value is greater than another value, defined in the options. To force that a value is greater than or equal to another value, see [isGreaterThanOrEqual][is-greaterthanorequal-url]. To force a value is less than another value, see [isLessThan][is-lessthan-url]. Required options: {'`value`': 100}.
* **[isGreaterThanOrEqual][is-greaterthanorequal-url](data, options)** - Validates that a value is greater than or equal to another value, defined in the options. To force that a value is greater than another value, see [isGreaterThan][is-greaterthan-url]. Required options: {'`value`': 100}.

##### Date Constraints

* **[isDateFormat][is-dateformat-url](data, options)** - Validates that a value is a valid date. Required options: {'`format`': 'YYYY-MM-DD'}.
* **[isDateTimeFormat][is-datetimeformat-url](data, options)** - Validates that a value is a valid datetime. Required options: {'`format`': 'YYYY-MM-DD HH:mm:ss'}.
* **[isTimeFormat][is-timeformat-url](data, options)**- Validates that a value is a valid time. Required options: {'`format`': 'HH:mm:ss'}.

##### Collection Constraints

* **[isIn][is-in-url](data, options)** - This constraint is used to ensure that the given value is one of a given set of *valid* choices. Required options: {'`choices`': [1111, 'aaaaa', 3333, '123a'], '`strict`': false}.
* **[isInMultiple][is-inmultiple-url](data, options)** - This constraint is used to ensure that the given value is one of a given set of *valid* choices. It can also be used to validate that each item in an array of items is one of those valid choices. Required options: {'`choices`': [1111, 'aaaaa', 3333, '123a'], '`strict`': false, '`min`': 1, '`max`': 10,}.
* **[isCount][is-count-url](data, options)** - Validates that a given collection's (i.e. an array) element count is *between* some minimum and maximum value. Required options: {'`min`': 1, '`max`': 10}.
* **[isUniqueEntity][is-uniqueentity-url](data, options)** - Validates that a particular field (or fields) in entity is (are) unique. This is commonly used, for example, to prevent a new user to register using an email address that already exists in the system. Required options: {'`fields`': ['first_name', 'email'], 'repositoryData':[{"id":1,"first_name":"Diana","last_name":"Simmons","email":"dsimmons0@google.com"}, {"id":2,"first_name":"Earl","last_name":"Hunt","email":"ehunt1@wp.com"}]}.
* **[isLanguage][is-language-url](data)** - Validates that a value is a valid language *Unicode language identifier* (e.g. `fr` or `zh-Hant`).
* **[isLocale][is-locale-url](data)** - Validates that a value is a valid locale. The "value" for each locale is either the two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) *language* code (e.g. `fr`), or the language code followed by an underscore (`_`), then the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) *country* code (e.g. `fr_FR` for French/France).
* **[isCountry][is-country-url](data)** - Validates that a value is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) country code.

##### Financial and other Number Constraints

* **[isBic][is-bic-url](data)** - This constraint is used to ensure that a value has the proper format of a [Business Identifier Code (BIC)](https://en.wikipedia.org/wiki/ISO_9362). BIC is an internationally agreed means to uniquely identify both financial and non-financial institutions.
* **[isCardScheme][is-cardscheme-url](data)** - This constraint ensures that a credit card number is valid for a given credit card company. It can be used to validate the number before trying to initiate a payment through a payment gateway. Required options: {'`schemes`': ['AMEX', 'CHINA_UNIONPAY', 'DINERS', 'DISCOVER', 'INSTAPAYMENT', 'JCB', 'LASER', 'MAESTRO', 'MASTERCARD', 'VISA']}.
* **[isCurrency][is-currency-url](data)** - Validates that a value is a valid [3-letter ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency name.
* **[isLuhn][is-luhn-url](data)** - This constraint is used to ensure that a credit card number passes the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm). It is useful as a first step to validating a credit card: before communicating with a payment gateway.
* **[isIban][is-iban-url](data)** - This constraint is used to ensure that a bank account number has the proper format of an [International Bank Account Number (IBAN)](https://en.wikipedia.org/wiki/International_Bank_Account_Number). IBAN is an internationally agreed means of identifying bank accounts across national borders with a reduced risk of propagating transcription errors.
* **[isIsbn][is-isbn-url](data, options)** - This constraint validates that an [International Standard Book Number (ISBN)](https://en.wikipedia.org/wiki/International_Standard_Book_Number) is either a valid ISBN-10 or a valid ISBN-13. Optional options: {'`type`': 'isbn10'}.
* **[isIssn][is-issn-url](data, options)** - Validates that a value is a valid [International Standard Serial Number (ISSN)](https://en.wikipedia.org/wiki/International_Standard_Serial_Number). Optional options: {'`caseSensitive`': false, '`requireHyphen`': false}.

---------------

#### Basic Usage Example

```javascript
var _v = require('bob-validator');

let NotBlankValidator = _v.NotBlankValidator;
let LengthValidator = _v.LengthValidator;
let CardSchemeValidator = _v.CardSchemeValidator;
let EmailValidator = _v.EmailValidator;
let DateValidator = _v.DateValidator;
let IpValidator = _v.IpValidator;
let LocaleValidator = _v.LocaleValidator;
let CountryValidator = _v.CountryValidator;
let LanguageValidator = _v.LanguageValidator;
let UrlValidator = _v.UrlValidator;
let CustomValidator = _v.CustomValidator;
let AllValidator = _v.AllValidator;
```

**ES6:**
```javascript
import {
    NotBlankValidator,
    LengthValidator,
    CardSchemeValidator,
    EmailValidator,
    DateValidator,
    IpValidator,
    LocaleValidator,
    CountryValidator,
    LanguageValidator,
    UrlValidator,
    CustomValidator,
    AllValidator
} from 'bob-validator';
```

```javascript
// Import ...

let CreditCardValidator = new CustomValidator({
    rules: [
        new NotBlankValidator({}),
        new LengthValidator({'min': 11, 'max': 19}),
        new CardSchemeValidator({'schemes': ['AMEX', 'CHINA_UNIONPAY', 'DINERS', 'DISCOVER', 'INSTAPAYMENT', 'JCB', 'LASER', 'MAESTRO', 'MASTERCARD', 'VISA']})
    ],
    message: 'Your error message'
});

let validators = {
    name: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new LengthValidator({'min': 2, 'max': 255})
        ]
    },
    email: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new EmailValidator({})
        ]
    },
    birthday: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new DateValidator({'format': 'DD.MM.YYYY'})
        ]
    },
    creditCard: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            CreditCardValidator
        ]
    },
    ip: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new IpValidator({})
        ]
    },
    locale: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new LocaleValidator({})
        ]
    },
    country: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new CountryValidator({})
        ]
    },
    language: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new LanguageValidator({})
        ]
    },
    homepage: {
        isRequired: true,
        rules: [
            new NotBlankValidator({}),
            new UrlValidator({})
        ]
    }
};

let data = {
    name: 'Leo Lane',
    email: 'leo.lane38@example.com',
    birthday: '03.07.1977',
    creditCard: '4111111111111111',
    ip: '8.8.8.8',
    locale: 'cy_GB',
    country: 'US',
    language: 'en_gb',
    homepage: 'https://github.com/alexeybob/bob-validator'
};

let _oec = new AllValidator({
    validators: validators,
    validationType: 'object',
    errorType: 'array'
});
_oec.validate(data);

if(!_oec.isValid()) {
    let errors = _oec.getErrors();
}
```

[⬆ back to top](#navigation)

---------------

#### Schema Usage Example

```javascript
var _v = require('bob-validator');

let AllValidator = _v.AllValidator;
```

**ES6:**
```javascript
import {
    AllValidator
} from 'bob-validator';
```

```javascript
// Import ...

let CreditCard = {
    rules: {
        NotBlank: {},
        Length: {
            'min': 11,
            'max': 19
        },
        CardScheme: {
            'schemes': ['AMEX', 'CHINA_UNIONPAY', 'DINERS', 'DISCOVER', 'INSTAPAYMENT', 'JCB', 'LASER', 'MAESTRO', 'MASTERCARD', 'VISA']
        }
    },
    message: 'Your error message'
};

let schema = {
    name: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Length: {
                'min': 2,
                'max': 255
            }
        }
    },
    email: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Email: {}
        }
    },
    birthday: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Date: {
                'format': 'DD.MM.YYYY'
            }
        }
    },
    creditCard: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Custom: CreditCard
        }
    },
    ip: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Ip: {}
        }
    },
    locale: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Locale: {}
        }
    },
    country: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Country: {}
        }
    },
    language: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Language: {}
        }
    },
    homepage: {
        isRequired: true,
        rules: {
            NotBlank: {},
            Url: {}
        }
    }
};

let data = {
    name: 'Leo Lane',
    email: 'leo.lane38@example.com',
    birthday: '03.07.1977',
    creditCard: '4111111111111111',
    ip: '8.8.8.8',
    locale: 'cy_GB',
    country: 'US',
    language: 'en_gb',
    homepage: 'https://github.com/alexeybob/bob-validator'
};

let _oec = new AllValidator({
    validators: schema,
    validationType: 'schema',
    errorType: 'array'
});
_oec.validate(data);

if(!_oec.isValid()) {
    let errors = _oec.getErrors();
}
```

[⬆ back to top](#navigation)

---------------

### Tests

```sh
$ npm test
```

[⬆ back to top](#navigation)

---------------

## Documentation

##### Basic Constraints

These are the basic constraints: use them to assert very basic things about the value of properties or the return value of methods on your object.

* [NotBlank][notblank-url]
* [Blank][blank-url]
* [NotNull][notnull-url]
* [IsNull][isnull-url]
* [IsTrue][istrue-url]
* [IsFalse][isfalse-url]
* [Type][type-url]

##### String Constraints

* [Email][email-url]
* [Length][length-url]
* [Url][url-url]
* [Regex][regex-url]
* [Ip][ip-url]
* [Uuid][uuid-url]

##### Number Constraints

* [Range][range-url]

##### Comparison Constraints

* [EqualTo][equalto-url]
* [NotEqualTo][notequalto-url]
* [IdenticalTo][identicalto-url]
* [NotIdenticalTo][notidenticalto-url]
* [LessThan][lessthan-url]
* [LessThanOrEqual][lessthanorequal-url]
* [GreaterThan][greaterthan-url]
* [GreaterThanOrEqual][greaterthanorequal-url]

##### Date Constraints

* [Date][date-url]
* [DateTime][datetime-url]
* [Time][time-url]

##### Collection Constraints

* [Choice][choice-url]
* [Collection][collection-url] `(not implemented)`
* [Count][count-url]
* [UniqueEntity][uniqueentity-url]
* [Language][language-url]
* [Locale][locale-url]
* [Country][country-url]

##### File Constraints

* [File][file-url] `(not implemented)`
* [Image][image-url] `(not implemented)`

##### Financial and other Number Constraints

* [Bic][bic-url]
* [CardScheme][cardscheme-url]
* [Currency][currency-url]
* [Luhn][luhn-url]
* [Iban][iban-url]
* [Isbn][isbn-url]
* [Issn][issn-url]

##### Other Constraints

* [Callback][callback-url]
* [Expression][expression-url] `(not implemented)`
* [All][all-url]
* [UserPassword][userpassword-url] `(not implemented)`
* [Valid][valid-url] `(not implemented)`
* [Custom][custom-url]

[⬆ back to top](#navigation)


[documentation-url]: https://github.com/alexeybob/bob-validator/blob/master/README.md
[notblank-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/NotBlank.md
[blank-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Blank.md
[notnull-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/NotNull.md
[isnull-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/IsNull.md
[istrue-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/IsTrue.md
[isfalse-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/IsFalse.md
[type-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Type.md
[email-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Email.md
[length-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Length.md
[url-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Url.md
[regex-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Regex.md
[ip-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Ip.md
[uuid-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Uuid.md
[range-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Range.md
[equalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/EqualTo.md
[notequalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/NotEqualTo.md
[identicalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/IdenticalTo.md
[notidenticalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/NotIdenticalTo.md
[lessthan-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/LessThan.md
[lessthanorequal-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/LessThanOrEqual.md
[greaterthan-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/GreaterThan.md
[greaterthanorequal-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/GreaterThanOrEqual.md
[date-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Date.md
[datetime-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/DateTime.md
[time-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Time.md
[choice-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Choice.md
[collection-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Collection.md
[count-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Count.md
[uniqueentity-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/UniqueEntity.md
[language-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Language.md
[locale-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Locale.md
[country-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Country.md
[file-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/File.md
[image-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Image.md
[bic-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Bic.md
[cardscheme-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/CardScheme.md
[currency-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Currency.md
[luhn-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Luhn.md
[iban-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Iban.md
[isbn-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Isbn.md
[issn-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Issn.md
[callback-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Callback.md
[expression-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Expression.md
[all-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/All.md
[userpassword-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/UserPassword.md
[valid-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Valid.md
[custom-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/classes/Custom.md


[is-notblank-url]: #
[is-blank-url]: #
[is-notnull-url]: #
[is-null-url]: #
[is-true-url]: #
[is-false-url]: #
[is-array-url]: #
[is-bool-url]: #
[is-float-url]: #
[is-double-url]: #
[is-int-url]: #
[is-numeric-url]: #
[is-object-url]: #
[is-scalar-url]: #
[is-string-url]: #
[is-email-url]: #
[is-length-url]: #
[is-url-url]: #
[is-pregmatch-url]: #
[is-ip-url]: #
[is-uuid-url]: #
[is-range-url]: #
[is-equalto-url]: #
[is-notequalto-url]: #
[is-identicalto-url]: #
[is-notidenticalto-url]: #
[is-lessthan-url]: #
[is-lessthanorequal-url]: #
[is-greaterthan-url]: #
[is-greaterthanorequal-url]: #
[is-dateformat-url]: #
[is-datetimeformat-url]: #
[is-timeformat-url]: #
[is-in-url]: #
[is-inmultiple-url]: #
[is-count-url]: #
[is-uniqueentity-url]: #
[is-language-url]: #
[is-locale-url]: #
[is-country-url]: #
[is-bic-url]: #
[is-cardscheme-url]: #
[is-currency-url]: #
[is-luhn-url]: #
[is-iban-url]: #
[is-isbn-url]: #
[is-issn-url]: #


[npm-url]: https://npmjs.org/package/bob-validator
[npm-image]: http://img.shields.io/npm/v/bob-validator.svg

[travis-url]: https://travis-ci.org/alexeybob/bob-validator
[travis-image]: http://img.shields.io/travis/alexeybob/bob-validator.svg

[downloads-image]: http://img.shields.io/npm/dm/bob-validator.svg