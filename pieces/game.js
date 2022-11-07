class Game {
    constructor(roomId){
        this.roomId = roomId
        this.action = null
        this.actionFeed = []
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
        this.auctionCardIndex = null
        this.turnIndex = null
        this.auctionIndex = null
        this.auction = null
        this.bid = 0
        this.highestBidderIndex = null
    }
}
    


module.exports = Game