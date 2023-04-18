// console.log("all around the world".charAt(7).toUpperCase())

// let firstName = "leon" 
// firstName = "batman"
// constant doesnt change
// const surname = "wayne"
// let num1 = 10
// let num2 = 5

// num1 = num1 + 2
// num1 += 2
// console.log(num1)

// concatination
// let firstName = "leon"
// let favouriteDrink = "latte"

// template literals
// console.log(`hello, my name is ${firstName}, and my favourite drink is ${favouriteDrink}`)

let today = new Date()
let birthday = new Date()
birthday.setDate(0)
birthday.setMonth(9)
let time = birthday.getTime() - today.getTime() 
console.log(time / (1000 * 60 * 60 * 24))
