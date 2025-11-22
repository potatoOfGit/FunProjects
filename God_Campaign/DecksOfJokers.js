const drawButton = document.getElementById("draw");
const shuffleButton = document.getElementById("shuffle");

const suites = ["Hearts", "Clubs", "Diamonds", "Spades"];
const values = ["Joker", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
const imgLinks = ["./cards/Card-Back.png",//Hearts
                  "./cards/Two_Of_Hearts.png",
                  "./cards/Three_Of_Hearts.png",
                  "./cards/Four_Of_Hearts.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png", //Clubs Begin
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",//Diamons Begin
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",//Spades
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
];
let deck = [];
const deckMap = new Map();


drawButton.addEventListener('click', () => {
  const text = document.getElementById("text");
  const textTwo = document.getElementById("text2");
  
  if (deck.length === 0) {
    text.innerHTML = "No cards left! Please shuffle.";
    return;
  }
  
  // Draw and remove the top card
  const drawnCard = deck.pop();
  const drawnCardTwo = deck.pop();
  text.innerHTML = drawnCard + " (Cards remaining: " + deck.length + ")";
  textTwo.innerHTML = drawnCardTwo + " (Cards remaining " + deck.length + ")";
  changeImage(drawnCard, drawnCardTwo);
});

function changeImage(cardOne, cardTwo){
   const imgElementOne = document.getElementById("chosen-card-one");
   const imgElementTwo = document.getElementById("chosen-card-two");

   imgElementOne.src = deckMap.get(cardOne);
   imgElementTwo.src = deckMap.get(cardTwo);
}

function reShuffle(){
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function makeMap(deck){
  for(let i = 0; i < deck.length; i++){
    deckMap.set(deck[i], imgLinks[i]);
  }
}

shuffleButton.addEventListener('click', () => {
  // Clear the deck first
  deck = [];
  
  // Create standard 52-card deck
  for (const suite of suites) {
    for (const value of values) {
      deck.push(value + " of " + suite);
    }
  }

  //Creates map between cards and imgs
  makeMap(deck);
  
  // Shuffle using Fisher-Yates algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  
  const text = document.getElementById("text");
  text.innerHTML = "Deck shuffled! " + deck.length + " cards ready.";
});