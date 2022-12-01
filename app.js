const Express = require('express')
const Http = require("http").Server(Express)
const Game = require('./pieces/game')
const Player = require('./pieces/player')
const logic = require('./pieces/gameLogic')
const { Socket } = require('socket.io')
const e = require('express')
const Socketio = require("socket.io")(Http, {
    cors: {
        origin: "*",
    }
})

const games = {}

Socketio.on("connection", async socket => {

    socket.on("startGame", data => {
        let room = null
        let peopleInRoom = 0
        let peopleInGame = 0
        Socketio.sockets.adapter.rooms.get(data.roomId)? room = Socketio.sockets.adapter.rooms.get(data.roomId):room = false
        if(room){
            room.forEach(()=>{
                peopleInRoom+=1
            })
        }
        if(data.game){
            peopleInGame = data.game.players.length
        }
        if(peopleInGame == peopleInRoom){
            let game = logic.initalizeBoard(data.game)
            data.game = game
            Socketio.to(data.roomId).emit("gameStarted", data)
        }else{
            Socketio.to(data.roomId).emit("invalidRoom", data)
        }
    })

    socket.on("createRoom", data => {
        if(!Socketio.sockets.adapter.rooms.get(data.roomId)){
        socket.join(data.roomId)
        data.game = new Game(data.roomId)
        games[data.roomId] = data.game
        Socketio.to(socket.id).emit("joinedRoom", data)
        }else{
            Socketio.to(socket.id).emit("invalidRoom", data)
        }
    })

    socket.on("sendMessage", data => {
        socket.to(data.recievrID).emit()
    })

    socket.on("joinRoom", data => {
        if(Socketio.sockets.adapter.rooms.get(data.roomId)){
            socket.join(data.roomId)
            socket.to(data.roomId).emit("playerJoined")
            Socketio.to(socket.id).emit("joinedRoom", data)
        }else{
            Socketio.to(socket.id).emit("invalidRoom", data)
        }
    })

    socket.on("welcomePlayer", data => {
        socket.to(data.roomId).emit("updateGame", data)
    })

    socket.on("addNameToGame", data =>{
        const player = new Player(data.name)
        let game = logic.addPlayer(data.game, player)
        newData = {
            ...data,
            game: game,
        }
        Socketio.to(socket.id).emit("updatePlayer", {player:player})
        Socketio.to(data.roomId).emit("updateGame", newData)
    })

    socket.on("auctionRound", data => {
        data.game = logic.handleAuctionRound(data.game, data.newBid)
        if(data.game){
            Socketio.to(data.game.roomId).emit("updateGame", data)
        }else{
            Socketio.to(socket.id).emit("emitMessage", "Invalid Bid")
        }
    })

    socket.on("REJOIN_1", data => {
        if(Socketio.sockets.adapter.rooms.get(data.gameId)){
            socket.join(data.gameId)
            data.socketId = socket.id
            socket.to(data.gameId).emit("REJOIN_2", data)
        }
    })

    socket.on("REJOIN_3", (data) => {
        socket.to(data.socketId).emit("REJOIN_4", data)
    })

    socket.on("REJOIN_5", (data) => {
        Socketio.to(data.socketId).emit("REJOIN_6", data)
    })
    
    socket.on("ACTION", game => {
        switch(game.action){
            case "START_AUCTION":
                game = logic.handleAuctionStart(game, game.payload)
                break
            
            case "AUCTION_ROUND":
                game = logic.handleAuctionRound(game, game.payload)
                break

            case "AUCTION_OUT":
                game = logic.handleAuctionOut(game)
                break
            
            case "PRODUCE":
                game = logic.handleProduce(game)
                break
            
            case "NEXT_TURN":
                game = logic.setNextTurn(game)
                break
            
            case "SELL":
                game = logic.handleSellCommodity(game, game.sellingCommodity, game.sellAmount)
                break

            case "BUY_TOWN_ANY":
            case "BUY_TOWN_SPECIFIC":
                game = logic.handleBuyTown(game)
                break
            
            case "BUY_BUILDING":
                game = logic.handleBuyBuilding(game)
        }
        Socketio.to(game.roomId).emit("UPDATE_GAME", game)
    })
})

const PORT = process.env.PORT || 3000
Http.listen(PORT, () => {
    console.log(`listening on port : ${PORT}...`)
})

