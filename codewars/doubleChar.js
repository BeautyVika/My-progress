function doubleChar(str) {
    let value = ''
    value = str.split('').map(el => value + el+el).join('')
    return value
  }
  doubleChar('String')