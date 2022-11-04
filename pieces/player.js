const logic = require("./gameLogic")
class Player{
    constructor(name){
      this.name = name;
      this.railroads = [];
      this.towns = [];
      this.buildings = [];
      this.commodies = {
        wheat : 0,
        wood : 0,
        iron : 0,
        coal : 0,
        goods : 0,
        luxury : 0,
      };
      this.productionCards = [];
      this.money = 10;
      this.commodityMax = 10;
      this.handSize = 3;
      this.productionMax = 3;
    }
    produce(index, producing) {
      for(const commodity in producing){
        for(let i = 0; i < producing[commodity]; i++){
          this.commodies[commodity] += 1;
        }
      }
      this.productionCards.splice(index,1,logic.createProductionCard())
      return this.productionCards[index].price
    }
  }
  module.exports = Player