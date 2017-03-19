function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  { title: 'Темная сторона Луны', coords: [500, 200, 97] },
  { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
  { title: 'Саратов', coords: [30, 91, 77] }
];

function LoyaltyCard(name, sum) {
  const card = Object.create(LoyaltyCard.prototype);
  card.name = name;
  card.sum = sum;
  return card;
}

LoyaltyCard.prototype = {
  owner : this.name,
  id : generateId(),
  balance(){return this.sum},
  discount(){
    if(this.sum<3000){return 0;}if((this.sum>=3000)&&(this.sum<5000)){return 3;}if((this.sum>=5000)&&(this.sum<10000)){return 5;}if(this.sum>=10000){return 7;}
  },
  getFinalSum(newOrderSum) {
    return newOrderSum/100*(100-this.discount());
  },
  append(newOrderSum){
    this.sum = this.sum + newOrderSum;
  },
  show(){
    console.log(`Карта ${this.id}:\n\tВладелец: ${this.name}\n\tБаланс: ${card.balance()}Q\n\tТекущая скидка: ${this.discount()}%`);
  },
};



const card = new LoyaltyCard('Иванов Иван', 6300);
console.log(card.balance());

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);

console.log(`Итоговая сумма для заказа на ${newOrderSum}Q по карте составит ${finalSum}Q. Скидка ${card.discount()}%.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance()}.`);
card.show();
