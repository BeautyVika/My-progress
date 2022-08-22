function generateShape(integer){
    let str = '+'
    let a = str.repeat(integer)
    return a.split('').map(el => a).join('\n')
    
}