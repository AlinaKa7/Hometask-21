let baseNumber = 5;
let exponentNumber = 4;

// let baseNumber = parseInt(prompt('Please, enter a base number').replaceAll(' ', ''));;
// let exponentNumber = parseInt(prompt('Please, enter an exponent number').replaceAll(' ', ''));;

function powCalc(baseNumber){
    let sum = 0;
    
    if (baseNumber === 1) {
        return baseNumber;
    } else {
        sum = Math.pow(baseNumber,exponentNumber);
        return sum;
    }
}
let result = powCalc(baseNumber,exponentNumber);

console.log(result); 

