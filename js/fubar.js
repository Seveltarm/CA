class Fubar {
    constructor() {
        this.returnString = '';
        this.fizzBuzzArray = [
            '',
            this.isFizz,
            this.isBuzz,
            this.returnNumber
        ];
    }    

    checkNumberReturnValue(number) {
        this.fizzBuzzArray.reduce((accumulator, arrayElement) => {
            const checkElementValue = arrayElement(number);
            if (checkElementValue) {
                this.returnString += checkElementValue;
            }
        });
        return this.returnString;
    }
    
    isFizz(number) {
        if (!(number % 3)) {
            return 'Fizz';
        } 
    }

    isBuzz(number) {
        if (!(number % 5)) {
            return 'Buzz';
        }
    }

    returnNumber = (number) => {
        if (!this.returnString) {
            return number;
        }    
    }
}

if (typeof module !== 'undefined') { module.exports = { Fubar } };