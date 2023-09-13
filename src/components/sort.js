var a = {
  fio: "Yurkov",
  history: [
    { data: "2024-01-01" },
    { data: "2019-01-01" },
    { data: "04 01 2023" },
    { data: "07/01/2023" },
    { data: "04.01.2022" },
    { data: "04.05.2022" },
    { data: "04.01.2021" },
    { data: "04.01.2020" }
  ]
};

console.info(a)

const arr = [];
a.history.map((history) => {
  arr.push(new Date(history.data));
});

console.error(arr);

//arr.sort(function (a, b) {
//  return a - b;
//});
//console.info(arr);



//const groupBy = (ar, key) => {

//  return ar.reduce(function (rv, x) {
//   (rv[x.key] = rv[x.key] || []).push(x);
//    return rv;
//  }, {});
//};

const groupBy = (ar, key) => {
  return ar[key].reduce(function (rv, x) {
    (rv).push(new Date(x.data))
    //(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, []);
};

const arr3 = arr.reduce(function (rv, item) {
  (rv[item.getFullYear()] = rv[item.getFullYear()] || []).push(item);
    return rv
  }, {});

console.log(arr3);



