// 1.

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    residents = []

    addResidents(resident) {
        this.residents.push(resident)
        return this;
    }
}

class House {
    flats = []

    constructor(maxFlats) {
        this.maxFlats = maxFlats;
    }

    set maxFlats(maxFlats) {
        this._maxFlats = maxFlats;
    }

    addFlats(flat) {
        if (this.flats.length < this._maxFlats) {
            this.flats.push(flat);

            return this;
        } else {
            console.log('THe house is full.')
            return this;
        }
    }
}

const person1 = new Person('1', 'man')
const person2 = new Person('2', 'woman')
const person3 = new Person('3', 'man')
const person4 = new Person('4', 'woman')
const person5 = new Person('5', 'man')
const person6 = new Person('6', 'woman')
const person7 = new Person('7', 'man')
const person8 = new Person('8', 'woman')

const flat1 = new Flat().addResidents(person1).addResidents(person2).addResidents(person3)
const flat2 = new Flat().addResidents(person4).addResidents(person5).addResidents(person6)
const flat3 = new Flat().addResidents(person7).addResidents(person8)

const house = new House(2).addFlats(flat1).addFlats(flat2).addFlats(flat3)

console.log(house)

// 2.

// function Person(name, sex) {
//     this.name = name;
//     this.sex = sex;
// }
//
// function Flat() {
//     this.residents = [];
//
//     Flat.prototype.addResident = function(resident) {
//         this.residents.push(resident);
//         return this;
//     }
// }
//
// function House(maxFlats) {
//     this.maxFlats = maxFlats;
//     this.flats = [];
//
//     House.prototype.addFlat = function(flat) {
//         if (this.flats.length < this.maxFlats) {
//             this.flats.push(flat);
//             return this;
//         } else {
//             console.log('THe house is full.')
//             return this;
//         }
//     }
// }
//
// const person1 = new Person('1', 'man')
// const person2 = new Person('2', 'woman')
// const person3 = new Person('3', 'man')
// const person4 = new Person('4', 'woman')
// const person5 = new Person('5', 'man')
// const person6 = new Person('6', 'woman')
// const person7 = new Person('7', 'man')
// const person8 = new Person('8', 'woman')
//
// const flat1 = new Flat().addResident(person1).addResident(person2).addResident(person3)
// const flat2 = new Flat().addResident(person4).addResident(person5).addResident(person6)
// const flat3 = new Flat().addResident(person7).addResident(person8)
//
// const house = new House(3).addFlat(flat1).addFlat(flat2).addFlat(flat3)
//
// console.log(house)