let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(value) {
  if (currentSize >= maxSize) {
    console.log("Queue is full");
  } else {
    queue[currentSize] = value;
    currentSize++;
  }
}

function dequeue() {
  if (isEmpty()) {
    for (let i = 0; i < queue.length; i++) {
      // const element f= array[i];
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    console.log("queue is empty");
  }
}
function front() {
  if (isEmpty()) {
    console.log("front", queue[0]);
  } else {
    console.log("queue is empty");
  }
}
function rear() {
  if (isEmpty()) {
    console.log("rear", queue[currentSize - 1]);
  } else {
    console.log("queue is empty");
  }
}
function isEmpty() {
  if (currentSize > 0) {
    return true;
  } else {
    return false;
  }
}
enqueue(45);
enqueue(6);
enqueue(12);
dequeue();
dequeue();
dequeue();

// console.log(queue);
front();
rear();
