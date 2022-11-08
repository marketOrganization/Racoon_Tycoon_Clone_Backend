class Game {
    constructor(roomId){
        this.roomId = roomId
        this.action = null
        this.messageFeed = []
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
            goods : 3,
            luxury : 3,
        },
        
        //auctionAttributes
        this.auctionCardIndex = null
        this.turnIndex = null
        this.auctionIndex = null
        this.auction = null
        this.bid = 0
        this.highestBidderIndex = null

        //selling attributes
        this.sellingCommodity = null
        this.sellAmount = 0

        //buying attributes
        this.townBuyingArray = []
        this.buildingBuyIndex = null
    }
}
    


module.exports = Game