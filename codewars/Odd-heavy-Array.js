//https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript

let array = [11,4,9,2,8]
let array2 = [11,4,9,2,3,10]

function isOddHeavy(n){

    let oddElementsArray = n.filter( element => {
        if (Math.abs(element % 2) === 1) {
            return true
        } else {
            return false
        }
    })

    let evenElementsArray = n.filter( element => {
        if (Math.abs(element % 2) === 0) {
            return true
        } else {
            return false
        }
    })

    if (oddElementsArray.length === 0) {
        return false
    }

    return evenElementsArray.reduce( (isOddHeavyCheck, element, index, arrayN) => {
        for (let oddElementIndex = 0; oddElementIndex < oddElementsArray.length; oddElementIndex++) {
            if (isOddHeavyCheck === false) {
                isOddHeavyCheck = false
            } else if (oddElementsArray[oddElementIndex] > element) {
                isOddHeavyCheck = true
            } else {
                isOddHeavyCheck = false
            }
        }
        return isOddHeavyCheck
    }, true)
}
console.log(isOddHeavy(array))
console.log(isOddHeavy(array2))