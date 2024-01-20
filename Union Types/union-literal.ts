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

/**
 * Literal Types
 * A variable with literal type can only have one specified value and no other
 */

let color: 'red' | 'green' | 'orange'
// color="yellow"; error
color = 'red'
console.log(color)

let click: 'click'
// click = "dblclick" error
click = 'click'
console.log(click)

let auth: 'secretPassword' = 'secretPassword'
console.log(auth)

/***
 * Tuples
 *It works like an array
 * Number of element is fixed
 * it has predefined type for each index
 */

let array: [number, string, boolean]

array = [5, 'Hello', true]
console.log(array)
