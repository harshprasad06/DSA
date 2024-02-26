let data = [9, 100,45, 85, 78, 65, 34, 67, 81];
console.log("a",data);

for (let a = 0; a < data.length; a++) {
  for (let b = 0; b < data.length; b++) {
    if(data[b] > data[b + 1]){
       let temp = data[b];
       data[b]=data[b+1];
       data[b+1]=temp;
    }
   }
}
    console.log("b",data);
