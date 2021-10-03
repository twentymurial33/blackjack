let deck = [
  { value: "A", suit: "S", numValue: 11 },
  { value: "A", suit: "D", numValue: 11 },
  { value: "A", suit: "C", numValue: 11 },
  { value: "A", suit: "H", numValue: 11 },
  { value: "2", suit: "S", numValue: 2 },
  { value: "2", suit: "D", numValue: 2 },
  { value: "2", suit: "C", numValue: 2 },
  { value: "2", suit: "H", numValue: 2 },
  { value: "3", suit: "S", numValue: 3 },
  { value: "3", suit: "D", numValue: 3 },
  { value: "3", suit: "C", numValue: 3 },
  { value: "3", suit: "H", numValue: 3 },
  { value: "4", suit: "S", numValue: 4 },
  { value: "4", suit: "D", numValue: 4 },
  { value: "4", suit: "C", numValue: 4 },
  { value: "4", suit: "H", numValue: 4 },
  { value: "5", suit: "S", numValue: 5 },
  { value: "5", suit: "D", numValue: 5 },
  { value: "5", suit: "C", numValue: 5 },
  { value: "5", suit: "H", numValue: 5 },
  { value: "6", suit: "S", numValue: 6 },
  { value: "6", suit: "D", numValue: 6 },
  { value: "6", suit: "C", numValue: 6 },
  { value: "6", suit: "H", numValue: 6 },
  { value: "7", suit: "S", numValue: 7 },
  { value: "7", suit: "D", numValue: 7 },
  { value: "7", suit: "C", numValue: 7 },
  { value: "7", suit: "H", numValue: 7 },
  { value: "8", suit: "S", numValue: 8 },
  { value: "8", suit: "D", numValue: 8 },
  { value: "8", suit: "C", numValue: 8 },
  { value: "8", suit: "H", numValue: 8 },
  { value: "9", suit: "S", numValue: 9 },
  { value: "9", suit: "D", numValue: 9 },
  { value: "9", suit: "C", numValue: 9 },
  { value: "9", suit: "H", numValue: 9 },
  { value: "10", suit: "S", numValue: 10 },
  { value: "10", suit: "D", numValue: 10 },
  { value: "10", suit: "C", numValue: 10 },
  { value: "10", suit: "H", numValue: 10 },
  { value: "J", suit: "S", numValue: 10 },
  { value: "J", suit: "D", numValue: 10 },
  { value: "J", suit: "C", numValue: 10 },
  { value: "J", suit: "H", numValue: 10 },
  { value: "Q", suit: "S", numValue: 10 },
  { value: "Q", suit: "D", numValue: 10 },
  { value: "Q", suit: "C", numValue: 10 },
  { value: "Q", suit: "H", numValue: 10 },
  { value: "K", suit: "S", numValue: 10 },
  { value: "K", suit: "D", numValue: 10 },
  { value: "K", suit: "C", numValue: 10 },
  { value: "K", suit: "H", numValue: 10 },
];

let player = {
  name: "Per",
  chips: 200,
};

let cards = []; //array
let sum = 0;
let message = "";
//Holding the States
let hasBlackJack = false;
let isAlive = false;
//Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCardIndex = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  //removing hard corded values- render out first card and second card
  cardsEl.textContent = "Cards: ";
  //Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  //render out all the cards we have
  sumEl.textContent = "Sum: " + sum;
  //conditionals
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo You've got BlackJack";
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}
