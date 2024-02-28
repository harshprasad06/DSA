let data = [9, 15, 45, 66, 70, 85, 100];
// data=data.sort()
let find = 100;
let start = 0;
let end = data.length - 1;
let position = undefined;

function recursive(data, start, end) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    //   console.log(mid);
    if (data[mid] === find) {
      position = mid;
      return true;
    } else if (data[mid] < find) {
      recursive(data, mid + 1, end);
    } else {
      recursive(data, start, mid - 1);
    }
  }
}

recursive(data, start, end);
if (position === undefined) {
  console.log("position not found");
} else {
  console.log("position", position);
}
