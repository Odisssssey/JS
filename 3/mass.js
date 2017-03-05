var positions = [
        'Отвертка ультрозвуковая WHO-D',
        'Ховерборд Mattel 2016',
        'Нейтрализатор FLASH black edition',
        'Меч световой FORCE (синий луч)',
        'Машина времени DeLorean',
        'Репликатор домашний STAR-94',
        'Лингвенсор 000-17',
        'Целеуказатель электронный WAY-Y'
      ];

lenMass = positions.length;
console.log("Список наименований");
for(var i=0, j=1; i<lenMass; i++, j++){
  console.log(j, positions[i]);
}

positions.push("Экзоскелет Trooper-111", "Нейроинтерфейс игровой SEGUN", "Семена дерева Эйва");

lenMass = positions.length;
console.log("\nОкончательный список наименований");
for(var i=0, j=1; i<lenMass; i++, j++){
  console.log(j, positions[i]);
}

var nameIndex = positions.indexOf('Машина времени DeLorean');
var someWords = positions.splice(nameIndex, 1);
positions.unshift(someWords[0])

lenMass = positions.length;
console.log("\nПринять в первую очередь");
for(var i=0, j=1; i<3; i++, j++){
  console.log(j, positions[i]);
}
