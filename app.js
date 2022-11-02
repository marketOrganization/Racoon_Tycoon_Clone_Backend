const Express = require('express')
const Http = require("http").Server(Express)
const Game = require('./pieces/game')
const pieces = require('./pieces/index')
const Socketio = require("socket.io")(Http, {
    cors: {
        origin: "*",
    }
})

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

Socketio.on("connection", socket => {
    socket.on("eventName", dataPassedWithEvent => {
        //do something with the data
        //emit an event with some new data
        socket.emit("response event", modeifiedData)
    })

    socket.on("startGame", data => {
        let railRoadDeck = shuffle([...pieces.railroads])
        let buildingDeck = shuffle([...pieces.buildings])
        let townDeck = shuffle([...pieces.towns])
        let commodies = shuffle([...pieces.commodies])

        let game = new Game(
            data.players, 
            data.roomId, 
            shuffle([...pieces.railroads]),
            shuffle([...pieces.buildings]),
            shuffle([...pieces.towns]),
            shuffle([...pieces.commodies])
        )

        socket.emit("gameStarted", game)
    })

})


const PORT = process.env.PORT || 3000

Http.listen(PORT, () => {
    console.log(`listening on port : ${PORT}...`)
})

