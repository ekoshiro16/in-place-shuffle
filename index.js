const deckOfCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function inPlaceShuffle(deck) {
    // We'll assume that we will start by shuffling the "first" card (i.e. the card at the 0th index position) into a random position of my deck. 
    // Consequently, we'll make a variable to start us off at the 0th index of our deck.
    let indexPosition = 0; 

    // We will want to do the following operation over and over again until we exhaust the entirety of our deck.
        // 1. We will want to "pick" a random location in our deck. Math.random combined with Math.floor, multiplied by the total length of our deck of cards, can serve our goals here.
            // Note: We need to be very careful here in our shuffling algorithm to make sure that each card has an equal chance to appear at a given position in our deck. Consequently, we will need to "shrink" the range of the numbers our random generator can pick from. Subtracting the current index position, if we're starting from the beginning, from the total length of our deck of cards should solve that problem. 
        // 2. At the "random" index position we created in step 1, we need to replace the card at that index with the current card we are on in our deck. HOWEVER, if we do this right away, we will lose reference to what the card was at the random index. So, to tackle that problem, we need to first create a placeholder variable that will temporarily store the card at that random index position.
        // 3. Now that the card at the random index has been stored somewhere safely, we can replace the card at the random index with the card we are currently on in our deck.
        // 4. Next, we can replace the card at the current index position in our deck with the one we "drew" from the random index position.
        // 5. Lastly, we need to increment our current index position, to keep iterating through our deck of cards. 
    while (indexPosition < deck.length) {
        // Just a helpful variable to represent the current card we are on in our deck.
        let currentCard = deck[indexPosition];

        // Step 1: 
        let randomPosition = Math.floor(Math.random() * (deck.length - indexPosition))

        // Step 2:
        placeholder = deck[randomPosition];

        // Step 3: 
        deck[randomPosition] = currentCard;

        // Step 4: 
        deck[indexPosition] = placeholder;

        // Step 5: 
        indexPosition++ 
    }

    // Don't forget to return our newly shuffled deck of cards!
    return deck;
};

console.log(inPlaceShuffle(deckOfCards))