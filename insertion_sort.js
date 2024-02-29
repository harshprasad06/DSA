let data = [12, 11, 13, 5, 6];
function insertion(data) {
  // console.log(data)
  let i, j, current;
  for (i = 1; i < data.length; i++) {
    // console.log(`Index i ${i} Value ${data[i]}`);
    current = data[i];
    // console.log(data[i])
    // console.log(`current value ${current} and J value ${data[j]}`);

    j = i - 1;
    // console.log(`Index j ${j} Value ${data[j]}`);
    // console.log(`current value ${current} and J value ${data[j]}`);


    while (j>=0  && data[j] > current) {
        data[j+1]=data[j]
        j--;
    }
    data[j+1]=current

  }
  console.log(data)
}
insertion(data);
