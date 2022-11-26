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
      this.pointChanger = pointChanger
      this.turnChanger = turnChanger;
      this.playerChanger = playerChanger;
      this.imageLink = imageLink;
      this.upgradedImageLink = upgradedImageLink;
      this.upgraded = false;
    }
  }
 const buildings = [
    new Building("Iron Deposit",5,1,12,false,true,false,"iron.jpg","doubleIron.jpg") ,
    new Building("Vineyard",6,1,15,false,true,false,"luxury.jpg","doubleLuxury.jpg") ,
    new Building("Lumbar Yard",4,1,9,false,true,false,"wood.jpg","doubleWood.jpg") ,
    new Building("Wheat Field",4,1,9,false,true,false,"wheat.jpg","doubleWheat.jpg") ,
    new Building("Coal Deposit",5,1,12,false,true,false,"coal.jpg","doubleCoal.jpg") ,
    new Building("Tool & Die",6,1,15,false,true,false,"goods.jpg","doubleGoods.jpg") ,
    new Building("Coal / Iron Trading Firm",10,1,false,false,true,false,"coal&iron.jpg",false) ,
    new Building("Goods / Luxury Trading Firm",10,1,false,false,true,false,"good&luxury.jpg",false) ,
    new Building("Wheat / Wood Trading Firm",10,1,false,false,true,false,"wood&wheat.jpg",false) ,
    new Building("Cottage Industry",30,1,false,false,false,true,"cottageIndustry.jpg",false) ,
    new Building("Warehouse",10,2,false,false,false,true,"warehouse.jpg",false) ,
    new Building("Factory",40,2,false,false,false,true,"factory.jpg",false) ,
    new Building("Smuggler",20,1,false,false,false,true,"smuggler.jpg",false) ,
    new Building("Black Market",30,1,false,false,false,true,"blackMarket.jpg",false) ,
    new Building("Mayors Office",30,1,false,true,false,false,"mayorsOffice.jpg",false) ,
    new Building("Bank",30,1,false,true,false,false,"bank.jpg",false) ,
    new Building("Rail Baron",30,1,false,true,false,false,"railBaron.jpg",false) ,
    new Building("Govenors Mansion",30,1,false,true,false,false,"govenorsMansion.jpg",false) ,
    new Building("Export Company",30,1,false,false,true,false,"exportCompany.jpg",false) ,
    new Building("Brick Works",25,1,false,false,true,false,"brickWorks.jpg",false) ,
    new Building("Auction House",15,1,false,false,true,false,"auctionHouse.jpg",false) ,
    new Building("Factory",40,2,false,false,false,true,"factory.jpg",false) ,
    new Building("Warehouse",10,2,false,false,false,true,"warehouse.jpg",false) 
 ]

module.exports = buildings
  
