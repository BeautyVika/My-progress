function switcheroo(x){
    return x.split('').map(el=> {
      if (el === 'a') { return el ='b'}
      if (el === 'b') { return el ='a'}
      return el
    }).join('')
   }