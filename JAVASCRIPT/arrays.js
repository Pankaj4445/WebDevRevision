console.log("Arrays".toUpperCase())

let marks = [12,23,52,69,89,99]
let sum = 0
for(let i of marks){
    sum += i;
    
}

console.log(`Average Marks= ${sum/marks.length}`);

let prices = [250,300,400,500,600]
console.log(prices)
for(i=0; i<prices.length; i++){
    prices[i] = prices[i]-(prices[i]*10/100);
}
console.log(prices)


