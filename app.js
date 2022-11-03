const Express = require('express')
const Http = require("http").Server(Express)
const Game = require('./pieces/game')
const Player = require('./pieces/player')
const pieces = require('./pieces/index')
const Socketio = require("socket.io")(Http, {
    cors: {
        origin: "*",
    }
})

let game = null
playerNames = []

//HELPER FUNCTION
function shuffle(array) {
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

function createTownDeck(numPlayers, townDeck){
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

function createRailRoadDeck(numPlayers, railRoadDeck){
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

Socketio.on("connection", async socket => {
    socket.on("eventName", dataPassedWithEvent => {
        //do something with the data
        //emit an event with some new data
        socket.broadcast("response event", modeifiedData)
    })

    socket.on("startGame", data => {
        //use the roomId to get the names of the players currently in that room
        //create new player instancves for each of those players currently in the room

        //FOR TESTING THIS WILL  BE ACTUAL PLAYER NAMES 
        const playerNames = ["Joe", "Liam", "carl", "john"]
        //code to get an array of all players in the room
        let players = []
        for(let i = 1; i <= playerNames.length; i++){
            players.push(new Player(playerNames[i-1]))
        }

        let railRoadDeck = createRailRoadDeck(playerNames.length, [...pieces.railroads])
        let buildingDeck = shuffle([...pieces.buildings])
        let townDeck = createTownDeck(playerNames.length, [...pieces.towns])
        let commodies =[...pieces.commodies]

        game = new Game(
            players, 
            data.roomId, 
            railRoadDeck,
            buildingDeck,
            townDeck,
            commodies
        )

        Socketio.to(data.roomId).emit("gameStarted", game)
    })
    
    socket.on("moveStart", data => {console.log(data)})

    socket.on("createRoom", data => {
        socket.join(data.roomId)
        Socketio.to(socket.id).emit("joinedGame", data)
    })

    socket.on("joinRoom", data => {
        if(Socketio.sockets.adapter.rooms.get(data.roomId)){
            socket.join(data.roomId)
            Socketio.to(socket.id).emit("joinedGame", data)
        }else{
            Socketio.to(socket.id).emit("invalidRoom", data)
        }
    })
})


const PORT = process.env.PORT || 3000

Http.listen(PORT, () => {
    console.log(`listening on port : ${PORT}...`)
})

