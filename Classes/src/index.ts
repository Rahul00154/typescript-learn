class PersonInfo {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const personInfo = new PersonInfo('Rahul', 18)

console.log(personInfo)

/**
 * Access Modifier
 * public => access outside the class
 * private => not access outside the class and not share property with their children
 * protected => not access outside the class but share properties with their children
 */

class UserData {
  private first: string
  public last: string
  private age: number

  constructor(first: string, last: string, age: number) {
    this.first = first
    this.last = last
    this.age = age
  }
  getName = (): string => {
    return `${this.first} and ${this.last}`
  }
}

// calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods

class Rahul extends UserData {
  constructor(first: string, last: string, age: number) {
    super(first, last, age)
  }
}

const rahulInfo = new Rahul('Rahul', 'Anand', 18)
console.log(rahulInfo)

const userData = new UserData('Rahul', 'Anand', 12)
// console.log(userData.first)
console.log(userData.getName())

class Player {
  // public height: number
  // private weight: number
  public readonly id: string

  constructor(
    public height: number,
    private weight: number,
    protected power: number,
  ) {
    this.id = String(Math.random() * 100)
    // this.height = height
    // this.weight = weight
  }

  //getter/setter

  get getHeight(): number {
    return this.height
  }

  set setHeight(val: number) {
    this.height = val
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
const abhii = new Player(100, 100, 10)
console.log(abhii.getHeight)
abhii.setHeight = 500
console.log(abhii.height)

console.log(abhii.id)

/***
 * Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.
 */

interface Person {
  firstName: string
  lastName: string
  age: number
}

const examplePerson: Person = {
  firstName: 'Rahul',
  lastName: 'Anand',
  age: 20,
}

console.log(examplePerson.firstName, examplePerson.lastName, examplePerson.age)

//interfaces for function

interface MathOperation {
  (x: number, y: number): number
}

const add: MathOperation = (a, b) => a + b
const sub: MathOperation = (a, b) => a - b

console.log(add(1, 4))
console.log(sub(5, 3))

//2

interface User {
  firstName: string
  lastName: string
}

function getUser(user: User): string {
  return `${user.firstName} and ${user.lastName}`
}

const john = {
  firstName: 'Rahul',
  lastName: 'Anand',
}

console.log(getUser(john))

interface Song {
  songName: string
  singerName: string

  printSongInfo(songName: string, singerName: string): string
}

const song1: Song = {
  songName: 'Naturals',
  singerName: 'Imagine Dragons',
  printSongInfo: (songName, singerName) => {
    return `SongName: ${songName} SingerName: ${singerName} `
  },
}

console.log(song1.printSongInfo('Naturals', 'Imagine Dragons'))

//We can borrow parent interface properties in children properties using extends

interface MovieDetails {
  readonly name: string
  rating: number
  printMovieInfo(name: string, rating: number): string | number
}

interface MovieGenra extends MovieDetails {
  genra: string
}

const movie1: MovieGenra = {
  name: 'starWar',
  rating: 7.8,
  genra: 'Action',
  printMovieInfo(name: string, rating: number): string | number {
    return `the moviename is ${name}  and rating is ${rating}`
  },
}

console.log(movie1.printMovieInfo('star war', 7.8))

//Using Interfaces for classes
interface Vehicle {
  start(): void
  stop(): void
}

class Car {
  start(): void {
    console.log('Car is starting . . ')
  }
  stop(): void {
    console.log('Car is stopped')
  }
}

const myCar = new Car()
myCar.start()
myCar.stop()

//Declaration Mergin => interface extension
interface Car {
  brand: string
  start(): void
}

//interface extension
interface Car {
  model: string
  stop(): void
}

const myCarr = {
  brand: 'Audi',
  model: 'Q8',
  start() {
    console.log('Audi Car is starting')
  },
  stop() {
    console.log('Audi car is stopped')
  },
}

myCarr.start()
myCarr.stop()
