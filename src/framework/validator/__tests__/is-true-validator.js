'use strict';

const abv = require('../../../../build/output/bob-validator');

describe('true', () => {
    describe('Is Valid', () => {
        let toBe = true;

        test('True', () => {
            expect(abv.isValid(true, 'true')).toBe(toBe);
        });

        test('1', () => {
            expect(abv.isValid(1, 'true')).toBe(toBe);
        });

        test('"1"', () => {
            expect(abv.isValid("1", 'true')).toBe(toBe);
        });
    });

    describe('Is Invalid', () => {
        let toBe = false;

        test('Empty String', () => {
            expect(abv.isValid('', 'true')).toBe(toBe);
        });

        test('Null', () => {
            expect(abv.isValid(null, 'true')).toBe(toBe);
        });

        test('Boolean', () => {
            expect(abv.isValid(false, 'true')).toBe(toBe);
        });

        test('Empty Array', () => {
            expect(abv.isValid([], 'true')).toBe(toBe);
        });

        test('Empty Object', () => {
            expect(abv.isValid({}, 'true')).toBe(toBe);
        });
    });
});