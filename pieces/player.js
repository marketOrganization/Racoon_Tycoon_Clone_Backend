const logic = require("./gameLogic")
class Player{
    constructor(name){
      this.name = name
      this.railroads = []
      this.towns = []
      this.buildings = []
      this.commodies = []
      this.money = 10
      this.commodityMax = 10
      this.handSize = 3

      //auction attributes
      this.highestBidder = false
      this.inBid = false
      this.isInTurn = false
      this.isInAuction = false
      this.currBidder = false

      //producing attributes
      this.pickingProduceItems = false
      this.producingIndex = null
      this.producingArray = []
      this.productionMax = 3
      this.productionCards = []
      this.discarding = false

      //selling attributes
      this.selling = false

      //buying town attributes
      this.pickingTownCommodies = false
      this.townBonus = 0;

      //buying buildings attributes
      this.buyingBuilding = false
    }
  }
  module.exports = Player