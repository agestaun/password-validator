import { describe, expect, test } from 'vitest';
import Validator from '../src/Validator';

describe('Uppercase Rule', () => {

    const validator = new Validator().upperCase().build();

    test('should not be valid with no uppercase characters', () => {

        const { isValid } = validator.validate('mypassword');
        expect(isValid).toBe(false);
    });

    test('should be valid with uppercase characters', () => {
        const { isValid } = validator.validate('myPassword');
        expect(isValid).toBe(true);
    });

    test('should return the message passed to the rule constructor', () => {
        const message = 'Must contain at least an uppercase character';
        const validator = new Validator().upperCase(message).build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(message);
    });

    test('should return undefined message if no message passed to the constructor', () => {
        const validator = new Validator().upperCase().build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(undefined);
    });
});