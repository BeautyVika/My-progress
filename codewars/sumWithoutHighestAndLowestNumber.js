function sumArray(array){
    let checkA = false
    let checkB = false
    if (!array) {return 0}
    if (array.length < 2) {return 0}
    let a = Math.min(...array)
    let b = Math.max(...array)
    let arr = array.map(el => {
        if(el === a && !checkA){
            checkA = true
            return 0
        }
        if(el === b && !checkB) {
            checkB = true
            return 0
        }
        return el
    })
    return arr.reduce( (c, d) => c+d )
  };