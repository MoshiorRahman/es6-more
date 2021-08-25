class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember {

    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare {
    name;
    designation = 'Student care web Deb';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(Student) {
        console.log(this.name, 'Build a routine for', Student);
    }
}
class NaptuneDev {
    name;
    designation = 'Student care web Deb';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}



const amir = new Support('Amir Khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
const sahruk = new Support('Sahruk Khan', 'Mumbai');

const aliya = new StudentCare('Alia Bhatt', 'Mumbai');

const ranga = new NaptuneDev('Ranga');

console.log(ranga);
// console.log(salman);