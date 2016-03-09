'use strict'

class Dictionary {
  constructor () {
    this.data = {}
  }

  add (index, value) {
    this.data[index] = value
  }

  find (index) {
    return this.data[index]
  }

  remove (index) {
    delete this.data[index]
  }

  showAll () {
    Object
      .keys(this.data)
      .sort()
      .forEach(key => console.log(key, this.data[key]))
  }
}

var d = new Dictionary();

d.add('carrot', 1);
d.add('apple', 1);
d.add('zebra', 1);
d.add(1, 1);
d.add('elephant', 1);

