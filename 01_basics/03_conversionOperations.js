let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
// true = 1 ( false = 0)
// 1 => true, 0 => false 
// "" => false , you will get false when u use an empty string 
// "Vivek" => true, when u add a value in the string, you will get true 

// u can convert a number into a string too 

let someNumber = 55
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



