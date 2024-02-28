let data = [9, 15, 45, 85, 100];
// data=data.sort()
let find = 100;
let start = 0;
let end = data.length - 1;
let position = undefined;

// Binary Search Algorithm to search for a number in the array
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  console.log("mid", mid);
  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(position);
