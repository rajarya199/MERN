const imgArray=['a.jfif','b.png','c.jfif','d.jfif','e.png','f.jpg']
const arrayLength=imgArray.length
let i=0
let set=setInterval(()=>{
    i++;
    i=i%arrayLength//6%6 =0
    document.querySelector('img').src=`./images/${imgArray[i]}`

},3000)

const next=()=>{
    i++;
    i=i%arrayLength
    document.querySelector('img').src=`./images/${imgArray[i]}`
}

const prev=()=>{
    i--;
    if(i<0){
        i=arrayLength-1;
    }
    document.querySelector('img').src=`./images/${imgArray[i]}`
}
const stops=()=>{
    clearInterval(set)
}
const starts=()=>{
    set=setInterval(()=>{
        i++;
        i=i%arrayLength//6%6 =0
        document.querySelector('img').src=`./images/${imgArray[i]}`
    
    },3000)
}