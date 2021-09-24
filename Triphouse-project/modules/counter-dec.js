import { filterValues } from './filter-values.js';
import {
  shownInpAd, shownInpCh, shownInpRm, currentInputAd, currentInputCh, currentInputRm, adultsBtnInc, adultsBtnDec,
  childrenBtnInc, childrenBtnDec, roomsBtnInc, roomsBtnDec, childrenSelector, colorBorderBlur, colorBlur, colorBorderFocus,
  colorFocus,
} from './variables.js';

export const countFunctionDec = (mode) => {
  if (mode === 'adults') {
    filterValues.adults--;
    currentInputAd.value = filterValues.adults;
    shownInpAd.setAttribute('placeholder', `${currentInputAd.value}` + ' Adults');

    if (currentInputAd.value < 1) {
      adultsBtnDec.disabled = true;
      adultsBtnDec.style.border = colorBorderBlur;
      adultsBtnDec.style.color = colorBlur;
    } else {
      adultsBtnDec.disabled = false;
      adultsBtnInc.disabled = false;
      adultsBtnDec.style.border = colorBorderFocus;
      adultsBtnDec.style.color = colorFocus;
      adultsBtnInc.style.border = colorBorderFocus;
      adultsBtnInc.style.color = colorFocus;
    }
  } else if (mode === 'children') {
    filterValues.children--;
    currentInputCh.value = filterValues.children;
    shownInpCh.setAttribute('placeholder', `${currentInputCh.value}` + ' Children');

    if (currentInputCh.value < 1) {
      childrenSelector.style.display = 'none';
    } else {
      const selectDec = document.querySelector('.header__people_children_age select');
      selectDec.remove();
    }

    if (currentInputCh.value <= 0) {
      childrenBtnDec.disabled = true;
      childrenBtnDec.style.border = colorBorderBlur;
      childrenBtnDec.style.color = colorBlur;
    } else {
      childrenBtnDec.disabled = false;
      childrenBtnInc.disabled = false;
      childrenBtnDec.style.border = colorBorderFocus;
      childrenBtnDec.style.color = colorFocus;
      childrenBtnInc.style.border = colorBorderFocus;
      childrenBtnInc.style.color = colorFocus;
    }
  } else if (mode === 'rooms') {
    filterValues.rooms--;
    currentInputRm.value = filterValues.rooms;
    shownInpRm.setAttribute('placeholder', `${currentInputRm.value}` + ' Rooms');

    if (currentInputRm.value < 1) {
      roomsBtnDec.disabled = true;
      roomsBtnDec.style.border = colorBorderBlur;
      roomsBtnDec.style.color = colorBlur;
    } else {
      roomsBtnDec.disabled = false;
      roomsBtnInc.disabled = false;
      roomsBtnDec.style.border = colorBorderFocus;
      roomsBtnDec.style.color = colorFocus;
      roomsBtnInc.style.border = colorBorderFocus;
      roomsBtnInc.style.color = colorFocus;
    }
  }
};
