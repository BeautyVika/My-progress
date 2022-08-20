function abbrevName(name){
    let firstName = ''
    let lastName =  ''
    let arr =  name.split(' ')
    firstName = arr[0].split('')[0].toUpperCase()
    lastName = arr[1].split('')[0].toUpperCase()
    return firstName + '.' + lastName 
   }