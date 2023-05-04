//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

let a = 153
let b =  1652

function narcissistic(value) {
    let arrayOfNumbers = value.toString().split('')
    let degree = arrayOfNumbers.length
    let doubleArray = arrayOfNumbers.map(num => Math.pow(+num, degree))
    let sumNumber = doubleArray.reduce((acc, el) => acc + el)
    return sumNumber === value
}

console.log(narcissistic(a))
console.log(narcissistic(b))