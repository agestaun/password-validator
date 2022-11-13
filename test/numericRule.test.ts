import {NumericRule, Validator} from '../src';

describe('Numeric Rule', () => {
    
    test('should not be valid if it contains non-numeric characters', () => {
        const validator = new Validator([new NumericRule()]);
        const valid = validator.isValid('Pass4537');
        expect(valid).toBe(false);
    });

    test('should be valid if it only contains numeric characters', () => {
        const validator = new Validator([new NumericRule()]);
        const valid = validator.isValid('4537');
        expect(valid).toBe(true);
    });
});