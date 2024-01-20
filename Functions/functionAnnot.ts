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

/**
 * VOID
   =>Void is a type that represents the absence of any value. It is often used as the return type for the function that do not return a value
 */

function printMessage(message: string): void {
  console.log(`This is ${message}`)

  // return message; error
}

printMessage('Hello Babe How are you?')

/***
 * Never
   -> It is used to indicate that a function will not return anything or that a varible can never have a value. The never type is useful for indication that certain code paths should never be reached or that centain values are impossible.
   It can help catch errors at compile-time instead of run time.

   *It is useful in three cases
     * A function that throws an error
     * A function that has an infinite loop
     * A variable that can never have a value.
 */

// function throwError(msg: string): never {
//   throw new Error(msg)
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// let x: never

// function neverReturns(): never {
//   while (true) {}
// }

// x = neverReturns()
