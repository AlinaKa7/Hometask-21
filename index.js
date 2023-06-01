let baseNumber = 5;
let degree = 4;

// let baseNumber = parseInt(prompt('Please, enter a base number').replaceAll(' ', ''));;
// let exponentNumber = parseInt(prompt('Please, enter a degree').replaceAll(' ', ''));;

function powCalc(baseNumber){
    let sum = 0;
    
    if (baseNumber === 1) {
        return baseNumber;
    } else {
        sum = Math.pow(baseNumber,degree);
        return sum;
    }
}
let result = powCalc(baseNumber,degree);

console.log(result); 

