let removeLeftBorderOfTicTacToeBox = [0, 3, 6];
let removeRightBorderOfTicTacToeBox = [2, 5, 8];
let removeTopBorderOfTicTacToeBox = [0, 1, 2];
let removeBottomBorderOfTicTacToeBox = [6, 7, 8];

let boxItem = document.getElementsByClassName("boxItem");

// Removing the border of boxItem(left, top, right and bottom)
for (let i = 0; i < 3; i++) {
  boxItem[removeRightBorderOfTicTacToeBox[i]].style.borderRight = "none";
}
for (let i = 0; i < 3; i++) {
  boxItem[removeLeftBorderOfTicTacToeBox[i]].style.borderLeft = "none";
}
for (let i = 0; i < 3; i++) {
  boxItem[removeTopBorderOfTicTacToeBox[i]].style.borderTop = "none";
}
for (let i = 0; i < 3; i++) {
  boxItem[removeBottomBorderOfTicTacToeBox[i]].style.borderBottom = "none";
}

let playAgainButton = document.getElementById("playAgainButton");

// Count=1 if player choosen X else count=0 if player choosen Y
let count = 1;

let boxFilled = 0;

let playerChoosen = false;

// It will keep track of how many elements of array(arr1, arr2 ....arr8) matched with input array inputForX and inputForO
let elementsMatched = 0;

let win = false;

// It will fill with boxItem index (Only for X)
let inputForX = [];

// It will fill with boxItem index (Only for O)
let inputForO = [];

// Object objArr item will got the function checkArrayForX(arr) and checkArrayForO(arr) with the help of var getObj
let getObj = 1;

let playWithComputer = true;

let playWithFriends = true;

let playWith = false;

let noOfPlayer = false;

let scoreX = 0;
let scoreO = 0;

let playerX = document.getElementById("playerX");

let playerO = document.getElementById("playerO");

// Initializing array for checking the inputForX or inputForO. If the input elements is matching with the array(arr1, arr2, .... arr8) elemnts of anyone of them(arr1, arr2, ....arr8). If it matched any array from below, we will fill the backgound-color green on matched array.
let arr1 = [0, 1, 2];
let arr2 = [0, 4, 8];
let arr3 = [0, 3, 6];
let arr4 = [1, 4, 7];
let arr5 = [2, 4, 6];
let arr6 = [2, 5, 8];
let arr7 = [3, 4, 5];
let arr8 = [6, 7, 8];

// Creating object of aaray
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

let opt = document.getElementsByClassName("opt");
opt[1].addEventListener("click", function () {
  if (noOfPlayer == false) {
    playWith = true;
    playWithFriends = true;
    playWithComputer = false;
    opt[1].style.backgroundColor = "rgb(240, 18, 18)";
    opt[1].style.color = "#fff";
    noOfPlayer = true;
  }
});
opt[0].addEventListener("click", function () {
  if (noOfPlayer == false) {
    playWith = true;
    playWithComputer = true;
    playWithFriends = false;
    opt[0].style.backgroundColor = "rgb(240, 18, 18)";
    opt[0].style.color = "#fff";
    noOfPlayer = true;
  }
});

let player = document.getElementsByClassName("player");
let playerButton = document.getElementById("playerButton");
let matchWon = document.getElementById("matchWon");

let xIsSelected = false;
let oIsSelected = false;

// Function for choosinf player X or O
function choosePlayer(str) {
  if (playWith == false) {
    alert("please, choose one or two player");
  }
  if (str == "X" && playerChoosen == false && playWith == true) {
    player[0].style.backgroundColor = "rgb(240, 18, 18)";
    player[1].style.backgroundColor = "rgb(177, 177, 177)";
    count = 1;
    playerChoosen = true;
    win = false;
    xIsSelected = true;
  }
  if (str == "O" && playerChoosen == false && playWith == true) {
    player[1].style.backgroundColor = "rgb(240, 18, 18)";
    player[0].style.backgroundColor = "rgb(177, 177, 177)";
    count = 0;
    playerChoosen = true;
    win = false;
    oIsSelected = true;
  }
}

// This function is for inputForX which will detect the array(arr1, arr2 ..... arr8) item in inputForX array
function checkAllArrayForX(arr) {
  elementsMatched = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < inputForX.length; j++) {
      if (arr[i] == inputForX[j]) {
        elementsMatched++;
        break;
      }
    }
    if (elementsMatched == 3) {
      break;
    }
  }
}

// This function is for inputForO which will detect the array(arr1, arr2 ..... arr8) item in inputForO array
function checkAllArrayForO(arr) {
  elementsMatched = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < inputForO.length; j++) {
      if (arr[i] == inputForO[j]) {
        elementsMatched++;
        break;
      }
    }
    if (elementsMatched == 3) {
      break;
    }
  }
}

function twoPlayer(num) {
  // If player is not choosen
  if (playerChoosen == false && playWithFriends == true) {
    alert("Please, choose the player first");
    win = true;
  }

  // If no one have won the match
  if (win == false && playWithFriends == true) {
    if (count == 1 && boxItem[num].innerText == "") {
      boxItem[num].innerText = "X";
      boxItem[num].style.color = "#55b4fa";
      inputForX.push(num);
      count = 0;
      boxFilled++;
    } else {
      if (count == 0 && boxItem[num].innerText == "") {
        boxItem[num].innerText = "O";
        boxItem[num].style.color = "#f81b81";
        inputForO.push(num);
        count = 1;
        boxFilled++;
      }
    }
  }

  if (boxFilled == 9 && playWithFriends == true) {
    playAgainButton.style.display = "block";
    boxFilled = 0;
  }

  if (inputForX.length >= 3 && win == false && playWithFriends == true) {
    for (let i = 1; i < 9; i++) {
      checkAllArrayForX(objArr[getObj]);
      if (elementsMatched == 3) {
        elementsMatched = 0;
        break;
      }
      getObj++;
    }

    // If array(arr1, arr2...arr8) elements is present in inputForX
    if (getObj < 9) {
      let newArr = objArr[getObj];
      for (let i = 0; i < 3; i++) {
        boxItem[newArr[i]].style.backgroundColor = "rgb(61, 185, 61)";
      }
      playAgainButton.style.display = "block";
      win = true;
      matchWon.innerText = "X won the match 🥳";
      scoreX++;
      playerX.innerText = ` X : ${scoreX} `;
      playerX.style.padding = "12px 1rem";
      boxFilled = 0;
    } else {
      getObj = 1;
      elementsMatched = 0;
    }
  }

  if (inputForO.length >= 3 && win == false && playWithFriends == true) {
    for (let i = 1; i < 9; i++) {
      checkAllArrayForO(objArr[getObj]);
      if (elementsMatched == 3) {
        elementsMatched = 0;
        break;
      }
      getObj++;
    }

    // If array(arr1, arr2...arr8) elements is present in inputForO
    if (getObj < 9) {
      let newArr = objArr[getObj];
      for (let i = 0; i < 3; i++) {
        boxItem[newArr[i]].style.backgroundColor = "rgb(61, 185, 61)";
      }
      playAgainButton.style.display = "block";
      win = true;
      matchWon.innerText = "O won the match 🥳";
      scoreO++;
      playerO.innerText = ` O : ${scoreO} `;
      playerO.style.padding = "12px 1rem";
      boxFilled = 0;
    } else {
      getObj = 1;
      elementsMatched = 0;
    }
  }
}

let foundEmptyBox = false;
let dontPlayWhileLoop = false;

function singlePlayer(num) {
  if (playerChoosen == false && playWithComputer == true) {
    alert("Please, choose the player first");
    win = true;
  }

  if (boxItem[num].innerText == "X" || boxItem[num].innerText == "O") {
    dontPlayWhileLoop = true;
  }

  if (win == false && playWithComputer == true) {
    if (count == 1 && boxItem[num].innerText == "") {
      boxItem[num].innerText = "X";
      boxItem[num].style.color = "#55b4fa";
      inputForX.push(num);
      boxFilled++;
    } else {
      if (count == 0 && boxItem[num].innerText == "") {
        boxItem[num].innerText = "O";
        boxItem[num].style.color = "#f81b81";
        inputForO.push(num);
        boxFilled++;
      }
    }
  }

  while (
    foundEmptyBox == false &&
    boxFilled < 9 &&
    playWithComputer == true &&
    win == false &&
    dontPlayWhileLoop == false
  ) {
    let randNum = 10 * Math.random().toFixed(1);
    if (randNum > 8) {
      continue;
    }
    if (count == 1 && boxItem[randNum].innerText == "") {
      boxItem[randNum].innerText = "O";
      boxItem[randNum].style.color = "#f81b81";
      inputForO.push(randNum);
      boxFilled++;
      break;
    } else {
      if (boxItem[randNum].innerText == "") {
        boxItem[randNum].innerText = "X";
        boxItem[randNum].style.color = "#55b4fa";
        inputForX.push(randNum);
        boxFilled++;
        break;
      }
    }
    foundEmptyBox = false;
  }
  dontPlayWhileLoop = false;

  if (boxFilled == 9 && playWithComputer == true) {
    playAgainButton.style.display = "block";
    boxFilled = 0;
    foundEmptyBox = true;
  }

  if (inputForX.length >= 3 && win == false && playWithComputer == true) {
    for (let i = 1; i < 9; i++) {
      checkAllArrayForX(objArr[getObj]);
      if (elementsMatched == 3) {
        elementsMatched = 0;
        break;
      }
      getObj++;
    }

    // If array(arr1, arr2...arr8) elements is present in inputForX
    if (getObj < 9) {
      let newArr = objArr[getObj];
      for (let i = 0; i < 3; i++) {
        boxItem[newArr[i]].style.backgroundColor = "rgb(61, 185, 61)";
      }
      playAgainButton.style.display = "block";
      win = true;
      matchWon.innerText = "X won the match 🥳";
      scoreX++;
      playerX.innerText = ` X : ${scoreX} `;
      playerX.style.padding = "12px 1rem";
      boxFilled = 0;
    } else {
      getObj = 1;
      elementsMatched = 0;
    }
  }

  if (inputForO.length >= 3 && win == false && playWithComputer == true) {
    for (let i = 1; i < 9; i++) {
      checkAllArrayForO(objArr[getObj]);
      if (elementsMatched == 3) {
        elementsMatched = 0;
        break;
      }
      getObj++;
    }

    // If array(arr1, arr2...arr8) elements is present in inputForO
    if (getObj < 9) {
      let newArr = objArr[getObj];
      for (let i = 0; i < 3; i++) {
        boxItem[newArr[i]].style.backgroundColor = "rgb(61, 185, 61)";
      }
      playAgainButton.style.display = "block";
      win = true;
      matchWon.innerText = "O won the match 🥳";
      scoreO++;
      playerO.innerText = ` O : ${scoreO} `;
      playerO.style.padding = "12px 1rem";
      boxFilled = 0;
    } else {
      getObj = 1;
      elementsMatched = 0;
    }
  }
}

// To start the match again
function playAgain(n) {
  for (let i = 0; i < n; i++) {
    boxItem[i].innerText = "";
    boxItem[i].style.backgroundColor = "#fff";
  }
  win = false;
  elementsMatched = 0;
  getObj = 1;
  inputForX = [];
  inputForO = [];
  matchWon.innerText = "";
  playAgainButton.style.display = "none";
  foundEmptyBox = false;
  dontPlayWhileLoop = false;
  if (xIsSelected == true) {
    count = 1;
  }
  if (oIsSelected == true) {
    count = 0;
  }
}

// To reset everything and make it the landing page again
function reset(n) {
  if (playWith == true) {
    for (let i = 0; i < n; i++) {
      boxItem[i].innerText = "";
      boxItem[i].style.backgroundColor = "#fff";
    }
    win = false;
    count = 1;
    elementsMatched = 0;
    getObj = 1;
    inputForX = [];
    inputForO = [];
    matchWon.innerText = "";
    player[0].style.backgroundColor = "#1abc9c";
    player[1].style.backgroundColor = "#1abc9c";
    playAgainButton.style.display = "none";
    playerChoosen = false;
    opt[0].style.backgroundColor = "#1abc9c";
    opt[1].style.backgroundColor = "#1abc9c";
    opt[0].style.color = "rgb(16, 75, 252)";
    opt[1].style.color = "rgb(16, 75, 252)";

    playWithComputer = true;
    playWithFriends = true;
    playWith = false;
    noOfPlayer = false;
    foundEmptyBox = false;
    dontPlayWhileLoop = false;
    scoreO = 0;
    scoreX = 0;
    playerO.innerText = `O: ${scoreO}`;
    playerX.innerText = `X: ${scoreX}`;
    xIsSelected = false;
    oIsSelected = false;
  }
}
