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
const getnumberPng = (number) => {
  for (let i = 1; i < number; i++){
    return number = '0'+ i;
  }
};
console.log(getnumberPng(10));

const Author = {
  avatar: 'img/avatars/user' + getnumberPng(10) + '.png',
};
console.log(Author);
const getRandomArrayElement = (elements) => {
  return elements[getSomeNumber(0, elements.length -1)];
};

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow'];
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'];
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'];



const getNewFeature = () => {
  let newArray = [];
  let newArrayLength = getSomeNumber(1, FEATURES.length);

  for (let k= 1; k <= newArrayLength ; k++) {
    let indexOfArray = getSomeNumber(0, FEATURES.length-1);
    let valueOfIndex = FEATURES[indexOfArray];
    if (!newArray.includes(valueOfIndex)) {
      newArray.push(valueOfIndex);
    }

  }
  return newArray;
}
console.log(getNewFeature());

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


const getNewPHOTOS = () => {

  let newArray = [];
  let newArrayLength = getSomeNumber(1, PHOTOS.length);

  for (let k= 1; k <= newArrayLength ; k++) {
    let indexOfArray = getSomeNumber(0, PHOTOS.length-1);
    let valueOfIndex = PHOTOS[indexOfArray];
    if (!newArray.includes(valueOfIndex)) {
      newArray.push(valueOfIndex);
    }

  }
  return newArray;
};
console.log(getNewPHOTOS());


const SIMILAR_OFFER_COUNT = 10;

const Location = {
  x: getRandomInteger(35.65000, 35.70000, 5),
  y: getRandomInteger(139.70000, 139.80000, 5),
};

console.log(Location);

const createOffer = () => {
  return {
    title:'The best offer!',
    address: getRandomInteger(35.65000, 35.70000, 5) + ', ' + getRandomInteger(139.70000, 139.80000, 5),
    price: getSomeNumber(30, 100),
    type: getRandomArrayElement(TYPES),
    rooms:  getSomeNumber(1, 3),
    guests: getSomeNumber(1, 8),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getNewFeature(),
    description: 'The best offer for families with children.',
    photos: getNewPHOTOS(),
  };
};
console.log(createOffer());

const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
console.log(similarOffers);
