/* eslint-disable no-useless-concat */
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

let filterValues = {
  adults: 1,
  children: 0,
  rooms: 1,
};

currentInputAd.value = filterValues.adults;
currentInputCh.value = filterValues.children;
currentInputRm.value = filterValues.rooms;

const focusFilter = () => {
  filterPeople.classList.toggle('header__people_filter_focus');
};
counterPeopleInput.addEventListener('click', focusFilter);

const countFunctionInc = (mode) => {
  if (mode === 'adults') {
    filterValues = { ...filterValues, adults: filterValues.adults + 1 };

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
    filterValues = { ...filterValues, children: filterValues.children + 1 };

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
    filterValues = { ...filterValues, rooms: filterValues.rooms + 1 };

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

const countFunctionDec = (mode) => {
  if (mode === 'adults') {
    filterValues = { ...filterValues, adults: filterValues.adults - 1 };

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
    filterValues = { ...filterValues, children: filterValues.children - 1 };

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
    filterValues = { ...filterValues, rooms: filterValues.rooms - 1 };

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

adultsBtnInc.addEventListener('click', () => countFunctionInc('adults'));
adultsBtnDec.addEventListener('click', () => countFunctionDec('adults'));
childrenBtnInc.addEventListener('click', () => countFunctionInc('children'));
childrenBtnDec.addEventListener('click', () => countFunctionDec('children'));
roomsBtnInc.addEventListener('click', () => countFunctionInc('rooms'));
roomsBtnDec.addEventListener('click', () => countFunctionDec('rooms'));

// Hotels

const hotelTitle = document.querySelector('.hotels__title');

async function getHotelsData(url) {
  const sessionHotelsStr = sessionStorage.getItem('hotels');
  if (!sessionHotelsStr) {
    try {
      const response = await fetch(url);
      const hotelsData = await response.json();
      sessionStorage.setItem('hotels', JSON.stringify(hotelsData));
      return hotelsData;
    } catch (err) {
      console.log('Error:', err);
    }
  } else {
    const hotelsData = JSON.parse(sessionHotelsStr);
    return hotelsData;
  }
}

async function pasteHotelsItems() {
  const hotels = await getHotelsData('https://fe-student-api.herokuapp.com/api/hotels/popular');
  const newHotels = hotels.slice(0, 4);

  const hotelsCarrouselDiv = document.createElement('div');
  hotelsCarrouselDiv.classList.add('hotels__carrousel');
  hotelTitle.after(hotelsCarrouselDiv);

  newHotels.forEach((i) => {
    const divHotel = document.createElement('div');
    hotelsCarrouselDiv.prepend(divHotel);

    const aHotel = document.createElement('a');
    aHotel.setAttribute('href', '#');
    divHotel.prepend(aHotel);

    const imgHotel = document.createElement('img');
    imgHotel.setAttribute('src', `${i.imageUrl}`, 'alt', `${i.name}`);
    aHotel.prepend(imgHotel);

    const pHotel = document.createElement('p');
    pHotel.innerHTML = `${i.name}`;
    aHotel.append(pHotel);

    const pCityCountry = document.createElement('p');
    pCityCountry.innerHTML = `${i.city}` + ', ' + `${i.country}`;
    pHotel.after(pCityCountry);
  });
}
pasteHotelsItems();
