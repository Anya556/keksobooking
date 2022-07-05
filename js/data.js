import { getSomeNumber, getRandomInteger, getRandomArrayElement } from './util.js';

//A number between 1 and 9 with a leading zero
const getNumberPng = () => {

  for (let i = 1; i <= 9; i++){
    return '0'+ i;
  }
};

const Author = {
  avatar: 'img/avatars/user' + getNumberPng() + '.png',
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
  const newArray = [];
  const newArrayLength = getSomeNumber(1, FEATURES.length);

  for (let k= 1; k <= newArrayLength ; k++) {
    const indexOfArray = getSomeNumber(0, FEATURES.length-1);
    const valueOfIndex = FEATURES[indexOfArray];
    if (!newArray.includes(valueOfIndex)) {
      newArray.push(valueOfIndex);
    }

  }
  return newArray;
}
//console.log(getNewFeature());

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
//console.log(getNewPHOTOS());


const SIMILAR_OFFER_COUNT = 10;
const LocationX = {
  MIN: 35.65000,
  MAX: 35.70000,
  AFTER_POINT: 5,
};
const LocationY = {
  MIN: 139.70000,
  MAX: 139.80000,
  AFTER_POINT: 5,
}
const Location = {
  x: getRandomInteger(LocationX.MIN, LocationX.MAX, LocationX.AFTER_POINT),
  y: getRandomInteger(LocationY.MIN, LocationY.MAX, LocationY.AFTER_POINT),
};
const Price = {
  MIN: 30,
  MAX: 100,
};
const Rooms = {
  MIN: 1,
  MAX: 3,
};
const Guests = {
  MIN: 1,
  MAX: 8,
};

//console.log(Location);
const createOffer = () => {
  return {
    title:'The best offer!',
    address: getRandomInteger(LocationX.MIN, LocationX.MAX, LocationX.AFTER_POINT) + ', ' + getRandomInteger(LocationY.MIN, LocationY.MAX, LocationY.AFTER_POINT),
    price: getSomeNumber(Price.MIN, Price.MAX),
    type: getRandomArrayElement(TYPES),
    rooms:  getSomeNumber(Rooms.MIN, Rooms.MAX),
    guests: getSomeNumber(Guests.MIN, Guests.MAX),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getNewFeature(),
    description: 'The best offer for families with children.',
    photos: getNewPHOTOS(),
  };
};
//console.log(createOffer());

const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
//console.log(similarOffers);
export { Author, similarOffers, Location };
