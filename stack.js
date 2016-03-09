'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Stack {
  constructor (size) {
    this.head = null
    this.tail = null
    this.length = 0

    for (let i = 0; i < size; i++) {
      this.push(new Node())
    }

    this.maxSize = size
    this.length = 0
  }

  push (item) {
    if (this.isFull()) {
      throw new Error('Stack full')
    }

    let node

    if (item instanceof Node) {
      node = item
    } else {
      node = new Node(item)
    }

    if (this.maxSize) {
      let current = this.head

      while(current.next !== this.tail) {
        current = current.next
      }

      current.next = null
    } else if (!this.tail) {
      this.tail = node
    }

    node.next = this.head
    this.head = node

    this.length++
  }

  pop () {
    if (!length) {
      throw new Error('Stack empty')
    }

    const toRemove = this.head
    const emptyNode = new Node()

    this.head = toRemove.next
    this.tail.next = emptyNode
    this.tail = emptyNode
    this.length--

    return toRemove
  }

  isEmpty () {
    return !this.length
  }

  isFull () {
    return this.length >= this.maxSize
  }

  getSize () {
    return this.length
  }
}
