function squareSum(numbers){
    if (numbers.length < 1){return 0}
     return numbers.map(el => Math.pow(el, 2)).reduce((a, b) => a+b)
  }