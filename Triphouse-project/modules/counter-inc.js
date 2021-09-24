import { filterValues } from './filter-values.js';
import {
  shownInpAd, shownInpCh, shownInpRm, currentInputAd, currentInputCh, currentInputRm, adultsBtnInc, adultsBtnDec,
  childrenBtnInc, childrenBtnDec, roomsBtnInc, roomsBtnDec, childrenSelector, addedSelector, colorBorderBlur, colorBlur, colorBorderFocus,
  colorFocus,
} from './variables.js';

export const countFunctionInc = (mode) => {
  if (mode === 'adults') {
    filterValues.adults++;
    currentInputAd.value = filterValues.adults;
    shownInpAd.setAttribute('placeholder', `${currentInputAd.value}` + ' Adults');

    if (currentInputAd.value >= 30) {
      adultsBtnInc.disabled = true;
      adultsBtnInc.style.border = colorBorderBlur;
      adultsBtnInc.style.color = colorBlur;
    } else {
      adultsBtnDec.disabled = false;
      adultsBtnDec.style.border = colorBorderFocus;
      adultsBtnDec.style.color = colorFocus;
      adultsBtnInc.style.border = colorBorderFocus;
      adultsBtnInc.style.color = colorFocus;
    }
  } else if (mode === 'children') {
    filterValues.children++;
    currentInputCh.value = filterValues.children;
    shownInpCh.setAttribute('placeholder', `${currentInputCh.value}` + ' Children');

    if (currentInputCh.value > 0) {
      childrenSelector.style.display = 'block';
    }
    if (currentInputCh.value > 1) {
      const selectInc = addedSelector.cloneNode(true);
      selectInc.classList.add('selector_style_visible');
      childrenSelector.append(selectInc);
    }

    if (currentInputCh.value >= 10) {
      childrenBtnInc.disabled = true;
      childrenBtnInc.style.border = colorBorderBlur;
      childrenBtnInc.style.color = colorBlur;
    } else {
      childrenBtnDec.disabled = false;
      childrenBtnDec.style.border = colorBorderFocus;
      childrenBtnDec.style.color = colorFocus;
      childrenBtnInc.style.border = colorBorderFocus;
      childrenBtnInc.style.color = colorFocus;
    }
  } else if (mode === 'rooms') {
    filterValues.rooms++;
    currentInputRm.value = filterValues.rooms;
    shownInpRm.setAttribute('placeholder', `${currentInputRm.value}` + ' Rooms');

    if (currentInputRm.value >= 30) {
      roomsBtnInc.disabled = true;
      roomsBtnInc.style.border = colorBorderBlur;
      roomsBtnInc.style.color = colorBlur;
    } else {
      roomsBtnDec.disabled = false;
      roomsBtnDec.style.border = colorBorderFocus;
      roomsBtnDec.style.color = colorFocus;
      roomsBtnInc.style.border = colorBorderFocus;
      roomsBtnInc.style.color = colorFocus;
    }
  }
};
