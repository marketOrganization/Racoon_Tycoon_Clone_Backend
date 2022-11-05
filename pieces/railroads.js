class RailRoad {
    constructor(name, minimumPrice, imageLink) {
      this.name = name;
      this.minimumPrice = minimumPrice;
      this.imageLink = imageLink;
      this.remainingInDeck = 4;
    }
    removeOneFromDeck() {
      this.remainingInDeck -= 1;
    }
  }

  const railroads = [
    new RailRoad("Skunk Works", 2, "/assets/railroads/skunk.jpg"),
    new RailRoad("Sly Fox", 3, " /assets/railroads/fox.jpg"),
    new RailRoad("Fat Cat", 4, " /assets/railroads/cat.jpg"),
    new RailRoad("Big Bear", 5, "/assets/railroads/bear.png"),
    new RailRoad("Top Dog", 6, "dog.png"),
    new RailRoad("Tycoon", 7, "/assets/railroads/tycoon.png"),
  ]

  module.exports = railroads
  