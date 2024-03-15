// function myFunction(){
//     console.log("Function 1");
// }

// function sum(a,b){
//     return a+b;
// }

// addition = sum(10,20);
// console.log(addition);

// const arrowMul = (x,y) => {
//     return x*y;
// }

// mul = arrowMul(2,12);
// console.log(mul);

// function vowels(str1){
//     listVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//     for(let letter of str1){
//         // console.log(`Letter ${letter}`);
//         for(let letter2 of listVowels){
//             if(letter === letter2){
//                 console.log(letter);
//             }
//         }
//     }
// }

// str1 = prompt("Enter String")
// vowels(str1)




// foreach
// let arr = [1,2,3,4,5,6]
// let calSquare = function square(num){
//     console.log(num**2);
//     return num**2
// }
// arr.forEach(calSquare)

// let str = ['a', 'b', 'c', 'd']
// str.forEach((a) => {
//     console.log(a.toUpperCase());
// })


// //map
// let newarr = arr.map(calSquare)
// console.log(newarr);

// //filter
// let filterarr = arr.filter((val) => {
//     if(val % 2 === 0){
//         return val;
//     }
    
// })

// console.log(filterarr);


// //reduce large number
// let reducearr = arr.reduce((res, cur) =>{
//     return res > cur ? res : cur;
// })

// console.log(reducearr);

let marks = [80, 90, 95, 70, 98, 62]
let toppers = marks.filter((num) =>{
    return num >= 90;
})

console.log(toppers);