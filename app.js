const Express = require('express')
const Http = require("http").Server(Express)
const Socketio = require("socket.io")(Http, {
    cors: {
        origin: "*",
    }
})

// global variable of such you can alter
let variable = {

}

Socketio.on("connection", socket => {
    socket.on("eventName", dataPassedWithEvent => {
        //do something with the data
        //emit an event with some new data
        socket.emit("response event", modeifiedData)
    })

    //wil have many of these
})

const PORT = process.env.PORT || 3000

Http.listen(PORT, () => {
    console.log(`listening on port : ${PORT}...`)
})