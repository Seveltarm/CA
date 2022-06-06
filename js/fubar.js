class Fubar {
    fubar(a) { 
        return a;
    }
    checkNumberReturnValue(number) {
        const fizzBuzzArray = [
            this.isFizzBuzz,
            this.isFizz,
            this.isBuzz,
            this.returnNumber
        ]
       
        for (const functionFromArray of fizzBuzzArray) {
            const fromArray = functionFromArray(number);
            if (fromArray) {
                return fromArray;
            }    
        }
    }

    isFizzBuzz(number) {
        if (!(number % 3) && !(number % 5)) {
            return 'Fizz Buzz';
        }
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

    returnNumber(number) {
        return number;
    }
}

if (typeof module !== 'undefined') { module.exports = { Fubar } };