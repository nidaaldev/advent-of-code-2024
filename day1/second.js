const fs = require("fs");

let list1 = [];
let list2 = [];
let totalNums = [];
let sum = 0;

fs.readFile("day1/input", (err, data) => {
  if (err) console.error(err);

  const splitedData = data.toString().split("\n");

  for (const x of splitedData) {
    list1.push(x.substring(0, 5));
  }

  list1.sort();
  list1.shift();

  for (const x of splitedData) {
    list2.push(x.substring(8, 13));
  }

  list2.sort();
  list2.shift();

  for (let i = 0; i < list1.length; i++) {
    let repNum = 0;
    let tempResult = 0;

    for (let j = 0; j < list2.length; j++) {
      if (parseInt(list2[j]) === parseInt(list1[i])) {
        tempResult = 0;
        repNum++;
        tempResult = parseInt(list1[i]) * repNum;
      }
    }

    totalNums.push(tempResult);
  }

  for (let i = 0; i < totalNums.length; i++) {
    sum += totalNums[i];
  }

  console.log(sum);
});
