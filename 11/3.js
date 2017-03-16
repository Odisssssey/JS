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
];

var createButton = function createButton(title, onclick) {
  return {
    title,
    onclick,
    click() {
       console.log(this.onclick);
    }
  };
};

function createBuyButtons(positions){
  let sds = [];
  positions.forEach(function (id, i){
    sds.push(createButton.call(id, "купить", `${id.title} добавлен в корзину.`));
    //sds[i].click();
  });
  
  return sds;
}

const buttons = createBuyButtons(positions);
console.log(buttons);
buttons[0].click();
buttons[2].click();
buttons[1].click();
