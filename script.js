const secretWord = ["apply", "education", "high", "four", "client"];

let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;
function selectRandomItem() {
  randomItem = secretWord[Math.floor(Math.random() * secretWord.length)];
  document.getElementById("letters").addEventListener("click", buttonHandler);
  window.addEventListener("keydown", keyHandler);
  console.log(randomItem);
}

function setUnderScores() {
  let splitWord = randomItem.split("");
  let mappedWord = splitWord.map((letter) =>
    clicked.indexOf(letter) >= 0 ? letter : "_"
  );
  result = mappedWord.join("");
  document.getElementById("clue").innerHTML = `<p>${result}</p>`;
}

function ifTrue() {
  if (randomItem === result) {
    document.getElementById("gameOver").querySelector("p").style.display =
      "block";
    document.getElementById("image").querySelector("img").src =
      "assets/winner.png";
  }
}
function ifFalse() {
  if (mistakes === 6) {
    document.getElementById("gameOver").querySelector("p").style.display =
      "block";
    document.getElementById(
      "clue"
    ).innerHTML = `<p>random word is ${randomItem}</p>`;
  }
}
function hangManPic() {
  const image = document.getElementById("image").querySelector("img");
  image.src = `assets/hangman${mistakes}.png`;
}
function letterHandler(letter) {
  letter = letter.toLowerCase();
  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
  document.getElementById(letter.toUpperCase()).className = "used";
  if (randomItem.indexOf(letter) >= 0) {
    setUnderScores();
    ifTrue();
  } else if (randomItem.indexOf(letter) === -1) {
    mistakes++;
    ifFalse();
    hangManPic();
  }
}
function buttonHandler(event) {
  letterHandler(event.target.id);
}
function keyHandler(event) {
  letterHandler(event.key);
}

selectRandomItem();
setUnderScores();
