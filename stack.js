let data = [];
let currentSize = data.length;
let maxSize = 5;

function push(newElement) {
  console.log(data);
  if (currentSize > maxSize) {
    console.log("Alert : the Stack is full!");
  } else {
    data[currentSize] = newElement;
    currentSize++;
  }
}
function pop() {
  if (currentSize <= 0) {
    console.log("Alert : the Stack is Empty!");
  }
  else{
    currentSize--;
    data.length=currentSize;
  }
  
}
push(5);
push(45);
push(30);
push(14);
push(10);
push(12);
push(45);

pop();
pop();
pop();
pop();
pop();



console.log(data);
