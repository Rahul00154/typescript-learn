/**
 * Array are a type of object that can store multiple value of the same data type.

 * we create array using two types
  * using the square bracket notation

  * Using the generic Array<type> notation to indicate an array of specific type
  =>const array:arraytype[] = [elements];
  or const array:Array<arrayType> = [elements]
 */

const numbers: number[] = [1, 2, 3, 4]
console.log(numbers)

const str: string[] = ['one', 'two', 'three']
console.log(str)

const names: Array<string> = ['Rahul', 'Abhishek', 'Charlie']
console.log(names)

const items: string[] = []
items.push('Abhi')
// items.push(12) error

/**
 * 2D Array (Multidimensional array)
 * const matrix:arraytype[][]=[ [elements],[elements] ];
 */

const multiDi: number[][] = [[1, 2, 3, 4, 5]]
const triple: string[][][] = [
  [['rahul', 'ankit', 'prashant', 'abhi', 'sachin']],
]

console.log(multiDi)
console.log(triple)
