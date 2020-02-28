//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {

  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class List {

  constructor(values) {
    this._head = null
    this._length = 0


    if (values != undefined) {
      for (let value of values) {

        this.add(new Element(value))
      }
    }
  }

  add(nextValue) {

    nextValue.next = this._head

    this._head = nextValue

    this._length++
  }

  get length() {

    return this._length
  }

  get head() {

    return this._head
  }

  toArray() {

    let rtnArr = []

    let current = this._head

    while (current != null) {

      rtnArr.push(current.value)

      current = current.next
    }

    return rtnArr
  }

  reverse() {

    return new List(this.toArray())
  }

}

