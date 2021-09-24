import { pasteHotelsItems } from './modules/hotels-carousel.js';
import { countFunctionInc } from './modules/counter-inc.js';
import { countFunctionDec } from './modules/counter-dec.js';
import {
  counterPeopleInput, filterPeople, adultsBtnInc, adultsBtnDec, childrenBtnInc,
  childrenBtnDec, roomsBtnInc, roomsBtnDec,
} from './modules/variables.js';

const focusFilter = () => {
  filterPeople.classList.toggle('header__people_filter_focus');
};
counterPeopleInput.addEventListener('click', focusFilter);

adultsBtnInc.addEventListener('click', () => countFunctionInc('adults'));
adultsBtnDec.addEventListener('click', () => countFunctionDec('adults'));
childrenBtnInc.addEventListener('click', () => countFunctionInc('children'));
childrenBtnDec.addEventListener('click', () => countFunctionDec('children'));
roomsBtnInc.addEventListener('click', () => countFunctionInc('rooms'));
roomsBtnDec.addEventListener('click', () => countFunctionDec('rooms'));

pasteHotelsItems();
