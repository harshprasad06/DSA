let data = [];
let currentSize = data.length;
console.log(data);

function push(value) {
  data[currentSize] = value;
  currentSize++;
}
function pop() {
  let lastItem = data[currentSize - 1];
  currentSize--;
  data.length = currentSize;
  return lastItem;
}
function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}

let str = "harsh";
str = str.split("");
reverseStr(str);
str=str.join("")
console.log(str);

// console.log("Stack", data);
