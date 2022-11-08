const pieces = require('./index')
const stocks = require('./commodies')

const createProductionCard = () => {
    //function to create a new production card and give it to the current player
      //creates 2 empty arrays
      productionArray = []
      priceArray = []
      newCardProduction = []
      newCardPrice = []
    
      //priceArray
      for(let i = 1; i <= 15; i++){priceArray.push({name: 'wood', imageLink:'wood.png'})}
      for(let i = 1; i <= 12; i++){priceArray.push({name: 'wheat', imageLink:'wheat.png'})}
      for(let i = 1; i <= 18; i++){priceArray.push({name: 'iron', imageLink:'iron.png'})}
      for(let i = 1; i <= 16; i++){priceArray.push({name: 'coal', imageLink:'coal.png'})}
      for(let i = 1; i <= 21; i++){priceArray.push({name: 'goods', imageLink:'goods.png'})}
      for(let i = 1; i <= 18; i++){priceArray.push({name: 'luxury', imageLink:'luxury.png'})}
    
      // productionArray
      for(let i = 1; i <= 17; i++){productionArray.push({name: 'wood', imageLink:'wood.png'})}
      for(let i = 1; i <= 19; i++){productionArray.push({name: 'wheat', imageLink:'wheat.png'})}
      for(let i = 1; i <= 15; i++){productionArray.push({name: 'iron', imageLink:'iron.png'})}
      for(let i = 1; i <= 17; i++){productionArray.push({name: 'coal', imageLink:'coal.png'})}
      for(let i = 1; i <= 15; i++){productionArray.push({name: 'goods', imageLink:'goods.png'})}
      for(let i = 1; i <= 17; i++){productionArray.push({name: 'luxury', imageLink:'luxury.png'})}

      //creates a new array size 100 with the respective probablilties
      let randomNumber = (3 + Math.floor(Math.random()*2));
      for(let i = 1; i <= randomNumber; i++){
        console.log(productionArray[Math.floor(Math.random()*100)])
        newCardProduction.push(productionArray[Math.floor(Math.random()*100)]);
      }
    
      randomNumber = (2 + Math.floor(Math.random()*3));
      for(let i = 1; i <= randomNumber; i++){
        console.log(priceArray[Math.floor(Math.random()*100)])
        newCardPrice.push(priceArray[Math.floor(Math.random()*100)]);
      }

    let newCard = {
        production:newCardProduction,
        price:newCardPrice
    }

    console.log(newCard)
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
    game.turnIndex = Math.floor(Math.random() * game.players.length)
    game.players[game.turnIndex].isInTurn = true
    game.shownRailRoads = [...game.railRoadDeck.splice(0,2)]
    game.shownBuildings = [...game.buildingDeck.splice(0,4)]
    game.avaiableTown = game.townDeck.splice(0,1)[0]

    for(let i = 0; i < game.players.length; i++){
        for(let j = 0 ; j < 3; j++){
            game.players[i].productionCards.push(createProductionCard())
        }
    }
    game.messageFeed.push(`Game Started!`)
    const message = `It is now ${game.players[game.turnIndex].name}'s turn.`
    game.messageFeed.push(message)
    return game
}

const addPlayer = (game, player) => {
    game.players.push(player)
    game.messageFeed.push(`${player.name} joined.`)

    return game
}

const handleAuctionStart = (game, railRoadIndex) => {
    game.auctionCardIndex = railRoadIndex
    game.auctionIndex = game.turnIndex
    game.players[game.auctionIndex].currBidder = true
    game.auction = true
    game.bid = game.shownRailRoads[railRoadIndex].minimumPrice - 1
    for(let i = 0; i < game.players.length; i++){
        game.players[i].inBid = true
        game.players[i].isInAuction = true
        game.players[i].isInTurn = false
    }
    return game
}

const setNextTurn = (game) => {
    game.players[game.turnIndex].isInTurn = false
    game.players[game.turnIndex + 1]? game.turnIndex++ : game.turnIndex = 0
    game.players[game.turnIndex].isInTurn = true
    const message = `It is now ${game.players[game.turnIndex].name}'s turn.`
    game.messageFeed.push(message)
    return game
} 

const setNextBidder = (game) => {
    game.players[game.auctionIndex].currBidder = false
    game.players[game.auctionIndex + 1]? game.auctionIndex++ : game.auctionIndex = 0
    if(game.players.filter(player=>{return player.inBid}).length === 1){
        const message = `${game.players[game.highestBidderIndex].name} won the auction for ${game.bid}`
        game.messageFeed.push(message)
        game.players[game.highestBidderIndex].money -= game.bid
        game.players[game.highestBidderIndex].railroads.push(...
        game.shownRailRoads.splice(
            game.auctionCardIndex,
            1,
            ...game.railRoadDeck.splice(
                0,
                1
            )
        ))
        for(let i = 0; i < game.players.length; i++){
            game.players[i].highestBidder = false
            game.players[i].inBid = true;
            game.players[i].isInAuction = false;
            game.players[i].currBidder = false;
        }   
        if(game.highestBidderIndex === game.turnIndex){
            game = setNextTurn(game)
        }else{
            const message = `It is ${game.players[game.turnIndex].name}'s turn.`
            game.messageFeed.push(message)
            game.players[game.turnIndex].isInTurn = true
        }
        game.auctionIndex = null
        game.auction = null
        game.bid = 0
        game.highestBidderIndex = null
        game.message = "Auction Over"
        return game
    }else{
        if(game.players[game.auctionIndex].inBid){
            const message = `It is now ${game.players[game.auctionIndex].name}'s bid.`
            game.messageFeed.push(message)
            game.players[game.auctionIndex].currBidder = true
        }else{
            return setNextBidder(game)
        }
    }
    return game
}

const handleAuctionRound = (game, bid) => {
    if(bid > game.bid){
        game.bid = bid
        for(let i = 0; i < game.players.length; i++){
            game.players[i].highestBidder = false
            game.players[i].currBidder = false
        }
        game.highestBidderIndex = game.auctionIndex
        game.players[game.auctionIndex].highestBidder = true
        game = setNextBidder(game)
        return game
    }else{
        return false
    }
} 

const checkCommodityValues = (game) =>{
    //check if too high
    if(game.commodityValues.wheat > 11){game.commodityValues.wheat = 11}
    if(game.commodityValues.wood > 11){game.commodityValues.wood = 11}
    if(game.commodityValues.iron > 12){game.commodityValues.iron = 12}
    if(game.commodityValues.coal > 12){game.commodityValues.coal = 12}
    if(game.commodityValues.goods > 13){game.commodityValues.goods = 13}
    if(game.commodityValues.luxury > 13){game.commodityValues.luxury = 13}

    //check if to low
    if(game.commodityValues.wheat < 1){game.commodityValues.wheat = 1}
    if(game.commodityValues.wood < 1){game.commodityValues.wood = 1}
    if(game.commodityValues.iron < 2){game.commodityValues.iron = 2}
    if(game.commodityValues.coal < 2){game.commodityValues.coal = 2}
    if(game.commodityValues.goods < 3){game.commodityValues.goods = 3}
    if(game.commodityValues.luxury < 3){game.commodityValues.luxury = 3}

    return game
}

const handleProduce = (game) => {
    let player = game.players[game.turnIndex]
    
    //increase prices
    for(let i = 0; i < player.productionCards[player.producingIndex].price.length; i++){
        game.commodityValues[player.productionCards[player.producingIndex].price[i].name]++
    }

    
    //give player commodies
    for(let i = 0; i < player.producingArray.length; i++){
        player.commodies.push(player.producingArray[i])
    }

    //remove production card from player and give player new production card
    player.productionCards.splice(player.producingIndex, 1 , createProductionCard())

    game = checkCommodityValues(game)
    player.producingIndex = null
    player.pickingProduceItems = false
    player.producingArray = []
    game.players[game.turnIndex] = player

    if(player.commodies.length > player.commodityMax){
        game.action = "DISCARD"
        game.messageFeed.push(`${player.name} must discard ${player.commodies.length - player.commodityMax} commodies.`)
        return game
    }else{
        game.messageFeed.push(`${player.name} produced.`)
        return setNextTurn(game)
    }
        
}

const handleAuctionOut = (game) => {
    game.players[game.auctionIndex].inBid = false
    return setNextBidder(game)
}

const handleSellCommodity = (game, sellingCommodity, amount) => {
    let player = game.players[game.turnIndex]
    
    //remove that many of that type of commodity from the current player
    for(let i = 0; i < amount; i++){
        player.commodies.splice(player.commodies.findIndex((commodity) => {return commodity.name === sellingCommodity}), 1)
    }

    //increase that players money
    player.money += parseInt(game.commodityValues[sellingCommodity]) * amount
    game.messageFeed.push(`${player.name} sold ${amount} ${sellingCommodity} for $${parseInt(game.commodityValues[sellingCommodity]) * amount}`)

    //decrese the price of that commodity accordingly
    game.commodityValues[sellingCommodity] -= amount

    game = checkCommodityValues(game)
    player.selling = false
    player.soldAmount = 0
    game.players[game.turnIndex] = player
    game.sellAmount = 0;
    game.sellingCommodity = null
    game = setNextTurn(game)
    return game

}

const handleBuyTown = (game) =>{
    let player = game.players[game.turnIndex]

    if(game.action === "BUY_TOWN_ANY"){
        game.townBuyingArray = []
        game.messageFeed.push(`${player.name} Purchased a using any ${game.avaiableTown.anyPrice}`)
    }else if(game.action === "BUY_TOWN_SPECIFIC"){
        for(let i = 0; i < game.avaiableTown.specificPrice; i++){
            player.commodies.splice(player.commodies.findIndex((commodity) => {return commodity.name === game.avaiableTown.specificType}), 1)
        }
        game.messageFeed.push(`${player.name} Purchased a town for ${game.avaiableTown.specificPrice} ${game.avaiableTown.specificType}`)
    }   

    player.pickingTownCommodies = false
    player.towns.push(game.avaiableTown)
    game.avaiableTown = game.townDeck.splice(0,1)[0]
    game.players[game.turnIndex] = player

    return setNextTurn(game)
}

const handleBuyBuilding = (game) => {
    
    player = game.players[game.turnIndex]
    
    //make the player pay for the building
    player.money -= game.shownBuildings[game.buildingBuyIndex].price
    game.messageFeed.push(`${player.name} Purchased ${game.shownBuildings[game.buildingBuyIndex].name} for $${game.shownBuildings[game.buildingBuyIndex].price}`)
    
    //give the building to the player and refill the sold building slot
    player.buildings.push(...game.shownBuildings.splice(game.buildingBuyIndex, 1, ...game.buildingDeck.splice(0,1)))

    //set player.buyingBuilding back to false and game.buldingBuyIndex = null
    player.buyingBuilding = false
    game.buldingBuyIndex = null
    game.players[game.turnIndex] = player
    return setNextTurn(game)
}

module.exports = {
    shuffle,
    createTownDeck,
    createRailRoadDeck,
    initalizeBoard,
    addPlayer,
    createProductionCard,
    handleAuctionStart,
    handleAuctionRound,
    handleAuctionOut,
    handleProduce,
    setNextBidder,
    setNextTurn,
    handleSellCommodity,
    handleBuyTown,
    handleBuyBuilding
}