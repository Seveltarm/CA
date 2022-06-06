class Fubar {
    fubar(a) { 
        return a;
    }
    displayFuOrReturnNumber(number) {
        if (number === 3) {
            return 'fuuu';
        }
        return number;
    }
}

if (typeof module !== 'undefined') { module.exports = { Fubar } };