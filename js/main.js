let getSomeNumber = (min, max) => {
  if (min < 0 || max < 0 || max < min) {
    return ('Incorrect range');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

console.log(getSomeNumber(0.3, 10.7));



let getRandomInteger = (min, max, countAfterPoint) => {
  if(min < 0 || min > max || max <= 0) {
    return -1;
  }

  let number = Math.random() * (max - min) + min;
  return number.toFixed(countAfterPoint);
}
console.log(getRandomInteger(4.3, 15.2, 1));
