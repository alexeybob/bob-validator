# Callback
The purpose of the Callback constraint is to create completely custom validation rules and to assign any validation errors to specific fields on your object. This process works by specifying one or more callback methods, each of which will be called during the validation process. Each of those methods can do anything, including creating and assigning validation errors.

[**Homepage**][homepage-url]

### Navigation

* [Installation](#installation)
* [Single Usage](#single-usage)
* [Multi Usage](#multi-usage)
* [Options](#options)
* [Supported Constraints](#supported-constraints)

---------------

#### Installation

Install the library with:
```sh
$ npm install bob-validator
```

---------------

#### Single Usage

```javascript
var _v = require('bob-validator');

let CallbackValidator = _v.CallbackValidator;
```

**ES6:**
```javascript
import {
    // ...
    CallbackValidator
} from 'bob-validator';
```

```javascript
// Import ...

let _validator = new CallbackValidator({
    'callback': function(value, parameters){
        if((value *1) != value){
            throw new Error(`Invalid "value" type. Expected type \"number\", \"${typeof value}\" given`);
        }
    
        if(value < parameters['min']){
            return false;
        }

        if(value > parameters['max']){
            return false;
        }

        return true;
    },
    'parameters': {'min': 100, 'max': 200},
    'message': 'This value should be between {{ min }} and {{ max }}.'
});

let data = 158; 

_validator.validate(data);

if(!_validator.isValid()) {
    let errors = _validator.getErrors();
}
```

[⬆ back to top](#navigation)

---------------

#### Multi Usage

```javascript
var _v = require('bob-validator');

let CallbackValidator = _v.CallbackValidator;
let AllValidator = _v.AllValidator;
```

**ES6:**
```javascript
import {
    // ...
    CallbackValidator,
    AllValidator
} from 'bob-validator';
```

```javascript
// Import ...

let validators = {
    // ...
    fieldName: {
        isRequired: true,
        rules: [
            // ...
            new CallbackValidator({
                'callback': function(value, parameters){
                    if((value *1) != value){
                        throw new Error(`Invalid "value" type. Expected type \"number\", \"${typeof value}\" given`);
                    }
                    
                    if(value < parameters['min']){
                        return false;
                    }

                    if(value > parameters['max']){
                        return false;
                    }

                    return true;
                },
                'parameters': {'min': 100, 'max': 200},
                'message': 'This value should be between {{ min }} and {{ max }}.'
            })
        ]
    }
};

let data = {
    // ...
    fieldName: 158
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

#### Options
##### callback
**type**: `function`

This required option is the "`function`" that will executed.

##### parameters
**type**: `array` **default**: `null`

This option is the "`parameters`" that will argument for executed function.

##### message
**type**: `string`

The message that will be shown if function return false. This option is required.

[⬆ back to top](#navigation)

---------------

## Supported Constraints
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


[documentation-url]: https://github.com/alexeybob/bob-validator/blob/master/README.md#documentation
[homepage-url]: https://github.com/alexeybob/bob-validator/blob/master/README.md
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