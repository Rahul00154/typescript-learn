"use strict";
class PersonInfo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const personInfo = new PersonInfo('Rahul', 18);
console.log(personInfo);
/**
 * Access Modifier
 * public => access outside the class
 * private => not access outside the class and not share property with their children
 * protected => not access outside the class but share properties with their children
 */
class UserData {
    constructor(first, last, age) {
        this.getName = () => {
            return `${this.first} and ${this.last}`;
        };
        this.first = first;
        this.last = last;
        this.age = age;
    }
}
// calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods
class Rahul extends UserData {
    constructor(first, last, age) {
        super(first, last, age);
    }
}
const rahulInfo = new Rahul('Rahul', 'Anand', 18);
console.log(rahulInfo);
const userData = new UserData('Rahul', 'Anand', 12);
// console.log(userData.first)
console.log(userData.getName());
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
        // this.height = height
        // this.weight = weight
    }
    //getter/setter
    get getHeight() {
        return this.height;
    }
    set setHeight(val) {
        this.height = val;
    }
}
// class Player2 extends Player {
//   special: boolean
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power)
//     this.special = special
//   }
//   getPower = (): number => {
//     return this.power
//   }
// }
// const rahul = new Player2(20, 20, 10, true)
// console.log(rahul.special)
// console.log(rahul.getPower()) //inherit the parent properties
const abhii = new Player(100, 100, 10);
console.log(abhii.getHeight);
abhii.setHeight = 500;
console.log(abhii.height);
console.log(abhii.id);
const examplePerson = {
    firstName: 'Rahul',
    lastName: 'Anand',
    age: 20,
};
console.log(examplePerson.firstName, examplePerson.lastName, examplePerson.age);
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
console.log(add(1, 4));
console.log(sub(5, 3));
function getUser(user) {
    return `${user.firstName} and ${user.lastName}`;
}
const john = {
    firstName: 'Rahul',
    lastName: 'Anand',
};
console.log(getUser(john));
const song1 = {
    songName: 'Naturals',
    singerName: 'Imagine Dragons',
    printSongInfo: (songName, singerName) => {
        return `SongName: ${songName} SingerName: ${singerName} `;
    },
};
console.log(song1.printSongInfo('Naturals', 'Imagine Dragons'));
const movie1 = {
    name: 'starWar',
    rating: 7.8,
    genra: 'Action',
    printMovieInfo(name, rating) {
        return `the moviename is ${name}  and rating is ${rating}`;
    },
};
console.log(movie1.printMovieInfo('star war', 7.8));
class Car {
    start() {
        console.log('Car is starting . . ');
    }
    stop() {
        console.log('Car is stopped');
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();
const myCarr = {
    brand: 'Audi',
    model: 'Q8',
    start() {
        console.log('Audi Car is starting');
    },
    stop() {
        console.log('Audi car is stopped');
    },
};
myCarr.start();
myCarr.stop();
//Type Asssertion := it is useful in the scenario of accessing the dom element because Typescript not maintain the tract of html .so hum type dete hn like we see here in example
//yha button html element hai nh toh null so we provide not null to it so that it always points to htmlElement
// const button = document.getElementById('btn')! //this is the way to tell it is not null
// const button = <HTMLElement>document.getElementById('btn')
// const button = document.getElementById('btn') as HTMLElement
// button?.onclick
// const img = document.getElementById("myimg")as HTMLElement //this way we cannot access the property of image tag so typescript gives another way to access it
// const img = document.getElementById('myimg') as HTMLImageElement //This way we can access the property
// const img = <HTMLImageElement>document.querySelector("img") //this is another way to select html element
const form = document.getElementById('myForm');
const myInput = document.querySelector('#myForm > input');
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    const h2 = document.createElement('h2');
    const body = document.querySelector('body');
    h2.textContent = String(value + 20);
    console.log(value);
    console.log(typeof value);
    body.append(h2);
};
const myObj = {
    name: 'Rahul',
    email: 'rahul@mail.com',
};
// const key = 'name' when we use this with let so we can change it to any key so here we use keyof in type assertion
let key = 'name';
console.log(myObj[key]);
// myObj[key]
const getName = () => {
    return myObj['name'];
};
const getEmail = () => {
    return myObj['email'];
};
const getData = (key) => {
    return myObj[key];
};
getData('name');
