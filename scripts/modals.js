const cityDrinkButton = document.getElementById('citydrink-button');
const sncfButton = document.getElementById('sncf-button');
const muglerButton = document.getElementById('mugler-button');
const nationalGeographicButton = document.getElementById('ng-button');

const closeCityDrink = document.getElementById('close-citydrink');
const closeSncf = document.getElementById('close-sncf');
const closeMugler = document.getElementById('close-mugler');
const closeNationalGeographic = document.getElementById('close-ng');

const cityDrinkPopup = document.getElementById('citydrink-popup');
const sncfPopup = document.getElementById('sncf-popup');
const muglerPopup = document.getElementById('mugler-popup');
const nationalGeographicPopup = document.getElementById('ng-popup');

cityDrinkButton.addEventListener('click', () => {
    cityDrinkPopup.style.display = 'block';
});

closeCityDrink.addEventListener('click', () => {
    cityDrinkPopup.style.display = 'none';
});

sncfButton.addEventListener('click', () => {
    sncfPopup.style.display = 'block';
});

closeSncf.addEventListener('click', () => {
    sncfPopup.style.display = 'none';
});

muglerButton.addEventListener('click', () => {
    muglerPopup.style.display = 'block';
});

closeMugler.addEventListener('click', () => {
    muglerPopup.style.display = 'none';
});

nationalGeographicButton.addEventListener('click', () => {
    nationalGeographicPopup.style.display = 'block';
});

closeNationalGeographic.addEventListener('click', () => {
    nationalGeographicPopup.style.display = 'none';
});