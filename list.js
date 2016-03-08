"use strict"

class Node {
  constructor(data) {
    this.payload = data
    this.next = null

  }
}

// // last in first out (stack of plates)
// class List {
//   constructor() {
//     this.head = null
//   }

//   add (node) {
//     node.next = this.head

//     if (!this.head) {
//       this.head = node
//     }

//   }

// }

// // n interations
// class List {
//   constructor() {
//     this.head = null
//   }

//   add (node) {
//     //first item
//     if (!this.head) {
//       this.head = node
//     }
//     //nth (non zero) item
//     else {

//       var currentHead = this.head

//       while (currentHead.next) {
//         currentHead = currentHead.next
//       }

//       currentHead.next = node

//     }



//   }

// }


class List {
  constructor() {
    this.head = null
    this.tail = null
  }

  addHead (node) {
    node.next = this.head
    this.head = node
  }

  addTail (node) {
    //first item
    if (!this.head) {
      this.head = node
      this.tail = node
    }
    //nth (non zero) item
    else {
      this.tail.next = node
      this.tail = node
    }

  }

  removeTail() {
    let current = this.head

    while (current.next !== this.tail) {
      current = current.next
    }
    current.next = null
    this.tail = current
  }

  removeHead() {
    this.head = this.head.next
  }
}

const myList = new List()
myList.add(new Node("a"))
myList.add(new Node("b"))
myList.add(new Node("c"))
myList.add(new Node("d"))
myList.add(new Node("e"))

console.log(myList)