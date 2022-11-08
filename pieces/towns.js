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
    new Town(2, "wheat", 4, "2-wheat.jpg", "wheat.png") ,
    new Town(2, "wood", 4, "2-wood.jpg", "wood.png") ,
    new Town(2, "iron", 4, "2-iron.jpg", "iron.png") ,
    new Town(2, "coal", 4, "2-coal.jpg", "coal.png") ,
    new Town(3, "wheat", 4, "3-wheat.jpg", "wheat.png") ,
    new Town(3, "wood", 5, "3-wood.jpg", "wood.png") ,
    new Town(3, "goods", 5, "3-goods.jpg", "goods.png") ,
    new Town(3, "luxury", 5, "3-luxury.jpg", "luxury.png") ,
    new Town(4, "wheat", 6, "4-wheat.jpg", ".wheat.png") ,
    new Town(4, "wood", 6, "4-wood.jpg", "wood.png") ,
    new Town(4, "iron", 6, "4-iron.jpg", "iron.png") ,
    new Town(4, "coal", 6, "4-coal.jpg", "coal.png") ,
    new Town(5, "wheat", 8, "5-wheat.jpg", "wheat.png") ,
    new Town(5, "wood", 8, "5-wood.jpg", "wood.png") ,
    new Town(5, "goods", 8, "5-goods.jpg", "goods.png") ,
    new Town(5, "luxury", 8, "5-luxury.jpg", "luxury.png") 
]

module.exports = towns
