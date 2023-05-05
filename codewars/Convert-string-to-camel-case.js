//https://www.codewars.com/kata/517abf86da9663f1d2000003
function toCamelCase(str){
    let newStr = "";
    if(str){
        let wordArr = str.split(/[-_]/g);
        console.log(wordArr)
        for (let i in wordArr){
            if(i > 0){
                newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
                console.log(newStr)
            }else{
                newStr += wordArr[i]
            }
        }
    }else{
        return newStr
    }
    return newStr;
}
console.log(toCamelCase("the-stealth-warrior"))