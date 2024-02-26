let data = [9, 45, 85, 78, 65, 34, 67, 81];
let searchElement=67;
// method 1
for (let i = 0; i < data.length; i++) {
    // console.log(`Array Element ${data[i]}`);
    if (data[i]===searchElement) {
    console.log(`Search Element index is ${i}`);
    break;
    }   
}

//  method 2
console.log(data.indexOf(searchElement));