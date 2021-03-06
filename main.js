function LinkedList(head, tail) {
  // Head and tail pointers are set to null because there are no nodes in the list yet
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// ADD HEAD
LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);

  // If there is a head in the node, set newNode to be the previous node.
  // If the linkedlist is empty, newNode is the tail
  if (this.head){
    this.head.prev = newNode;
  }
  else{
    this.tail = newNode;
  }

  // Make newNode head
  this.head = newNode;
}

// ADD TAIL
LinkedList.prototype.addToTail = function(value){
  const newNode = new Node(value, null, this.tail)

  if (this.tail){
    this.tail.next = newNode;
  }
  else {
    this.head = newNode;
  }

  this.tail = newNode;
}

// REMOVE HEAD
LinkedList.prototype.removeHead = function(){
  if (!this.head){
    return null;
  }

  const val = this.head.value;

  // Makes the next node the new head
  this.head = this.head.next;

  // If head now exists
  if (this.head) {
    this.head.prev = null;
  }
  else {
    this.tail = null
  }

  return val;
}

// REMOVE TAIL
LinkedList.prototype.removeTail = function(){
  if (!this.tail){
    return null;
  }

  const val = this.tail.value;

  this.tail = this.tail.prev;

  if (this.tail){
    this.tail.next = null;
  }
  else{
    this.head = null;
  }

  return val;
}

// SEARCH
LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;

  while(currentNode){
    if(currentNode.value === searchValue){
      return currentNode.value;
    }
    // If currentNode.next is null then currentNode will no longer be true and the loop will stop
    currentNode = currentNode.next;
  }

  return null;
}


LinkedList.prototype.indexOf = function(value){
  let currentNode = this.head;

  const index = [];
  let count = 0;

  while(currentNode){
    if(currentNode.value === value){
      index.push(count);
    }

    count++;
    currentNode = currentNode.next;
  }

  if(index.length > 0){
    return index;
  } 
  else{
    return null;
  }
}

const ll = new LinkedList();

ll.addToTail(1)
ll.addToTail(5)
ll.addToTail(3)
ll.addToTail(5)
ll.addToTail(8)
ll.addToTail(7)
ll.addToTail(5)

ll.addToTail("6 million")
ll.addToTail("RAMON")
ll.addToTail("30")

//console.log(ll)
//console.log("Removed ", ll.removeTail())
console.log(ll.indexOf(5))
