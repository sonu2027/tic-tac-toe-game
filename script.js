let leftArr = [0, 3, 6];
let rightArr = [2, 5, 8];
let topArr = [0, 1, 2];
let bottomArr = [6, 7, 8];

let boxItem = document.getElementsByClassName("boxItem");
for (let i = 0; i < 3; i++) {
  boxItem[rightArr[i]].style.borderRight = "none";
}
for (let i = 0; i < 3; i++) {
  boxItem[leftArr[i]].style.borderLeft = "none";
}
for (let i = 0; i < 3; i++) {
  boxItem[topArr[i]].style.borderTop = "none";
}
for (let i = 0; i < 3; i++) {
  boxItem[bottomArr[i]].style.borderBottom = "none";
}

let count = 1;

let inputForX = [];
let inputForY = [];
let sumForX = 0;
let sumForY = 0;

let arr1 = [0, 1, 2];
let arr2 = [0, 4, 8];
let arr3 = [0, 3, 6];
let arr4 = [1, 4, 7];
let arr5 = [2, 4, 6];
let arr6 = [2, 5, 8];
let arr7 = [3, 4, 5];
let arr8 = [6, 7, 8];

let objArr = {
  1: arr1,
  2: arr2,
  3: arr3,
  4: arr4,
  5: arr5,
  6: arr6,
  7: arr7,
  8: arr8,
};

let temp = 0;
let getObj = 1;
let win=0


// This function is for X
function checkAllArrayForX(arr) {
  temp = 0;
  console.log("sended arr is", arr);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < inputForX.length; j++) {
      if (arr[i] == inputForX[j]) {
        temp++;
        break;
      }
    }
  }
  console.log("temp", temp);
}

// This function is for O
function checkAllArrayForO(arr) {
    temp = 0;
    console.log("sended arr is", arr);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < inputForY.length; j++) {
        if (arr[i] == inputForY[j]) {
          temp++;
          break;
        }
      }
    }
    console.log("temp", temp);
  }

function enterTicTacToe(num) {

  if(win==0){
    if (count == 1) {
        boxItem[num].innerText = "X";
        boxItem[num].style.color = "#55b4fa";
        count = 0;
        inputForX.push(num);
        sumForX = sumForX + num;
        console.log(inputForX);
      } else {
        boxItem[num].innerText = "O";
        boxItem[num].style.color="#f81b81"
        count = 1;
        inputForY.push(num);
        sumForY = sumForY + num;
        console.log(inputForY);
      }
  }

  if (inputForX.length >= 3) {
    for (let i = 1; i < 9; i++) {
      console.log("value of get obj", getObj);
      checkAllArrayForX(objArr[getObj]);
      if (temp == 3) {
        temp = 0;
        break;
      }
      getObj++;
    }
    if (getObj < 9) {
      let newArr = objArr[getObj];
      for (let i = 0; i < 3; i++) {
        console.log("index of f1 array", newArr[i]);
        boxItem[newArr[i]].style.backgroundColor = "rgb(61, 185, 61)";
      }
      win=1
    }
    else{
        getObj=1
        temp=0
    }
  }

  if (inputForY.length >= 3) {
    for (let i = 1; i < 9; i++) {
        console.log("value of get obj", getObj);
        checkAllArrayForO(objArr[getObj]);
        if (temp == 3) {
          temp = 0;
          break;
        }
        getObj++;
      }
      if (getObj < 9) {
        let newArr = objArr[getObj];
        for (let i = 0; i < 3; i++) {
          console.log("index of f1 array", newArr[i]);
          boxItem[newArr[i]].style.backgroundColor = "rgb(61, 185, 61)";
        }
        win=1
      }
      else{
          getObj=1
          temp=0
      }
  }
}
