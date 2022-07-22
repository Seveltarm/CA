const { Fubar } = require('./fubar.js');

describe('Fubar', () => {
    let fubar;

    beforeEach(() => {
        fubar = new Fubar();
    });

    describe('#checkNumberReturnValue', () => {
        it('should display FizzBuzz when divided by 3 and 5 without remainder', () => {
            const numberDividedByThreeAndFive = 30;

            const checkNumberDivisionByThreeAndFive = fubar.checkNumberReturnValue(numberDividedByThreeAndFive);

            expect(checkNumberDivisionByThreeAndFive).toBe('FizzBuzz');
        });

        it('should display Fizz when divided by 3 without remainder', () => {
            const numberDividedByThree = 6;

            const checkNumberDivisionByThree = fubar.checkNumberReturnValue(numberDividedByThree);

            expect(checkNumberDivisionByThree).toBe('Fizz');
        });

        it('should display Buzz when divided by 5 without remainder', () => {
            const numberDividedByFive = 10;

            const checkNumberDivisionByFive = fubar.checkNumberReturnValue(numberDividedByFive);

            expect(checkNumberDivisionByFive).toBe('Buzz');
        });

        it('should return number when no other divider was used', () => {
            const otherNumber = 7;

            const otherNumberReturn = fubar.checkNumberReturnValue(otherNumber);

            expect(otherNumberReturn).toBe(otherNumberReturn);
        });
    });
});