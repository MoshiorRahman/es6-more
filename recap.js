// 1. let and const
const hubby = 'Omor Sani'
let phone = 'iphone 12'
phone = 'samsung galaxy s17'

// 2. template string
const myNotes = `I am ${hubby} not Mojnu. i have a ${phone}`
// console.log(myNotes)

// 3. defult parameter
// 4. spread or three dots(...)
function maxNumber(array = []) {
    const max = Math.max(...array)
    return max
}
// console.log(maxNumber())

// 5. arrow function
const square = x => x * x;
console.log(square(5));