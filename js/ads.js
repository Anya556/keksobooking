import { Author, features/*, photos*/ /*, similarOffers*/ } from './data.js';
//The module that will be responsible for generating markup of similar elements
const typeValues = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalo: 'Бунгало',
};



const cardTemplate = document.querySelector('#card').content;
const mapsBlock = document.querySelector('#map-canvas');

const renderOffer = (offer /*{ title, address, price, type, rooms, guests, checkin, checkout, description }*/) => {
  const offerCard = cardTemplate.cloneNode(true);

  offerCard.querySelector('.popup__title').textContent = offer.title;
  offerCard.querySelector('.popup__text--address').textContent = offer.address;
  offerCard.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  offerCard.querySelector('.popup__type').textContent = typeValues[offer.type];
  //console.log(typeValues[offer.type]);
  offerCard.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + '  гостей';
  offerCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;

  const featuresNode = offerCard.querySelector('.popup__features');
  const addFeatures = (feature) =>{
    featuresNode.querySelector('.popup__feature--' + feature).textContent = feature;
  };

  if( !!features.length ){
    features.forEach(feature => addFeatures(feature));
  } else {
    featuresNode.classList.add('hidden');
  }

  offerCard.querySelector('.popup__description').textContent = offer.description;

  //photos

  const popupPhotos = offerCard.querySelector('.popup__photos');
  const photoNode = popupPhotos.querySelector('.popup__photo');

  const addPhoto = (photo) => {
    //console.log('photo', photo);
    const clonePhoto = photoNode.cloneNode(true);
    //console.log('clonePhoto', clonePhoto);
    clonePhoto.src = photo;
    //console.log('clonePhoto.src', clonePhoto);
    popupPhotos.appendChild(clonePhoto);
  }
  //console.log('offer.photos', offer.photos);

  offer.photos.forEach(photo => addPhoto(photo));
  photoNode.classList.add('hidden');


  offerCard.querySelector('.popup__avatar').src = Author.avatar;
  //console.log(offer.photos);
  return offerCard;

}

const renderOffers = (offers) => {
  let offersBlockFragment = document.createDocumentFragment();

  //similarOffers.forEach(offer /*map*/ => {
  offers.forEach(offer => {
    offersBlockFragment.appendChild(renderOffer(offer/*map*/));
  });

  mapsBlock.appendChild(offersBlockFragment);
}

export { renderOffers };
