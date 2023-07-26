function solution(str, ending){
    if(ending === '') return true
    let value = str.includes(ending)
    let endArr = ending.split('').length
    let newStr  = str.split('').splice(-endArr).join('')

    if(value && newStr === ending){return true}
    else{return false}
}