// function apple(x){
//     console.warn(x)
//     if(x<10){
//         apple(x+1);
//     }

// }
// let data =0;
// apple(data);

// function factorial(item) {
//   if (item == 0) {
//     return 1;
//   }
//   return item * factorial(item - 1);
// }
// var data = 5;
// console.log(factorial(data));
// console.warn(5*factorial(5-1)*factorial(4-1)*factorial(3-1)*factorial(2-1)*factorial(1-1)

// Indirect Recursion

var apple = 0;
var money = 100;

// function buyApple(item){
//   if (item>0) {
//     console.warn("I have", item,"Rs", "Total Apple", apple);
//     buyMore(item)
//   }
//   else{
//      console.warn("I don't have more money", "Total Apple", apple);

//   }
// }
// buyApple(money)

//  function buyMore(item) {
//   apple++;
//   buyApple(item-10)
//  }

//  Direct Recursionvar apple=0;

function buyApple(item) {
  if (item > 0) {
    console.warn("I have", item, "Rs", "Total Apple", apple);
    apple++;
    buyApple(item - 10);
  } else {
    console.warn("I don't have more money", "Total Apple", apple);
  }
}
buyApple(money);
