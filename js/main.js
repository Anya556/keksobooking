let getSomeNumber = (min, max) => {
  if (min < 0 || max < 0 || max < min) {
    return ('Incorrect range');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getSomeNumber(0.3, 10.7));


let getRandomInteger = (min, max, countAfterPoint) => {
  if(min < 0 || min > max || max <= 0) {
    return -1;
  }

  let number = Math.random() * (max - min) + min;
  return number.toFixed(countAfterPoint);
}
//console.log(getRandomInteger(4.3, 15.2, 1));

const Author = {
  avatar: 'img/avatars/user' + getSomeNumber(1, 10) + '.png',
};

const Offer = {};
const Title = 'The best offer!';
const Adress;
const price = getSomeNumber(5, 40);
const TYPES = [palace, flat, house, bungalow];
const Rooms = getSomeNumber(1, 100);
const Guests = getSomeNumber(1, 5);
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const Description = 'The best offer for families with children.';
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const Location = {
  x: getRandomInteger(35.65000, 35.70000, 5),
  y: getRandomInteger(139.70000, 139.80000, 5),
};
