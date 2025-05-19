
let body = document.querySelector(".game-box");
let container = document.querySelector(".box-container");
let box = document.querySelectorAll(".box");
let x0 = document.querySelectorAll(".x0");

let turn = "X";
let num = 0;
let gamewin = false;

let info = document.querySelector(".x");

let gamewon = () => {
  let win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  win.forEach(e => {
    if (
      box[e[0]].innerText === box[e[1]].innerText &&
      box[e[1]].innerText === box[e[2]].innerText &&
      box[e[0]].innerText !== ""
    ) {
      gamewin = true;
      gameover(box[e[0]].innerText);
      
    }
   

  });
};


let changeturn = () => {
  turn = turn === "X" ? "0" : "X";
  if (!gamewin) info.innerText = "Turn for " + turn;
}

box.forEach(element => {

  element.addEventListener("click", (ele) => {
    if (ele.target.innerText == "X" || ele.target.innerText == "0") {
      return false;
    }
    ele.target.innerText = turn;
    gamewon();


     if (!gamewin) {
    let filled = 0;
    box.forEach(b => {
      if (b.innerText !== "") filled++;
    });
    if (filled === 9) {
      gamewin = true;
      gameover("No one"); // tie message
      return;
    }
  }

    changeturn();
  });
});

let reset = document.querySelector(".btn");

reset.addEventListener("click", () => {

  box.forEach((e) => {
    e.innerText = "";
  });
  info.innerText = "Turn for X";
  gamewin = false;
  turn = "X";
})


function gameover(oo) {

  let over = document.createElement("div");
  over.classList.add("after");
  over.innerText = oo + " won the game!";
  // console.log(over);
  document.querySelector(".game-box").appendChild(over);


  setTimeout(() => {
    over.style.opacity = "1";
    over.style.background = "rgb(160, 160, 157)";
  }, 50);

  over.addEventListener("click",()=>{
    
      if(over) over.remove();
   
    
    box.forEach((e) => {
      e.innerText = "";
    });
    info.innerText = "Turn for X";
    gamewin = false;
    turn = "X";
  })
}




