let a = 10;
let b = 20;

console.log(a+b,++a, ++b,"a*b", a*b);
console.log(a+=4, a==b)

let c = 1;
if(c>=10){
    console.log("c=", c)
}else{
    console.log("c is small")
}

let num = 10;

if(num%2 == 0){
    console.log(num, "is even");
}else{
    console.log(num, ' is odd')
}

//ternary operator

let age = 16;
let result = age >= 18 ? console.log("adult") : console.log("not adult");

let number = prompt("Enter a Number")
if (typeof(number) == 'number'){
if(number%5 == 0){
    console.log("Number is divisible by 5")
}else{
    console.log("number is not divisible by 5")
}
}else{
    console.log("Please Enter Numbers only")
}