//https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}
