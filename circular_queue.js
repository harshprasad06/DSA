class Queue {
    constructor(size) {
      this.max = size;
      this.items = new Array(size);
      this.currentSize = 0;
      this.rear = -1;
      this.front = -1;
    }
    enqueue(val) {
      if (this.currentSize != this.max) {
        if (this.rear == this.max - 1) {
          this.rear = 0;
        } else {
          this.rear++;
        }
        this.items[this.rear] = val;
        this.currentSize++;
        if ((this.front == -1)) {
          this.front = this.rear;
        }
      }
    }
    dequeue(){
        if(this.currentSize!=0){
            this.items[this.front]=null;
            if(this.front==this.max-1){
                this.front=0;
            }else{
                this.front++;
            }
            this.currentSize--;
            
        }else{
            this.front=-1;
            this.rear=-1;
            alert("queue is empty")
        }
    }
  }

  let queue = new Queue(5);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.dequeue();
  queue.enqueue(6);



//   queue.dequeue()

  console.log(queue)