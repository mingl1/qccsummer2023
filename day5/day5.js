console.log("Ming Lin");
let myText = document.querySelector("#userName p:nth-child(2)");
myText.style.color = "red";

document.querySelector(".name1").style.backgroundColor = "hotpink";

let myName = document.querySelectorAll("#userName p");
for (let i = 0; i < myName.length; i++) {
  myName[i].style.color = "green";
  if (i % 2 == 0) {
    myName[i].style.fontSize = "2em";
  }
}

let myDiv = document.querySelectorAll("p")[1];
myDiv.innerHTML = "New text content using <em><b>innerHTML</b></em>";

document.querySelector("h1").classList.add("subtitle");

let listItem = document.querySelector("li:nth-child(2)");

let myPara = document.createElement("p");

let mySentence = document.createTextNode(
  "This is the text of the new paragraph"
);

myPara.appendChild(mySentence);
myPara.classList.add("subtitle");

document.querySelector("div").appendChild(myPara);

let myItem = document.querySelector("ul");
myItem.removeChild(myItem.lastElementChild);

let btn = document.querySelector(".btn1");
btn.onclick = function () {
  alert("Hi There!");
};

let randomNum = function () {
  let radNum = Math.ceil(Math.random() * 9);
  return radNum;
};
let guessNumDiv = document.querySelector(".guessNumber");
let btnGuess = document.querySelector(".btnGuessNum");

btnGuess.addEventListener("click", function () {
  guessNumDiv.innerHTML = randomNum();
});

let bntMouseEvent = document.querySelector("#bntMouseEvent");
let mouseoutDisplay = document.querySelector(".mouseoutDisplay");
let dblclickDisplay = document.querySelector(".dblclickDisplay");
let mouseoutCounter = 0;

bntMouseEvent.addEventListener("mouseout", function () {
  mouseoutCounter++;
  mouseoutDisplay.innerHTML = mouseoutCounter;
});
bntMouseEvent.addEventListener("dblclick", function () {
  dblclickDisplay.innerHTML += "click ";
});

let topIcon = document.querySelector(".top");
window.addEventListener("scroll", function () {
  let yPosition = this.scrollY;
  if (yPosition > 100) {
    topIcon.style.display = "block";
  } else {
    topIcon.style.display = "none";
  }
});
