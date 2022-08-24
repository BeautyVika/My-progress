function findShort(s){
  let minValue = s.length
  s.split(' ').map(el => {
    if (el.length < minValue){ minValue = el.length }
  })
  return minValue 
}