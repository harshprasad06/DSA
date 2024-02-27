class Stack {
  item = [];
  currentSize;
  maxSize;
  lastIndex;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }
  push(value) {
    if (this.currentSize >= this.maxSize) {
      console.log("Stack is full");
    } else {
      this.item[this.currentSize] = value;
      this.currentSize++;
    }
  }
  pop() {
    if (this.currentSize <= 0) {
      console.log("Stack is Empty");
    } else {
      this.lastIndex = this.item[this.currentSize - 1];
      this.currentSize--;
      this.item.length = this.currentSize;
      return this.lastIndex;
    }
  }
  reverse(value) {
    value = value.split("");
    // console.log(value);
    for (let i = 0; i < value.length; i++) {
      this.push(value[i]);
    }
    for (let i = 0; i < value.length; i++) {
      // console.log(this.pop());
      value[i] = this.pop();
    }
    console.log(value.join(""));
  }
  display() {
    console.log(this.item);
  }
}
let str = "harsh";

let st = new Stack(5);
// st.push(5);
// st.push(8);
// st.push(10);
// st.push(56);
// st.push(20);
// st.push(566);
// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
st.reverse(str);
st.display();
