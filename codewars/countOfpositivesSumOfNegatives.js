function countPositivesSumNegatives(input) {
    let numberPositive = 0;
    let sumNegative = 0
  if (!input){return []}
    if (input.length === 0){return []}
    input.map(el => {
      if(el > 0){
        numberPositive++
          }else {
        sumNegative += el
      }
    })
    return [numberPositive, sumNegative]
  }