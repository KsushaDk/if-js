const hotelTitle = document.querySelector('.hotels__title');

const counterPeopleInput = document.querySelector('.header__people');
const filterPeople = document.getElementById('header__people_filter');

const shownInpAd = document.getElementById('people_ad');
const shownInpCh = document.getElementById('people_ch');
const shownInpRm = document.getElementById('people_rm');

const currentInputAd = document.getElementById('adults');
const currentInputCh = document.getElementById('children');
const currentInputRm = document.getElementById('rooms');

const adultsBtnInc = document.getElementById('adults__btn-inc');
const adultsBtnDec = document.getElementById('adults__btn-dec');
const childrenBtnInc = document.getElementById('children__btn-inc');
const childrenBtnDec = document.getElementById('children__btn-dec');
const roomsBtnInc = document.getElementById('rooms__btn-inc');
const roomsBtnDec = document.getElementById('rooms__btn-dec');

const childrenSelector = document.querySelector('.header__people_children_age');
const addedSelector = document.querySelector('div.header__people_children_age select');

const colorBorderBlur = '1px solid #CECECE';
const colorBlur = '#CECECE';
const colorBorderFocus = '1px solid #3077c6';
const colorFocus = '#3077c6';

export {
  counterPeopleInput, filterPeople, shownInpAd, shownInpCh, shownInpRm, currentInputAd, currentInputCh, currentInputRm,
  adultsBtnInc, adultsBtnDec, childrenBtnInc, childrenBtnDec, roomsBtnInc, roomsBtnDec, childrenSelector, addedSelector,
  colorBorderBlur, colorBlur, colorBorderFocus, colorFocus, hotelTitle,
};
