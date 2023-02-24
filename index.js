// PROMPT:
// Write a function that takes an array of strings (where each string represents the name of a card) and "shuffle", or randomize the order, of each card in the deck. Be sure that you write this as an in-place function (i.e. you do not create a new array in order to accomplish this task. You instead modify the original input array). 

function inPlaceShuffle(deck) {
    // We'll assume that we will start by shuffling the "top" card (i.e. the card at the last index position) into a random position of my deck. 
    // Consequently, we'll make a variable to start us off at the last index of our deck.
    let indexPosition = deck.length - 1; 

    // We will want to do the following operation over and over again until we exhaust the entirety of our deck.
        // 1. We will want to "pick" a random location in our deck. Math.random combined with Math.floor, multiplied by the total length of our deck of cards, can serve our goals here.
            // Note: We need to be very careful here in our shuffling algorithm to make sure that each card has an equal chance to appear at a given position in our deck. Consequently, we will need to "shrink" the range of the numbers our random generator can pick from. Notice how we will multiply our Math.random by our current index position, since we are working our way backwards from the "top" (or last index) of our deck, to the "bottom" (0th index). 
        // 2. At the "random" index position we created in step 1, we need to replace the card at that index with the current card we are on in our deck. HOWEVER, if we do this right away, we will lose reference to what the card was at the random index. So, to tackle that problem, we need to first create a placeholder variable that will temporarily store the card at that random index position.
        // 3. Now that the card at the random index has been stored somewhere safely, we can replace the card at the random index with the card we are currently on in our deck.
        // 4. Next, we can replace the card at the current index position in our deck with the one we "drew" from the random index position.
        // 5. Lastly, we need to increment our current index position, to keep iterating through our deck of cards. 
    while (indexPosition >= 0) {
        // Just a helpful variable to represent the current card we are on in our deck.
        let currentCard = deck[indexPosition];

        // Step 1: 
        let randomPosition = Math.floor(Math.random() * indexPosition) 

        // Step 2:
        placeholder = deck[randomPosition];

        // Step 3: 
        deck[randomPosition] = currentCard;

        // Step 4: 
        deck[indexPosition] = placeholder;

        // Step 5: 
        indexPosition--
    }

    // Don't forget to return our newly shuffled deck of cards!
    return deck;
};

const deckOfCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

console.log(inPlaceShuffle(deckOfCards))