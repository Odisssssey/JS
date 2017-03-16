const positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    available: 7,
    holded: 0
  },
  {
    title: 'Ховерборд Mattel 2016',
    available: 4,
    holded: 5
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    available: 1,
    holded: 1
  }
]


var formatFull = function formatFull() {
  return `${this.title}:\n\tдоступно ${this.available} шт.\n\tв резерве ${this.holded} шт.`;
};

var formatLite = function formatLite() {
  return `${this.title} (${this.available} + ${this.holded})`;
};

function show(format) {
  console.log(format);
}


function showPositions(list, formatter){
  list.forEach(function (id, i){
    if (formatter == formatFull){
      console.log(formatFull.call(id));
    }else{
      console.log(formatLite.call(id));
    }
  });

  
}

showPositions(positions, formatFull);
console.log('---');
showPositions(positions, formatLite);
