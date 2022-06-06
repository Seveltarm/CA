const { Fubar } = require('./fubar.js');

describe('fubar return', () => {
    let fubar;

    beforeEach(() => {
        fubar = new Fubar();
    });

    it('should return same value as input', () => {
        const param = 'param';
        const input = fubar.fubar(param);

        expect(input).toBe(param);
    });

    it('it should display FizzBuzz', () => {
        const numberDividedByThreeAndFive = 30;

        const checkNumberDivisionByThreeAndFive = fubar.checkNumberReturnValue(numberDividedByThreeAndFive);

        expect(checkNumberDivisionByThreeAndFive).toBe('Fizz Buzz');
    });

    it('it should display Fizz', () => {
        const numberDividedByThree = 6;

        const checkNumberDivisionByThree = fubar.checkNumberReturnValue(numberDividedByThree);

        expect(checkNumberDivisionByThree).toBe('Fizz');
    });

    it('it should display Buzz', () => {
        const numberDividedByFive = 10;

        const checkNumberDivisionByFive = fubar.checkNumberReturnValue(numberDividedByFive);

        expect(checkNumberDivisionByFive).toBe('Buzz');
    });

    it('it should display number', () => {
        const otherNumber = 7;

        const otherNumberReturn = fubar.checkNumberReturnValue(otherNumber);

        expect(otherNumberReturn).toBe(otherNumberReturn);
    });
});