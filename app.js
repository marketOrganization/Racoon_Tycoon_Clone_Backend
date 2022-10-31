const Express = require('express')
const { appendFile } = require('fs')
const Http = require("http").Server(Express)
const Socketio = require("socket.io")(Http)

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

const PORT = process.env.PORT

Http.use(cors(),function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
Http.use('/', (req,res) => {res.send({message:"i am root"})})

Http.listen(PORT, () => {
    console.log(`listening on port : ${PORT}...`)
})