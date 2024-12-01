const fs = require("fs");

let list1 = [];
let list2 = [];
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
    if (parseInt(list1[i]) > parseInt(list2[i])) {
      sum += parseInt(list1[i]) - parseInt(list2[i]);
    } else {
      sum += parseInt(list2[i]) - parseInt(list1[i]);
    }
  }

  console.log(sum);
});
