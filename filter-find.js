const numbers = [2, 34, 53, 53, 34, 22, 63, 3, 5, 75];
const bigNumbers = numbers.filter(number => number > 30);
const smallNumbers = numbers.filter(number => number < 30)
// console.log(bigNumbers, smallNumbers)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'computer', price: 50000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'Black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'woater glass', price: 20, color: 'white' },
]

const expensive = products.filter(product => product.price > 1000)

const balcks = products.filter(product => product.color.toLowerCase() == 'black')
// console.log(balcks)

const whiteItems = products.find(product => product.color.toLowerCase() == 'black')
console.log(whiteItems);