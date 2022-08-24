function toAcronym(inp){
    let newStr = ''
    inp.split(' ').map(el =>{
     newStr= newStr + el.split('')[0].toUpperCase()
    })
    return newStr
  }