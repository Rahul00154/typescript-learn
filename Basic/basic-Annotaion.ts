//Annotation:- It is used to specify the data type of variable,Parameter, function return value and other types of values.
//it helps to catch error in development.

/***
 * STRING
 */
// const mystr: type = value;

const myName: string = 'Rahul Anand'
console.log(myName)

// const myNamee:string = 12; error

/***
 * Number
 */
const favNum: number = 8
console.log(favNum)

//we can not assign string to a number type variable

/*
 *BOOLEAN
 */

const isHard: boolean = false
console.log(isHard)

/**
 *TYPE INFERENCE
    - It is a feature in typescript that allow the compiler to automatically determine the type of a variable based on its value.
 */

//Here we inferring the types
//agr phle se koi bhi variable k andar koi aur data type ki value hai th usme hmlg other data type ki value assign nh kar skte

let tech = 'TypeScript'

// tech = 12 error

const num = 8
const isOpen = false

console.log(tech, num, isOpen)

/**
 * ANY TYPE
    -> when a variable is annoted with the any type, Typescript will allow it to have any value and disable all type checking for that variable and its properties

    => it is useful in some certain situations. Overuse of any can lead to untyped code and make it harder to catch type-related error during development.

 */

let color: any = 'crimson'
color = 20
color = true
// color()
console.log(color)
