function getCard() {
    let arr=[];
    for (let i=0; i<5; ++i)
        arr.push('B'+(Math.random()*14+1));
    for (let i=0; i<5; ++i)
        arr.push('I'+(Math.random()*14+16));
    for (let i=0; i<4; ++i)
        arr.push('N'+(Math.random()*14+31));
    for (let i=0; i<5; ++i)
        arr.push('G'+(Math.random()*14+46));
    for (let i=0; i<5; ++i)
        arr.push('O'+(Math.random()*14+61));
    return arr;
}