'use strict'

const _ = require('lodash')
const arr = _.range(1,10)
const chalk = require('chalk')
const util = require('util')


let shuffled = _.shuffle(arr)
let loop1 = 0
let loop2 = 0


const swap = (array, index1, index2) => {
  console.log(chalk.red(util.inspect(array)))

  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

}

//basic bubble sort
const bubbleSort1 = (array) => {

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

const bubbleSort2 = (array) => {

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

// for i ← 1 to length(A) - 1
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
// end for


const insertionSort = (array) => {

  let largest = array[0]
  console.log('largest', largest)

  for (let i=1; i<array.length; i++) {

    if (array[i] > largest) {
      largest = array[i]
      console.log('largest', largest)
    }
    else {
      let j = i;
      while (array[j] < array[j-1]) {
        swap(array, j, j-1);
        j--
      }
    }
  }

  return array
}

const selectionSort = (array) => {

  for (let i=0; i<array.length; i++) {

  let smallest = i;

    for (let j = i; j < array.length; j++) {

      if (array[j] < array[smallest]) {
        smallest = j
      }

    }

  if (smallest !== i) {
    swap(array, i, smallest)
  }


  }
  return array
}



const partition = (items, left, right) => {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

const quickSort = (items, left, right) => {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}




console.log(quickSort(shuffled))