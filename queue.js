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
  if (currentSize > 0) {
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
enqueue(45);
enqueue(6);
enqueue(12);
enqueue(2);
enqueue(2);

enqueue(2);

dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();

console.log(queue);
