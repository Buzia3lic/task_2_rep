var a = {
    history: [
      { data: "2019-01-01" },
      { data: "04 01 2023" },
      { data: "07/01/2023" },
      { data: "04.01.2022" },
      { data: "04.05.2022" },
      { data: "04.01.2021" }
    ]
  };
  
  //a.history.map((history) => {
  //console.log(new Date(history.data).toLocaleDateString())
  //})
  
  const arr = [];
  a.history.map((history) => {
    arr.push(new Date(history.data));
  });
  
  console.log(arr);
  
  arr.sort(function (a, b) {
    return a - b;
  });
  console.info(arr);
  
  //arr.map((el) => {
  //console.info(el.getFullYear())})
  
  const arr2 = [];
  var j = 0;
  var k = 0;
  arr2[j] = [];
  arr2[0][0] = arr[0];
  //console.log(arr2[0][0].getFullYear());
  
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
  