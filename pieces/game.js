class Game {
    //players will be an object with each of the players as a key
        //can use the length of object to find number of players
        //each player will be an instance of the Player class
    constructor(players, roomId, railroads, buildings, towns, commodies){
        this.players = players,
        this.roomId = roomId,
        this.currentPlayersTurn = {}
        this.railRoadDeck = [...railroads],
        this.buildingDeck = [...buildings],
        this.townDeck = [...towns],
        this.commodies = [...commodies]
        this.wheatValue = 1,
        this.woodValue = 1,
        this.coalValue = 2,
        this.ironValue = 2,
        this.goodValue = 3,
        this.luxuryValue = 3,
        this.avaiableRailRoadOne = {},
        this.avaiableRailRoadTwo = {},
        this.avaiableBuildingOne = {},
        this.avaiableBuildingTwo = {},
        this.avaiableBuildingThree = {},
        this.avaiableBuildingFour = {},
        this.avaiableTown = {}
    }
    //what attributes does a game have that 
    initalizeBoard(numPlayers){
        
    }
    
}


module.exports = Game