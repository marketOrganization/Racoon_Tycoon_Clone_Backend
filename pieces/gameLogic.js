const pieces = require('./index')

const createProductionCard = () => {
    //function to create a new production card and give it to the current player
      //creates 2 empty arrays
      productionArray = []
      priceArray = []
      newCardProduction = []
      newCardPrice = []
    
      //priceArray
      for(let i = 1; i <= 15; i++){priceArray.push('wood')}
      for(let i = 1; i <= 12; i++){priceArray.push('wheat')}
      for(let i = 1; i <= 18; i++){priceArray.push('iron')}
      for(let i = 1; i <= 16; i++){priceArray.push('coal')}
      for(let i = 1; i <= 21; i++){priceArray.push('goods')}
      for(let i = 1; i <= 18; i++){priceArray.push('luxury')}
    
      // productionArray
      for(let i = 1; i <= 17; i++){productionArray.push('wood')}
      for(let i = 1; i <= 19; i++){productionArray.push('wheat')}
      for(let i = 1; i <= 15; i++){productionArray.push('iron')}
      for(let i = 1; i <= 17; i++){productionArray.push('coal')}
      for(let i = 1; i <= 15; i++){productionArray.push('goods')}
      for(let i = 1; i <= 17; i++){productionArray.push('luxury')}

      //creates a new array size 100 with the respective probablilties
      let randomNumber = (3 + Math.floor(Math.random()*3));
      for(let i = 1; i <= randomNumber; i++){
        newCardProduction.push(productionArray[Math.floor(Math.random()*101)]);
      }
    
      randomNumber = (2 + Math.floor(Math.random()*4));
      for(let i = 1; i <= randomNumber; i++){
        newCardPrice.push(priceArray[Math.floor(Math.random()*101)]);
      }
    
    //filters the amount of each in the array to get the value in the back end
      let newCard = {
        production: {
          wheat: newCardProduction.filter((j) => j === 'wheat').length,
          wood: newCardProduction.filter((j) => j === 'wood').length,
          iron: newCardProduction.filter((j) => j === 'iron').length,
          coal: newCardProduction.filter((j) => j === 'coal').length,
          goods: newCardProduction.filter((j) => j === 'goods').length,
          luxury: newCardProduction.filter((j) => j === 'luxury').length
        },
        price:{
          wheat: newCardPrice.filter((j) => j === 'wheat').length,
          wood: newCardPrice.filter((j) => j === 'wood').length,
          iron: newCardPrice.filter((j) => j === 'iron').length,
          coal: newCardPrice.filter((j) => j === 'coal').length,
          goods: newCardPrice.filter((j) => j === 'goods').length,
          luxury: newCardPrice.filter((j) => j === 'luxury').length
        }
      }
    
    //adds the new card to the curreny player on the front end and back end

    return newCard
    
}

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const createTownDeck = (numPlayers, townDeck) => {
    if(numPlayers >= 4){
        return townDeck
    }else{
        for(let i = 0; i < townDeck.length; i++){
            if(i % 4 === 0){
                townDeck.splice(i, 1 , null)
            }
        }
    }
    return townDeck.filter(town => town)
}

const createRailRoadDeck = (numPlayers, railRoadDeck) => {
    let railroads = []
    if(numPlayers <= 3){
        railRoadDeck.splice(0, 1)
        railRoadDeck.splice(railRoadDeck.length - 1, 1)
    }
    for(let i = 0; i < 4; i++){
        railroads.push(railRoadDeck)
    }
    return shuffle(railroads.flat(2))
}

const initalizeBoard = (game) => {
    let buildingDeckStartUnshuffled = []
    let buildingDeckStart = []
    let buildingDeckEnd = []
    for(let i = 0; i < 5; i++){
        buildingDeckStartUnshuffled.push(pieces.buildings[i])
    }
    let buildingDeckStartShuffled = shuffle([...buildingDeckStartUnshuffled])
    for(let i = 0; i < game.players.length; i++){
        buildingDeckStart.push(buildingDeckStartShuffled[i])
    }
    for(let i = 5; i < pieces.buildings.length; i++){
        buildingDeckEnd.push(pieces.buildings[i])
    }
    game.railRoadDeck = createRailRoadDeck(game.players.length, [...pieces.railroads])
    game.buildingDeck = buildingDeckStart.concat(shuffle(buildingDeckEnd))
    game.townDeck = createTownDeck(game.players.length, [...pieces.towns])
    game.commodies = [...pieces.commodies]

    //decks have been created, now divy out the cards

    game.currentPlayersTurn = game.players[Math.floor(Math.random() * game.players.length)]

    game.avaiableRailRoadOne = game.railRoadDeck.splice(0,1)[0]
    game.avaiableRailRoadTwo = game.railRoadDeck.splice(0,1)[0]
    game.avaiableBuildingOne = game.buildingDeck.splice(0,1)[0]
    game.avaiableBuildingTwo = game.buildingDeck.splice(0,1)[0]
    game.avaiableBuildingThree = game.buildingDeck.splice(0,1)[0]
    game.avaiableBuildingFour = game.buildingDeck.splice(0,1)[0]
    game.avaiableTown = game.townDeck.splice(0,1)[0]

    for(let i = 0; i < game.players.length; i++){
        for(let j = 0 ; j < 3; j++){
            game.players[i].productionCards.push(createProductionCard())
        }
    }

    return game
}

const addPlayer = (game, player) => {
    game.players.push(player)
    return game
}


module.exports = {
    shuffle,
    createTownDeck,
    createRailRoadDeck,
    initalizeBoard,
    addPlayer,
    createProductionCard
}