const Express = require('express')
const Http = require("http").Server(Express)
const Game = require('./pieces/game')
const Player = require('./pieces/player')
const logic = require('./pieces/gameLogic')
const { Socket } = require('socket.io')
const Socketio = require("socket.io")(Http, {
    cors: {
        origin: "*",
    }
})

Socketio.on("connection", async socket => {
    socket.on("startGame", data => {
        let game = logic.initalizeBoard(data.game)
        data.game = game
        Socketio.to(data.roomId).emit("gameStarted", data)
    })
    
    //TEST FUNCTION FOR AN @CLICK ON A MESH 
    socket.on("moveStart", data => {console.log(data)})

    socket.on("createRoom", data => {
        socket.join(data.roomId)
        data.game = new Game(data.roomId)
        Socketio.to(socket.id).emit("joinedRoom", data)
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
})

const PORT = process.env.PORT || 3000
Http.listen(PORT, () => {
    console.log(`listening on port : ${PORT}...`)
})

