/**
 * type varName{annotation/Type}={property:value}
 */

const person: { firstName: string; lastName: string; age: number } = {
  firstName: 'Rahul',
  lastName: 'Anand',
  age: 12,
}

console.log(person)

//object as function return value
//it is known as factory function:
//function return a new object is known as factory function
function printUser(): { name: string; age: number; location: string } {
  return {
    name: 'Rahul',
    age: 24,
    location: 'Mohali',
  }
}

const user = printUser()
console.log(user.name)

/***
 * Type Alias
   => It allow us to create custom type that refers to another type and give more meaningful or descriptive names
 */

type Person = {
  name: string
  age: number
}

function printPerson(person: Person) {
  console.log(`Name:${person.name} Age:${person.age}`)
}

const myPerson: Person = {
  name: 'Rahul',
  age: 18,
}

printPerson(myPerson)

type User = {
  name: string
  age: number
  location: string
}

const printUserInfo = (user: User) => {
  return `Name:${user.name} age:${user.age} location:${user.location}`
}

const userInfo = printUserInfo({ name: 'Rahul', age: 12, location: 'Mohali' })

console.log(userInfo)

/***
 * Optional Property
  =>We can make a certain property optional in an object type by adding {?} marks after the property name
 */

type Animal = {
  name: string
  breed?: string // it make breed property optional
}

const animal: Animal = {
  name: 'Dog',
}

console.log(animal.name)

type Person1 = {
  name: string
  age: number
  readonly email?: string
}

const alice: Person1 = { name: 'Alice', age: 18 }
const bob: Person1 = { name: 'Bob', age: 19, email: 'duffer.rdx@gmail.com' }

// bob.email = "bob@gmail.com" cannot reassign value to readonly property

console.log(alice, bob)

/**
 * Intersection Types
   =>It creates a new type by combining multiple types.
   it has all feature of the existing types
   type typeB = typeA & typeB
 */

type Person2 = {
  name: string
  age: number
}

type Employee = {
  id: number
  title: string
}

type PersonAndEmploye = Person2 & Employee

const office: PersonAndEmploye = {
  name: 'Rahul',
  age: 18,
  id: 12012,
  title: 'Engineer',
}

console.log(office)

/**
 *Union Type
  =>It allows us to store a value of one or several types in a variable
  let myVar: number|string //we use {|} notation

  function foo(params:string|string[]){}
 */

const password: number | string = 20
console.log(password)

type UserDetail = {
  firstName: string
  lastName: string
  age: number
}

type AccountDetail = {
  email: string
  password: string
}

const userData: UserDetail | AccountDetail = {
  firstName: 'Rahul',
  lastName: 'Anand',
  age: 20,
  email: 'rahul@mail.com',
}
console.log(userData)

const collection: (number | string)[] = [1, 2, 4, 'rahul', 'abhi']
console.log(collection)
