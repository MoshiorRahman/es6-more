const friends = ['tom hanks', 'tom crouise', 'tom brady', 'tom solaiman'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'computer', price: 50000, color: 'silvr' },
    { name: 'smart watch', price: 3000, color: 'Black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'woater glass', price: 20, color: 'white' },
]
const productNames = products.map(product => product.name)
console.log('product names:', productNames);

const productPrices = products.map(product => product.price)
console.log('product prices:', productPrices);

products.map(product => console.log(product))