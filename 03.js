let numbers = [ -21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22 ];

let positiveNumbers = numbers.filter(
    function (num) {
        if (num > 0) {
            return true;
        }
    }
);
console.log(positiveNumbers)
