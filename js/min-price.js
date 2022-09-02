const minPrices = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalo: 0,
};

const getMinPriceByAppartsmentsType = (types) => {
  //console.log(minPrices[types.type]);
  return minPrices[type];
};

export {getMinPriceByAppartsmentsType};
