const  array = [1,2,3,4,5,6]
//a

let dobroDoArray = [];
array.forEach((number, index, array)=>{
    dobroDoArray.push(number * 2);
})
console.log (dobroDoArray);

//(6) [2, 4, 6, 8, 10, 12]
//length: 6

//b

let triploDoArray = [];
array.forEach((number, index, array)=>{
    triploDoArray.push("" +number * 3);
})
console.log(triploDoArray);
//(6) [3, 6, 9, 12, 15, 18]
//length: 6

//c

let parImpar = [];

array.forEach((number, index, array)=>{
    
    if(number % 2 === 0){
        number = number + " é par" 
    }else{
        number = number + " é ímpar"
    }

    parImpar.push(number);
});

console.log(parImpar);
//0: "1 é ímpar"
//1: "2 é par"
//2: "3 é ímpar"
//3: "4 é par"
//4: "5 é ímpar"
//5: "6 é par"
length: 6