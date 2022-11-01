const Express = require('express')
const Http = require("http").Server(Express)
const Socketio = require("socket.io")(Http, {
    cors: {
        origin: "https://test-game-birrds-eye-vue.herokuapp.com/",
    }
})

let position = {
    x : 200,
    y : 200
}

Socketio.on("connection", socket => {
    socket.emit("position", position);

    socket.on("move", data => {
        switch (data) {
            case "left": 
                position.x -= 10;
                Socketio.emit("position", position);
                break;
            case "right": 
                position.x += 10;
                Socketio.emit("position", position);
                break;
            case "up": 
                position.y -= 10;
                Socketio.emit("position", position);
                break;
            case "down": 
                position.y += 10;
                Socketio.emit("position", position);
                break;
        }
    })
})

const PORT = process.env.PORT || 3000

Http.listen(PORT, () => {
    console.log(`listening on port : ${PORT}...`)
})