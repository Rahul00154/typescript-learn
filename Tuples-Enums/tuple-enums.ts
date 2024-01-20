/***
 * Tuples
 *It works like an array
 * Number of element is fixed
 * it has predefined type for each index
 */

let array: [number, string, boolean]

array = [5, 'Hello', true]
console.log(array)

let skills: [number, string] = [5, 'Javascript']
console.log(skills)

/**
 * Enums
 * It is a group of named constant values
   enum name{cons1,cons2,....}
 */

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function isSummer(months: Months) {
  let isSummer: boolean
  switch (months) {
    case Months.June:
    case Months.July:
    case Months.August:
      isSummer = true
      break
    default:
      isSummer = false
  }
  return isSummer
}

console.log(isSummer(Months.June))

enum weatherConditions {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

const currentWeather = weatherConditions.Snowy
console.log(`current weather is ${currentWeather}`)
