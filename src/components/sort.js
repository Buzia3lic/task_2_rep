var a = {
  fio: "Yurkov",
  history: [
    { data: "2019-01-01" },
    { data: "04 01 2023" },
    { data: "07/01/2023" },
    { data: "04.01.2022" },
    { data: "04.05.2022" },
    { data: "04.01.2021" },
    { data: "04.01.2020" }
  ]
};

const arr = [];
a.history.map((history) => {
  arr.push(new Date(history.data));
});

console.log(arr);

arr.sort(function (a, b) {
  return a - b;
});
console.info(arr);

const arr2 = [];
var j = 0;
var k = 0;
arr2[j] = [];
arr2[0][0] = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr2[j][k] === arr[i]) {
    continue;
  } else {
    if (arr2[j][k].getFullYear() === arr[i].getFullYear()) {
      arr2[j].push(arr[i]);
      k++;
    } else {
      j++;
      arr2[j] = [];
      arr2[j].push(arr[i]);
      k = 0;
    }
  }
}

console.error(arr2);

const groupBy = (ar, key) => {
  
  return ar.reduce(function (rv, x) {
    (rv[x.key] = rv[x.key] || []).push(x);
    return rv;
  }, {});
};

//const c = a.history.map((history) => new Date(history.data))
//console.log(c)

//const b = a.history.filter(user => user.data.includes('2019'));

//console.log(b);


//console.log(groupBy(c, );
