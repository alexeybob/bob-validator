## All
When applied to an array, this constraint allows you to apply a collection of constraints to each element of the array.

```javascript
import {
    // ...
    UniqueEntityValidator,
    AllValidator
} from 'bob-validator';

let validators = {
    // ...
    fieldName: {
        isRequired: true,
        rules: [
            // ...
            new UniqueEntityValidator({
                'message': 'Your error message',
                'fields': ['first_name', 'email'],
                'repositoryData':[
                    {"id":1,"first_name":"Diana","last_name":"Simmons","email":"dsimmons0@google.com"},
                    {"id":2,"first_name":"Earl","last_name":"Hunt","email":"ehunt1@wp.com"},
                    {"id":3,"first_name":"Kathy","last_name":"Day","email":"kday2@dagondesign.com"},
                    {"id":4,"first_name":"Andrew","last_name":"Gilbert","email":"agilbert3@ft.com"},
                    {"id":5,"first_name":"Matthew","last_name":"Watkins","email":"mwatkins4@freewebs.com"},
                    {"id":6,"first_name":"Phillip","last_name":"Burke","email":"pburke5@unc.edu"},
                    {"id":7,"first_name":"Ashley","last_name":"James","email":"ajames6@oaic.gov.au"},
                    {"id":8,"first_name":"Roger","last_name":"Franklin","email":"rfranklin7@phpbb.com"},
                    {"id":9,"first_name":"Randy","last_name":"Shaw","email":"rshaw8@google.fr"},
                    {"id":10,"first_name":"Marie","last_name":"Perez","email":"mperez9@mozilla.org"},
                    {"id":11,"first_name":"Jennifer","last_name":"Kennedy","email":"jkennedya@sciencedaily.com"},
                    {"id":12,"first_name":"Carol","last_name":"Butler","email":"cbutlerb@mac.com"},
                    {"id":13,"first_name":"Angela","last_name":"Morrison","email":"amorrisonc@cbsnews.com"},
                    {"id":14,"first_name":"Stephanie","last_name":"Mitchell","email":"smitchelld@free.fr"},
                    {"id":15,"first_name":"Henry","last_name":"Ramos","email":"hramose@ibm.com"}
                ],
                'ignoreNull': true
            })
        ]
    }
};

let data = {
    // ...
    fieldName: 'Some data ...' // Example: {"id":16,"first_name":"Tammy","last_name":"Montgomery","email":"tmontgomeryf@tinyurl.com"}
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

#### Options
##### validators
**type**: `array`

This required option is the array of validation constraints that you want to apply to each element of the data array.

##### validationType
**type**: `string` **default**: `object`

This parameter define validation rules format. Available: [object, ~~schema~~]

##### errorType
**type**: `string` **default**: `array`

This parameter define errors format. Available: [array, ~~object~~]


[Go to documentation][documentation-url]


[documentation-url]: https://github.com/alexeybob/bob-validator/blob/master/README.md#documentation
[notblank-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/NotBlank.md
[blank-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Blank.md
[notnull-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/NotNull.md
[isnull-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/IsNull.md
[istrue-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/IsTrue.md
[isfalse-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/IsFalse.md
[type-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Type.md
[email-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Email.md
[length-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Length.md
[url-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Url.md
[regex-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Regex.md
[ip-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Ip.md
[uuid-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Uuid.md
[range-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Range.md
[equalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/EqualTo.md
[notequalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/NotEqualTo.md
[identicalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/IdenticalTo.md
[notidenticalto-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/NotIdenticalTo.md
[lessthan-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/LessThan.md
[lessthanorequal-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/LessThanOrEqual.md
[greaterthan-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/GreaterThan.md
[greaterthanorequal-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/GreaterThanOrEqual.md
[date-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Date.md
[datetime-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/DateTime.md
[time-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Time.md
[choice-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Choice.md
[collection-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Collection.md
[count-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Count.md
[uniqueentity-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/UniqueEntity.md
[language-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Language.md
[locale-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Locale.md
[country-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Country.md
[file-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/File.md
[image-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Image.md
[bic-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Bic.md
[cardscheme-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/CardScheme.md
[currency-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Currency.md
[luhn-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Luhn.md
[iban-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Iban.md
[isbn-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Isbn.md
[issn-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Issn.md
[callback-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Callback.md
[expression-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Expression.md
[all-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/All.md
[userpassword-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/UserPassword.md
[valid-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Valid.md
[custom-url]: https://github.com/alexeybob/bob-validator/blob/master/doc/validators/Custom.md