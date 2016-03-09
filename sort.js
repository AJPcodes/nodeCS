'use strict'

const _ = require('lodash')
const arr = _.range(1,10)
const chalk = require('chalk')
const util = require('util')


let shuffled = _.shuffle(arr)
let loop1 = 0
let loop2 = 0


const swap = (array, index1, index2) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

}

//basic bubble sort
function bubbleSort1 (array) {

  let sorted = false

  while (!sorted) {
    loop1++
    console.log(chalk.red(util.inspect(array)), loop1)
    sorted = true

    for (let i = 0; i < array.length -1; i++) {
      let j = i + 1

      if (array[i] > array[j]) {
        swap(array, i, j)
        sorted = false
      }

    }
  }
  return array;
}

function bubbleSort2 (array) {

  for (let j = 1; j < array.length; j++) {
    // loop2++
    // console.log('loop2', loop2)
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
      }
    }
  }
  return array
}

console.log(bubbleSort1(shuffled))
console.log(bubbleSort2(shuffled))