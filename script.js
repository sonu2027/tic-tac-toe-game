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

let playAgainButton=document.getElementById("playAgainButton")

let count = 1;
let boxFilled=0
let playerChoosen=false
let choosenPlayer=0
let inputForX = [];
let inputForY = [];

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
let win = 0;
let player=document.getElementsByClassName("player")
let playerButton=document.getElementById("playerButton")
let matchWon=document.getElementById("matchWon")

function choosePlayer(str){
  if(str=="X" && playerChoosen==false){
    player[0].style.backgroundColor="rgb(240, 18, 18)"
    player[1].style.backgroundColor="rgb(177, 177, 177)"
    count=1
    playerChoosen=true
    win=0
  }
  if(str=="O" && playerChoosen==false){
    player[1].style.backgroundColor="rgb(240, 18, 18)"
    player[0].style.backgroundColor="rgb(177, 177, 177)"
    count=0
    playerChoosen=true
    win=0
  }
}
// This function is for X
function checkAllArrayForX(array2) {
  temp = 0;
  console.log("sended arr is", array2);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < inputForX.length; j++) {
      if (array2[i] == inputForX[j]) {
        temp++;
        break;
      }
    }
    if (temp == 3) {
      break;
    }
  }
  console.log("temp", temp);
}

// This function is for O
function checkAllArrayForO(array1) {
  temp = 0;
  console.log("sended arr is", array1);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < inputForY.length; j++) {
      if (array1[i] == inputForY[j]) {
        temp++;
        break;
      }
    }
    if (temp == 3) {
      break;
    }
  }
  console.log("temp", temp);
}

function enterTicTacToe(num) {
  if(playerChoosen==false){
    alert("Please, choose the player first")
    win=1
  }
  if (win == 0) {
    if (count == 1 && boxItem[num].innerText == "") {
      boxItem[num].innerText = "X";
      boxItem[num].style.color = "#55b4fa";
      inputForX.push(num);
      console.log(inputForX);
      count=0
      boxFilled++
    }
    else{
      if (count == 0 && boxItem[num].innerText == "") {
        boxItem[num].innerText = "O";
        boxItem[num].style.color = "#f81b81";
        inputForY.push(num);
        console.log(inputForY);
        count=1
        boxFilled++
      }
    }
  }
  if(boxFilled==9){
    playAgainButton.style.display="block"
    boxFilled=0
  }
  if (inputForX.length >= 3 && win ==0) {
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
      playAgainButton.style.display="block"
      player[0].style.backgroundColor="#1abc9c"
      player[1].style.backgroundColor="#1abc9c"
      win = 1;
      matchWon.innerText="X won the match"
      //playerChoosen=false
      boxFilled=0
    } else {
      getObj = 1;
      temp = 0;
    }
  }

  if (inputForY.length >= 3 && win ==0) {
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
      playAgainButton.style.display="block"
      player[0].style.backgroundColor="#1abc9c"
      player[1].style.backgroundColor="#1abc9c"
      win = 1;
      //playerChoosen=false
      matchWon.innerText="O won the match"
      boxFilled=0
    } else {
      getObj = 1;
      temp = 0;
    }
  }
}

function startAgain(n) {
  for (let i = 0; i < n; i++) {
    boxItem[i].innerText = "";
    boxItem[i].style.backgroundColor = "#fff";
  }
  win = 0;
  count = 1;
  temp = 0;
  getObj = 1;
  inputForX = [];
  inputForY = [];
  console.log(win, count, temp, getObj);
  matchWon.innerText=""
  player[0].style.backgroundColor="#1abc9c"
  player[1].style.backgroundColor="#1abc9c"
  playAgainButton.style.display="none"
  playerChoosen=false
}
