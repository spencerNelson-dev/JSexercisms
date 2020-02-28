//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(value, left=null, right=null){
    this.data = value
    this.left = left
    this.right = right
    this.parent = null
  }
}

export class BinarySearchTree {
  constructor(value) {

    this.head = new Node(value)

  }

  get data() {
    
    return this.head.data
  }

  get right() {

    return this.head.right    
  }

  get left() {
    
    return this.head.left
  }

  insert(value) {

    //create new node
    let newNode = new Node(value)

    //set current node
    let current = this.head

    // set current node
    while(current.data >= value && current.left != null){

      current = current.left
    }
    while(current.data < value && current.right != null){

      current = current.right
    }

    if(current.data >= value){
      current.left = newNode
      
    } else {
      current.right = newNode
    }

    newNode.parent = current
    
  }

  each(passedFun) {



  }

  getLeftMost(){

    let leftMost =  this
    while(leftMost.left != null){

      leftMost = leftMost.left
    }

    return leftMost
  }

  getNext(){

    if(node.right != null){
      return node.getLeftMost
    } else {
      let current = this
      while(current == current.parent.right){
        current = current.parent
      }
      return current.parent
    }
    
  }

}

// four = new BinarySearchTree(4)

// four.insert(2)
// four.insert(6)

// console.log(four.data)
// console.log(four.left.data)
// console.log(four.right.data)

