class Stock{
    constructor(name, imageLink){
      this.name = name;
      this.imageLink = imageLink;
      this.value = 0;
    }
  }

  let wheat = new Stock('wheat', ' ./assets/commodies/wheat.png');
  wheat.value = 1;
  let wood = new Stock('wood',  ' ./assets/commodies/wood.png');
  wood.value = 1;
  let iron = new Stock('iron', ' ./assets/commodies/iron.png');
  iron.value = 2;
  let coal = new Stock('coal',  ' ./assets/commodies/coal.png');
  coal.value = 2;
  let goods = new Stock('goods', ' ./assets/commodies/goods.png');
  goods.value = 3;
  let luxury = new Stock('luxury',  ' ./assets/commodies/luxury.png');
  luxury.value = 3;

  const stocks = [
    wheat,
    wood,
    iron,
    coal,
    goods,
    luxury,
  ]
  
  module.exports = {stocks:stocks,Stock}