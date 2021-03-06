var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/






/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var unplaced = [];
  for (var i=1; i < 9; i++) {
    	unplaced.push(i,i);
    }

  var cardValues = [],
  r = unplaced.length,
  s = 0;

  while (r--) {
    var s = Math.floor(Math.random()*(r+1));
    cardValues.push(unplaced[s]);
    unplaced.splice(s,1);
  }
  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
