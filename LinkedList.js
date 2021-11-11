class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeToEnd(node) {
    if (this.head == null) {
      this.head = node;
      return;
    }
    var ptr = this.head;
    while (ptr.next != null) {
      ptr = ptr.next;
    }

    ptr.next = node;
  }

  addAtIndex(index, node) {
    var ptr = this.head;
    for (var i = 1; i <= index - 1; i++) {
      ptr = ptr.next;
    }
    node.next = ptr.next;
    ptr.next = node;
  }

  deleteAtIndex(index) {
    var ptr = this.head;
    for (var i = 1; i <= index - 1; i++) {
      ptr = ptr.next;
    }
    if (index == 0) {
      this.head = this.head.next;
    }
    ptr.next = ptr.next.next;
  }

  display() {
    var ptr = this.head;
    while (ptr != null) {
      console.log(ptr.data + "->");
      ptr = ptr.next;
    }
    console.log("NULL");
  }

  isCycle() {
    var ptr = this.head;
    while (ptr != null) {
      ptr = ptr.next;
      if (ptr == this.head) {
        console.log("Cycle!");
        return;
      }
    }
    console.log("Not a cycle");
  }
}

var ll = new LinkedList();

ll.addNodeToEnd(new Node(1));
ll.addNodeToEnd(new Node(2));
ll.addNodeToEnd(new Node(3));

ll.addAtIndex(2, new Node(5));
ll.addAtIndex(3, new Node(6));

ll.isCycle();

var lastNode = new Node(10);
lastNode.next = ll.head;
ll.addNodeToEnd(lastNode);

ll.isCycle();
