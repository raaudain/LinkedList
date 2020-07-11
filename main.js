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

// Each object below is a linked list
const LL = new LinkedList();
const userList = new LinkedList();
const toDoList = new LinkedList();

// Each object below is a new node
const node1 = new Node(100, "node2", null);

console.log(LL)
console.log(node1)

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);

  if (this.)
}