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

    it('it checks value of display fu', () => {
        const numberInputEqual = 3;

        const checkNumberInputEqualThree = fubar.displayFuOrReturnNumber(numberInputEqual);
        expect(checkNumberInputEqualThree).toBe('fuuu');

        const numberInputNotEqual = 5;

        const checkNumberInputNotEualThree = fubar.displayFuOrReturnNumber(numberInputNotEqual);
        expect(checkNumberInputNotEualThree).toBe(numberInputNotEqual);  
    });
});