function likeOrDislike(buttons) {
    let value = 'Nothing'
    buttons.map(el => {
      if(el === value) {value = 'Nothing'}
      else (value = el)
    })
    return value
  }