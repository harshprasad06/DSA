let data = [9, 100, 45, 85, 78, 65, 34, 67, 81];
let findValue=66;
let result = undefined;
for (let i = 0; i <= data.length; i++) {
  if (data[i] == findValue) {
    result = i;
    break;
  }
}
if(result==undefined){
    console.log("result not found",result)
}
else{
    console.log("result")
}