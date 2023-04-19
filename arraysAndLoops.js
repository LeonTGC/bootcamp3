// Arrays
// let favSongs = [
//     "blur - song2",
//     "eiffel65 - blue da ba dee da ba dai",
//     "spice girls - wannabe"
// ]
// select an item in a specific position
// favSongs[2] = "black sabbath - iron man"

// methods to add at the end and remove the last item
// favSongs.push("daft punk - derezzed")
// favSongs.pop()

// MAP Method
// let nums = [ 1, 2, 3, 4, 5]

// let result = nums.map((num) => num * 2)
// console.log(result)

let books = [
    "36 streets",
    "ready player one",
    "lifelik3"
]

// SHIFT Method
// console.log(books.shift()) // shows the removed item
// console.log(books) // shows items left

// UNSHIFT Method
// books.unshift("the hobbit", "world war z")
// console.log(books)

// SLICE Method
// let removedBooks = books.slice(0 , 2)
// console.log(removedBooks)

// SPLICE Method
// books.splice(2, 1, "ready player two")
// console.log(books) 


// LOOPS !!!!!!!!!!!

// let favMovies = [
//     "lord of the rings - the fellowship",
//     "lord of the rings - two towers",
//     "blade runner"
// ]

// for (let i = 0; i < favMovies.length; i++){
//     console.log(favMovies[i], i)
// }


// let nums = []

// for (let i = 0; i < 6; i++){
//     nums.push(Math.ceil(Math.random() * 50))
// }
// console.log(nums)

// let divisbleByTwo = []

// for (let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         divisbleByTwo.push(i)
//     }
// }
// console.log(divisbleByTwo)

// let age = 15

// while (age < 18) {
//     console.log(`you're a child, you are ${age}`)
//     age++
// }
// console.log("you are now an adult")

let cards = ["spade", "heart", "clubs", "diamond"]
let currentCard = "clubs"

while (currentCard !== "spade"){
    console.log(`card selected ${currentCard}`)
    currentCard = cards[Math.floor(Math.random() * 4)]
}
console.log(currentCard)
