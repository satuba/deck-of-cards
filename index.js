"use strict";

function Deck() {
  this.fullDeck = [];
  var ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  var suits = ["Hearts", "Spades","Clubs", "Diamonds"];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      this.fullDeck.push(ranks[j] + " of " + suits[i]);
    };
  };
};

Deck.prototype.showNewDeck = function() {
  console.log(this.fullDeck);
};

Deck.prototype.shuffle = function() {
  var deck = this.fullDeck;
  var shuffled = [];

  function pickRandom(min, max) {
    if(max === 0) {
      return shuffled;
    }
    var index = Math.floor(Math.random() * (max - min)) + min;
    shuffled.push(deck[index]);
    deck.splice(index, 1);
    max = max - 1;
    pickRandom(min, max);
  };
  this.shuffledDeck = shuffled;
  pickRandom(0, 52);
};

Deck.prototype.showShuffledDeck = function() {
  console.log(this.shuffledDeck);
};


Deck.prototype.deal = function(players, hand) {
  this.playerArray = [];
  var index = 0;

  //create players
  for(var i = 1; i <= players; i++) {
    this.playerArray.push([]);
  }

  //deal
  for (var i = 0; i < this.shuffledDeck.length; i++) {
    if(this.playerArray[players-1].length === hand) {
      return console.log("deal!");
    } else {
      if(index >= hand) {
        index = 0;
      }
      this.playerArray[index].push(this.shuffledDeck[i]);
      this.shuffledDeck.splice(i,1);
      index = index + 1;
    }
  };

};

Deck.prototype.showGame = function() {
  console.log("this many cards left on the deck: " + this.shuffledDeck.length);
  console.log(this.playerArray);
};

var newDeck = new Deck();

// show the whole deck
newDeck.showNewDeck();

//shuffle deck
newDeck.shuffle();

// // show shuffled deck
newDeck.showShuffledDeck();

// //deal for 5 players 5 cards per hand
newDeck.deal(5,5);

// //show players' hands and the size of the rest of the deck
newDeck.showGame();
