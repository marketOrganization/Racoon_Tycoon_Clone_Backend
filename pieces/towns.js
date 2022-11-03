class Town {
    constructor(specificPrice, specificType, anyPrice, imageLink,commodityImageLink) {
      this.specificPrice = specificPrice;
      this.specificType = specificType;
      this.anyPrice = anyPrice;
      this.imageLink = imageLink;
      this.inDeck = true;
      this.commodityImageLink = commodityImageLink;
    }
    removeFromDeck() {
      this.inDeck = false;
    }
  }

const towns = [
    new Town(2, "wheat", 4, "./assets/towns/2-wheat.jpg", "./assets/commodies/wheat.png") ,
    new Town(2, "wood", 4, "./assets/towns/2-wood.jpg", "./assets/commodies/wood.png") ,
    new Town(2, "iron", 4, "./assets/towns/2-iron.jpg", "./assets/commodies/iron.png") ,
    new Town(2, "coal", 4, "./assets/towns/2-coal.jpg", "./assets/commodies/coal.png") ,
    new Town(3, "wheat", 4, "./assets/towns/3-wheat.jpg", "./assets/commodies/wheat.png") ,
    new Town(3, "wood", 5, "./assets/towns/3-wood.jpg", "./assets/commodies/wood.png") ,
    new Town(3, "goods", 5, "./assets/towns/3-goods.jpg", "./assets/commodies/goods.png") ,
    new Town(3, "luxury", 5, "./assets/towns/3-luxury.jpg", "./assets/commodies/luxury.png") ,
    new Town(4, "wheat", 6, "./assets/towns/4-wheat.jpg", "./assets/commodies/wheat.png") ,
    new Town(4, "wood", 6, "./assets/towns/4-wood.jpg", "./assets/commodies/wood.png") ,
    new Town(4, "iron", 6, "./assets/towns/4-iron.jpg", "./assets/commodies/iron.png") ,
    new Town(4, "coal", 6, "./assets/towns/4-coal.jpg", "./assets/commodies/coal.png") ,
    new Town(5, "wheat", 8, "./assets/towns/5-wheat.jpg", "./assets/commodies/wheat.png") ,
    new Town(5, "wood", 8, "./assets/towns/5-wood.jpg", "./assets/commodies/wood.png") ,
    new Town(5, "goods", 8, "./assets/towns/5-goods.jpg", "./assets/commodies/goods.png") ,
    new Town(5, "luxury", 8, "./assets/towns/5-luxury.jpg", "./assets/commodies/luxury.png") 
]

module.exports = towns
