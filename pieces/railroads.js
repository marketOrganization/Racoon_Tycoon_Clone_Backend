class RailRoad {
    constructor(name, minimumPrice, imageLink) {
      this.name = name;
      this.minimumPrice = minimumPrice;
      this.imageLink = imageLink;
      this.remainingInDeck = 4;
    }
  }

  const railroads = [
    new RailRoad("Skunk Works", 2, "skunk.jpg"),
    new RailRoad("Sly Fox", 3, "fox.jpg"),
    new RailRoad("Fat Cat", 4, "cat.jpg"),
    new RailRoad("Big Bear", 5, "bear.png"),
    new RailRoad("Top Dog", 6, "dog.png"),
    new RailRoad("Tycoon", 7, "tycoon.png"),
  ]

  module.exports = railroads
  