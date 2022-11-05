class Game {
    constructor(roomId){
        this.roomId = roomId
        this.players = []
        this.railRoadDeck = []
        this.buildingDeck = []
        this.townDeck = []
        this.commodies = []
        this.shownRailRoads = []
        this.shownBuildings = []
        this.avaiableTown = {}
        this.commodityValues = {
            wheat : 1,
            wood : 1,
            coal : 2,
            iron : 2,
            good : 3,
            luxury : 3,
        },

        //auctionAttributes
        this.currAuctionCard = null
        this.turnIndex = null
        this.auctionIndex = null
        this.auction = null
        this.bid = 0
    }
}
    


module.exports = Game