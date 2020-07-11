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

// // Each object below is a linked list
// const LL = new LinkedList();
// const userList = new LinkedList();
// const toDoList = new LinkedList();

// // Each object below is a new node
// const node1 = new Node(100, "node2", null);

// console.log(LL)
// console.log(node1)

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
// const ll = new LinkedList();
// ll.addToHead(100);
// ll.addToHead(200);
// ll.addToHead(300);

// console.log(ll)

// const myLL = new LinkedList();
// myLL.addToTail(500);
// myLL.addToTail(600);
// myLL.addToTail(700);

// myLL.addToHead(10);

const ll = new LinkedList();

ll.addToHead(1000)
ll.addToHead(2000)
ll.addToHead(3000)

console.log(ll)
console.log("Removed ", ll.removeTail())
console.log(ll)
