//declare variable based on the name of an object property
const myObject = { x: 2, y: 40, a: 23, b: 64 };
const { x, b } = myObject;
// console.log(x, b)

//destructuring array
const [p, q] = [34, 35, 36, 74]
// console.log(p, q)

const [best, faltu] = ['momotaj', 'poroshi']
// console.log(best, faltu)

const { sky, color, money } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 }
// console.log(sky, color, money)


//chining
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
console.log(company?.web?.tech?.third);
console.log(company?.back?.tech.third)