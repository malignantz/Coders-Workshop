class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * Note the print() method included. This will display your list in a more
 * easily readable format.
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(element) {
    const node = new Node(element);
    let traversal = this.head;
    if (this.head === null) {
      this.head = node;
    } else {
      while (traversal.next !== null) {
        traversal = traversal.next;
      }
      traversal.next = node;
    }
  }

  print() {
    if (this.head === null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let traversal = this.head.next;
    while (traversal !== null) {
      objString = `${objString} -> ${traversal.element}`;
      traversal = traversal.next;
    }
    return objString;
  }

  reverse() {
    let newHead;
    let node = this.head;
    let nodeList = [];
    while (node) {
      nodeList.push(node);
      node = node.next;
    }
    //console.log(nodeList);
    nodeList = nodeList.reverse();
    this.head = nodeList[0];
    for (let i = 0; i < nodeList.length - 1; i++) {
      nodeList[i].next = nodeList[i + 1];
    }
    nodeList[nodeList.length - 1].next = null;
    return this;
  }
}

let LL = new LinkedList();
[1, 2, 3, 4, 5].forEach(item => LL.add(item));
console.log(LL.reverse().print());
