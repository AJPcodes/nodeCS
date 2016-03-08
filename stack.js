'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Stack {
  constructor () {
    this.head = null
  }

  push (item) {
    let node

    if (item instanceof Node) {
      node = item
    } else {
      node = new Node(item)
    }

    node.next = this.head
    this.head = node
  }

  pop () {
    const toRemove = this.head

    this.head = toRemove.next
    return toRemove
  }

  isEmpty () {}

  isFull () {
    return false
  }

  getSize () {}
}
