class Fubar {
    constructor() {
        this.returnString = '';
        this.fizzBuzzArray = [
            this.isFizz,
            this.isBuzz,
            this.returnNumber
        ];
    }    

    checkNumberReturnValue(number) {
        this.fizzBuzzArray.reduce((accumulator, arrayElement) => {
            this.returnString += accumulator(number);
            return arrayElement;
        });
        return this.returnString;
    }
    
    isFizz(number) {
        if (!(number % 3)) {
            return 'Fizz';
        }
        return '';
    }

    isBuzz(number) {
        if (!(number % 5)) {
            return 'Buzz';
        }
        return '';
    }

    returnNumber = (number) => {
        if (!this.returnString) {
            return number;
        }
        return '';
    }
}

if (typeof module !== 'undefined') { module.exports = { Fubar } };