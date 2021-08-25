class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const amir = new Support('Amir Khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
const sahruk = new Support('Sahruk Khan', 'Mumbai');
amir.startSession();
salman.startSession();
sahruk.startSession();

console.log(amir, salman, sahruk);
// console.log(salman);