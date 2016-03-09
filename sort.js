'use strict'

const _ = require('lodash')
const arr = _.range(1,10)
let shuffled = _.shuffle(arr)


const swap = (array, index1, index2) => {
  console.log(array)
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp

}

//basic bubble sort
function bubbleSort(array) {

  let sorted = false

  while (!sorted) {

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

console.log(bubbleSort(shuffled));