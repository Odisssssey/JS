'use strict';

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

function OrdersTeleportationPoint(title, x, y, z) {
  const point = Object.create(OrdersTeleportationPoint.prototype);
  point.title = title;
  point.x = x;
  point.y = y;
  point.z = z;
  return point;
}

OrdersTeleportationPoint.prototype = {
  getDistance(x, y, z) {
    return Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2) + Math.pow((this.z - z), 2));
  }
};

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц`);

/*--2--*/

function OrdersTeleportationPointLocator(points) {
  const locator = Object.create(OrdersTeleportationPointLocator.prototype);
  locator.points = points;
  return locator;
}

OrdersTeleportationPointLocator.prototype = {
  getClosest(x, y, z) {
    let myId;
    this.points.forEach(function (id, i){
      if(i === 0){
        myId = id;
      }
      if(myId.getDistance(x, y, z) > id.getDistance(x, y, z)) {
        myId = id;
      }
    });
    return myId;
  }
};

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title, ...point.coords));
const locator = new OrdersTeleportationPointLocator(points);
console.log(locator.title);
const closestPoint = locator.getClosest(333, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);
