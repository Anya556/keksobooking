import { getNumberPng, getSomeNumber, getRandomInteger, getRandomArrayElement } from './util.js';

const SIMILAR_OFFER_COUNT = 10;

const Author = {
  avatar: 'img/avatars/user' + getNumberPng() + '.png',
};

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

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const checkins = [
  '12:00',
  '13:00',
  '14:00',
];

const checkouts = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createRandomArrayFromData =(data) => {
  const newArray = [];
  const newArrayLength = getSomeNumber(1, data.length);

  for (let k= 1; k <= newArrayLength ; k++) {
    const indexOfArray = getSomeNumber(0, data.length-1);
    const valueOfIndex = data[indexOfArray];
    if (!newArray.includes(valueOfIndex)) {
      newArray.push(valueOfIndex);
    }

  }
  return newArray;
}

// const getNewPhotos = () => {

//   let newArray = [];
//   let newArrayLength = getSomeNumber(1, photos.length);

//   for (let k= 1; k <= newArrayLength ; k++) {
//     let indexOfArray = getSomeNumber(0, photos.length-1);
//     let valueOfIndex = photos[indexOfArray];
//     if (!newArray.includes(valueOfIndex)) {
//       newArray.push(valueOfIndex);
//     }

//   }
//   return newArray;
// };

const createOffer = () => {
  return {
    title:'The best offer!',
    address: getRandomInteger(LocationX.MIN, LocationX.MAX, LocationX.AFTER_POINT) + ', ' + getRandomInteger(LocationY.MIN, LocationY.MAX, LocationY.AFTER_POINT),
    price: getSomeNumber(Price.MIN, Price.MAX),
    type: getRandomArrayElement(types),
    rooms:  getSomeNumber(Rooms.MIN, Rooms.MAX),
    guests: getSomeNumber(Guests.MIN, Guests.MAX),
    checkin: getRandomArrayElement(checkins),
    checkout: getRandomArrayElement(checkouts),
    features: createRandomArrayFromData(features),
    description: 'The best offer for families with children.',
    photos: createRandomArrayFromData(photos),
  };
};
createOffer;
const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
//console.log(similarOffers);
export { Author, Location, createOffer, similarOffers, features, photos };
