class Player{
    constructor(name){
      this.name = name;
      this.railRoads = [];
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
  }

  module.exports = Player