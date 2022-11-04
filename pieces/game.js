class Game {
    //players will be an object with each of the players as a key
        //can use the length of object to find number of players
        //each player will be an instance of the Player class
    constructor(roomId){
        this.roomId = roomId,
        this.players = [],
        this.currentPlayersTurn = {}
        this.railRoadDeck = [],
        this.buildingDeck = [],
        this.townDeck = [],
        this.commodies = []
        this.commodityValues = {
            wheat : 1,
            wood : 1,
            coal : 2,
            iron : 2,
            good : 3,
            luxury : 3,
        }
        this.avaiableRailRoadOne = {},
        this.avaiableRailRoadTwo = {},
        this.avaiableBuildingOne = {},
        this.avaiableBuildingTwo = {},
        this.avaiableBuildingThree = {},
        this.avaiableBuildingFour = {},
        this.avaiableTown = {}
    }
}
    


module.exports = Game