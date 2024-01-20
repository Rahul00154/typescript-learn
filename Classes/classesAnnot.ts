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
