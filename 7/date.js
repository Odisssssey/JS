var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];


function lotCalculator(pos, amount){
  let count = Math.ceil(amount/pos.producer.lot);
  return {'lots': count, 'total': count*pos.price*pos.producer.lot};
}

function order(pos, amount){
  let res = lotCalculator(pos, amount);
  return `${pos.title} ${amount} штук: заказать партий ${res.lots}, стоимость ${res.total} Q`;
}

let result1 = order(positions[1], 15);
console.log(result1); // { lots: 2, total: 257600 }

let result2 = order(positions[2], 1);
console.log(result2); // { lots: 1, total: 57000 }

/*--2--*/

const deferedPayments = [];

function deferPay(producerInf, sum, dat){
  dat.setDate(dat.getDate() + producerInf.deferPeriod);
  deferedPayments.push({'paymentDate': dat, 'amount': sum, 'producer': producerInf});
}

function delay(pos, sum, dat){
  return deferPay({'name': pos.producer.name, 'deferPeriod': pos.producer.deferPeriod}, sum, dat);
}

delay(positions[0], 7200, new Date(2030, 4 - 1, 10));

console.log(deferedPayments.length); // 1
console.log(deferedPayments[0].producer.name); // Рязанский телепортостроительный завод
console.log(deferedPayments[0].amount); // 7200
console.log(deferedPayments[0].paymentDate); // Sat Apr 20 2030 00:00:00 GMT
