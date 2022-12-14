//A number between 1 and 9 with a leading zero
const getNumberPng = () => {

  for (let i = 1; i <= 9; i++){
    return '0'+ i;
  }
};

let getSomeNumber = (min, max) => {
  if (min < 0 || max < 0 || max < min) {
    return ('Incorrect range');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const getRandomInteger = (min, max, countAfterPoint) => {
  if(min < 0 || min > max || max <= 0) {
    return -1;
  }

  const number = Math.random() * (max - min) + min;
  return number.toFixed(countAfterPoint);
}


const getRandomArrayElement = (elements) => {
  return elements[getSomeNumber(0, elements.length -1)];
};

export { getNumberPng, getSomeNumber, getRandomInteger, getRandomArrayElement };
