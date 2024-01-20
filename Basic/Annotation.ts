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

/**
 * FUNCTION PARAMETERS ANNOTATIONS
   ->It is used to specify the expected types of parameters that a function takes.

   => When we not provide type in parameter default it is of any type or type maybe inferred from usage

   => Typescript will give you warning id you provide less or more arguements than you you specify in your parameters area
 */

//Regular function

function addOne(num: number) {
  return num + 1
}

const result = addOne(3)
console.log(result)

//Arrow function

const double = (x: number, y: number) => {
  return x * y
}

const res = double(4, 5)
//double(4) error
console.log(res)

//Default Parameters

function greet(person: string = 'Anonymous') {
  return person
}

const ress = greet()

console.log(ress)

/*
 * Return Annotation(Regular)
  function functionname(param:type):return type{
    return smthing
  }
  *Arrow function
  const arrow = (param:type):return type => return something
*/

//Regular function
function double1(x: number): number {
  return x * x
}

const res1 = double1(4)
console.log(res1)

const arrow = (x: number): number => x * x

const res2 = arrow(5)
console.log(res2)
