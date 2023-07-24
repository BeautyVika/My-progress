function strCount(obj){
    let count = 0;

    for (let val in obj){
        if(typeof obj[val] === 'object'){
            count += strCount(obj[val]);
        }
        if (typeof obj[val] === 'string'){
            count++;
        }
    }
    return count;
}
console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4, 'hello'],
    fifth:  null
}))