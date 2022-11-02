class Building {
    constructor(
      name,
      price,
      numberInDeck,
      upgradable,
      pointChanger,
      turnChanger,
      playerChanger,
      imageLink,
      upgradedImageLink
    ) {
      this.name = name;
      this.price = price;
      this.numberInDeck = numberInDeck;
      this.upgradable = upgradable;
      this.pointChanger = pointChanger;
      this.turnChanger = turnChanger;
      this.playerChanger = playerChanger;
      this.imageLink = imageLink;
      this.upgradedImageLink = upgradedImageLink;
    }
    action() {
      //methods for the action eahc will if they have one
    }
  }
 const buildings = [
    new Building("iron1",5,1,12,false,true,false,"./assets/buildings/iron.jpg","./assets/buildings/double iron.jpg") ,
    new Building("luxury1",6,1,15,false,true,false,"./assets/buildings/luxury.jpg","./assets/buildings/doubleLuxury.jpg") ,
    new Building("wood1",4,1,9,false,true,false,"./assets/buildings/wood.jpg","./assets/buildings/doubleWood.jpg") ,
    new Building("wheat1",4,1,9,false,true,false,"./assets/buildings/wheat.jpg","./assets/buildings/doubleWheat.jpg") ,
    new Building("coal1",5,1,12,false,true,false,"./assets/buildings/coal.jpg","./assets/buildings/doubleCoal.jpg") ,
    new Building("goods1",6,1,15,false,true,false,"./assets/buildings/goods.jpg","./assets/buildings/doubleGoods.jpg") ,
    new Building("coal&iron",10,1,false,false,true,false,"./assets/buildings/coal&iron.jpg",false) ,
    new Building("goods&luxury",10,1,false,false,true,false,"./assets/buildings/good&luxury.jpg",false) ,
    new Building("wheat&wood",10,1,false,false,true,false,"./assets/buildings/wood&wheat.jpg",false) ,
    new Building("Cottage Industry",30,1,false,false,false,true,"./assets/buildings/cottageIndustry.jpg",false) ,
    new Building("Warehouse",10,2,false,false,false,true,"./assets/buildings/warehouse.jpg",false) ,
    new Building("Factory",40,2,false,false,false,true,"./assets/buildings/factory.jpg",false) ,
    new Building("Smuggler",20,1,false,false,false,true,"./assets/buildings/smuggler.jpg",false) ,
    new Building("Black Market",30,1,false,false,false,true,"./assets/buildings/blackMarket.jpg",false) ,
    new Building("Mayors Office",30,1,false,true,false,false,"./assets/buildings/mayorsOffice.jpg",false) ,
    new Building("Bank",30,1,false,true,false,false,"./assets/buildings/bank.jpg",false) ,
    new Building("Rail Baron",30,1,false,true,false,false,"./assets/buildings/railBaron.jpg",false) ,
    new Building("Govenors Mansion",30,1,false,true,false,false,"./assets/buildings/govenorsMansion.jpg",false) ,
    new Building("Export Company",30,1,false,false,true,false,"./assets/buildings/exportCompany.jpg",false) ,
    new Building("Brick Works",25,1,false,false,true,false,"./assets/buildings/brickWorks.jpg",false) ,
    new Building("Construction Company",20,1,false,false,true,false,"./assets/buildings/constructionCompany.jpg",false) ,
    new Building("Auction House",15,1,false,false,true,false,"./assets/buildings/auctionHouse.jpg",false) ,
    new Building("Freight Company",25,1,false,false,true,false,"./assets/buildings/freightCompany.jpg",false) ,
    new Building("Factory",40,2,false,false,false,true,"./assets/buildings/factory.jpg",false) ,
    new Building("Warehouse",10,2,false,false,false,true,"./assets/buildings/warehouse.jpg",false) 
 ]

module.exports = buildings
  