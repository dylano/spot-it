/* 
 order 0 = 1 symbol, 1 per card: A
 order 1 = 3 symbols, 2 per card: AB, AC, BC
 order 2 = 7 symbols, 3 per card: ABC, ADE, AFG, BDF, BEG, CDG, CEF
 order 3 = 13 symbols, 4 per card
 order 4 = 21 symbols, 5 per card
 order 5 = 31 symbols, 6 per card
 order 6 = 43 symbols, 7 per card
 order 7 = 57 symbols, 8 per card
*/

function buildCardArray(order) {
  let allCards = [];

  // First card
  let cardVals = [];
  for (i = 1; i <= order + 1; i++) {
    cardVals.push(i);
  }
  allCards.push(cardVals);

  // Remainder of cards with symbol #1
  for (j = 1; j <= order; j++) {
    cardVals = [1];
    for (k = 1; k <= order; k++) {
      cardVals.push(order + order * (j - 1) + k + 1);
    }
    allCards.push(cardVals);
  }

  // All other cards w/o symbol #1
  for (i = 1; i <= order; i++) {
    for (j = 1; j <= order; j++) {
      cardVals = [i + 1];
      for (k = 1; k <= order; k++) {
        cardVals.push(
          order + 2 + order * (k - 1) + (((i - 1) * (k - 1) + j - 1) % order)
        );
      }
      allCards.push(cardVals);
    }
  }
  return allCards;
}

const order = 6;
const cardMap = buildCardArray(order);

console.log(
  `An order ${order} game uses ${
    cardMap[0].length
  } symbols per card and requires ${
    cardMap.length
  } total symbols, organized into the following ${cardMap.length} cards:\n`,
  cardMap
);
