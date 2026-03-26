const drawButton = document.getElementById("draw");
const shuffleButton = document.getElementById("shuffle");

let drawnCard = "";
let drawnCardTwo = "";
const text = document.getElementById("text");
const textTwo = document.getElementById("text2");
const textThree = document.getElementById("textThree");
const textFour = document.getElementById("textFour");
const drawnCards = [drawnCard, drawnCardTwo];
const handImages = [document.getElementById("handImgOne"),
                    document.getElementById("handImgTwo"),
                    document.getElementById("handImgThree"),
                    document.getElementById("handImgFour"),
                    document.getElementById("handImgFive"),
                    document.getElementById("handImgSix"),
                    document.getElementById("handImgSeven")
                  ];
let handFull = false;

const cardButtonOne = document.getElementById("card-button-one");
const cardButtonTwo = document.getElementById("card-button-two");

const imgElementOne = document.getElementById("chosen-card-one");
const imgElementTwo = document.getElementById("chosen-card-two");

const suites = ["Hearts", "Clubs", "Diamonds", "Spades"];
const values = ["Joker", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
const imgLinks = ["./cards/Joker_Of_Hearts.png",//Hearts
                  "./cards/Two_Of_Hearts.png",
                  "./cards/Three_Of_Hearts.png",
                  "./cards/Four_Of_Hearts.png",
                  "./cards/Five_Of_Hearts.png",
                  "./cards/Six_Of_Hearts.png",
                  "./cards/Seven_Of_Hearts.png",
                  "./cards/Eight_Of_Hearts.png",
                  "./cards/Nine_Of_Hearts.png",
                  "./cards/Ten_Of_Hearts.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Card-Back.png",
                  "./cards/Clubs/Joker_Of_Clubs.png", 
                  "./cards/Clubs/Joker_Of_Clubs.png", //Clubs Begin
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
                  "./cards/Diamonds/Joker_Of_Diamonds.png",//Diamons Begin
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
                  "./cards/Spades/Joker_Of_Spades.png",//Spades
                  "./cards/Spades/Two_Of_Spades.png",
                  "./cards/Spades/Three_Of_Spades.png",
                  "./cards/Spades/Four_Of_Spades.png",
                  "./cards/Spades/Five_Of_Spades.png",
                  "./cards/Spades/Six_Of_Spades.png",
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

cardButtonOne.addEventListener('click', () => {
  for(let i = 0; i < handImages.length; i++){
    if(handImages[i].src.includes("/cards/Hand_Slot.png") && handFull == false){
      const cardImg = handImages[i];
      cardImg.src = deckMap.get(drawnCard);
      deck.push(drawnCardTwo);
      shuffleDeck();
      //checkIfFull();
      break;
    } else if(handFull == true){

    }
  }
});

cardButtonTwo.addEventListener('click', () => {
  for(let i = 0; i < handImages.length; i++){
    if(handImages[i].src.includes("/cards/Hand_Slot.png") && handFull == false){
      const cardImg = handImages[i];
      cardImg.src = deckMap.get(drawnCardTwo);
      deck.push(drawnCard);
      shuffleDeck();
      //checkIfFull();
      break;
    } else if(handFull == true){

    }
  }
});

function checkIfFull(){
  if(handImages[handImages.size()] != "./cards/Hand_Slot.png"){
    handFull = true;
  }
}

drawButton.addEventListener('click', () => {
  if (deck.length === 0) {
    text.innerHTML = "No cards left! Please shuffle.";
    return;
  }
  
  // Draw and remove the top card
  drawnCard = deck.pop();
  drawnCardTwo = deck.pop();
  text.innerHTML = drawnCard + " (Cards remaining: " + deck.length + ")";
  textTwo.innerHTML = drawnCardTwo + " (Cards remaining " + deck.length + ")";
  changeImage(drawnCard, drawnCardTwo);
});



function changeImage(cardOne, cardTwo){
   imgElementOne.src = deckMap.get(cardOne);
   textThree.innerHTML = drawnCard + " (Cards remaining: " + deck.length + ")";
   imgElementTwo.src = deckMap.get(cardTwo);
   textFour.innerHTML = drawnCardTwo + " (Cards remaining " + deck.length + ")";
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

function shuffleDeck(){
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function changeHandImg(imgId){
  const img = document.getElementById(imgId);
  img.src = "./cards/Hand_Slot.png";
}