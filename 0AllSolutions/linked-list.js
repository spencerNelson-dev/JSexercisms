//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export class LinkedList {
   constructor(){
     this.head = null
   }
  push(value) {

    //create a new node
    const newNode = {
      value: value,
      prev: null,
      next: null
    }

    //no items in the list yet
    if(this.head === null){
      
      //set the head to the new node
      this.head = newNode
    } else {

      //look at the first node
      let current = this.head

      // follow the next links until you reach the end
      while(current.next != null){
        current = current.next
      }

      // create the next link to the new node
      current.next = newNode

      // create the prev link
      newNode.prev = current
    }
    
  }

  pop() {

    // start at the head
    let current = this.head

    // follow next links until you reach the end
    while(current.next != null){
      current = current.next
    }

    // set the output to the value of the last item
    let output = current.value

    // remove the next pointer of the prev item
    // if the item is the head, set the head to null
    if (current === this.head){
      this.head = null
    } else {
      current.prev.next = null
    }
    

    return output

  }

  shift() {
    
    // start at the top
    let current = this.head

    // set output to the top value
    let output = current.value

    //set a new head to the next
    // if the head was shifted then set head to null
    if(current.next == null){
      this.head = null
    }else{

      this.head = current.next

      // remove the next items prev link
      current.next.prev = null
    }
    
    
    return output
  }

  unshift(value) {
    
    //create a new node
    const newNode = {
      value: value,
      prev: null,
      next: null
    }
    
    // if no items in the list yet
    if( this.head == null){

      this.head = newNode
    } else {

      //set the head previous prop
      this.head.prev = newNode

      newNode.next = this.head

      this.head = newNode

    }

  }

  delete(value) {
    
    // Start a the head
    let current = this.head

    // check if the head contains the value
    // and remove the head
    if(current.value == value){

      this.shift()
      return undefined
    }

    // loop through to find the value
    while( current.next != null){

      if(current. value == value){

        
        current.prev.next = current.next

        current.next.prev = current.prev

        return undefined
      }

      current = current.next
    }

    // check the last
    if(current.value == value){

      this.pop()
      
      return undefined
    }

  }

  count() {
    
    let count = 0

    let current = this.head

    // if the list is empty return count as zero
    if(current == null) {return count}


    // add a count for the head
    count++

    // follow the next links until you reach the end
    // and count each move
    while(current.next != null){
      current = current.next
      count++
    }

    return count
  }
}

// let myList = new LinkedList()
// myList.push(10)
// myList.push(20);

// myList.delete(20);
// console.log(myList.count())
// console.log(myList)


