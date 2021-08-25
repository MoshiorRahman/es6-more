const fish = { id: 23, name: 'king Hilsha', price: 9000, phone: '012443', address: 'Chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const name = fish.name;
// const id = fish.id;

const { phone, price, id, name } = fish;

console.log(phone, price)
console.log(phone, price)
console.log(phone, price)
console.log(phone, name)
console.log(phone, name)
console.log(phone, id)

const company = {
    name: 'GP',
    ceo: { id: 23, name: 'Ajmol', food: 'fuchka' },
    web: {
        work: 'website ddevelopment',
        employ: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'javascript',
            fourth: 'react'
        }
    }
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { third, fourth } = company.web.tech;
const { food } = company.ceo;
console.log(work + ',' + framework + ',' + food + 'tech part = ' + third + ',' + fourth);