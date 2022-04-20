const Node = (value) => {
  return {
    value,
    next: null,
  };
};

const LinkedList = () => {
  let head = null;
  let length = 0;
  const push = (value) => {
    let newNode = Node(value);
    if (head === null) head = newNode;
    else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    length++;
  };

  const pop = () => {
    if (head === null) return null;
    if (length === 1) {
      let node = head;
      head = null;
      length = 0;
      return node;
    }
    let currentNode = head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    let popNode = currentNode.next;
    currentNode.next = null;
    length--;
    return popNode;
  };

  const shift = () => {
    if (head === null) return null;
    if (length === 1) {
      let node = head;
      head = null;
      length = 0;
      return node;
    }
    head = head.next;
    length--;
  };

  const unshift = (value) => {
    let newNode = Node(value);
    if (head !== null) newNode.next = head;
    head = newNode;
    length++;
    return newNode;
  };

  const insertAt = (index, value) => {
    if (index > length || index < 0) return null;
    if (index === 0 || head === null) {
      unshift(value);
      return true;
    }
    if (index === length) {
      push(value);
      return true;
    }
    let prevNode;
    for (let i = 0; i < index; i++) {
      if (i === 0) prevNode = head;
      else prevNode = prevNode.next;
    }
    const newNode = Node(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    length++;
    return true;
  };

  const removeAt = (index) => {
    if (index > length || index < 0) return null;
    if (index === 0 || head === null) return shift();
    if (index === length) return pop();

    let prevNode;
    let nextNode;
    let value;
    for (let i = 0; i < index; i++) {
      if (i === 0) prevNode = head;
      else prevNode = prevNode.next;
    }
    // 要移除的 node 的 value
    value = prevNode.next.value;
    nextNode = prevNode.next.next;
    prevNode.next = nextNode;
    length--;
    return value;
  };

  const get = (index) => {
    if (index > length || index < 0) return null;
    if (head === null) return head.value;
    let currentNode = head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  };

  const printAll = () => {
    if (head === null) {
      console.log("Nothing in this linked list");
      return;
    }

    let currentNode = head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  };

  return {
    head,
    length,
    push,
    pop,
    shift,
    unshift,
    insertAt,
    removeAt,
    get,
    printAll,
  };
};

// 以下可以驗證上面的函式
let myLinkedList = LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("James");
myLinkedList.push('Kevin')
myLinkedList.unshift('Rock')
myLinkedList.insertAt(1, 'Durant')
myLinkedList.removeAt(0)
myLinkedList.shift()
console.log(myLinkedList.get(0));
console.log(myLinkedList.get(2));
myLinkedList.pop()
myLinkedList.pop()
myLinkedList.pop()
myLinkedList.pop()
myLinkedList.printAll();
