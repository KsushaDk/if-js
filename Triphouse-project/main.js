const inputPeople = document.querySelector('.header__people');
const divFilter = document.querySelector('.header__people_filter');

const showFilter = () => {
  const filterShown = document.querySelector('.header__people_filter');
  filterShown.style.display = 'block';
};

const hideFilter = () => {
  divFilter.style.display = 'none';
};

inputPeople.addEventListener('focusin', showFilter);
divFilter.addEventListener('focusout', hideFilter);

const minus = document.querySelectorAll('.header__people_count button.minus');
const plus = document.querySelectorAll('.header__people_count button.plus');

// ADULTS

const buttonDecEl = document.querySelectorAll('.header__people_count button.minus');
const buttonIncEl = document.querySelectorAll('.header__people_count button.plus');

const countAdults = () => {
  const countInputAdults = document.getElementById('adults');
  let count = 0;

  return (a) => {
    if (a === 'dec') {
      count -= 1;
    } else {
      count += 1;
    }
    if (count < 0 || count > 30) {
      minus[0].style.border = '1px solid #CECECE';
      minus[0].style.color = '#CECECE';
      plus[0].style.border = '1px solid #CECECE';
      plus[0].style.color = '#CECECE';
    } else {
      minus[0].style.border = '1px solid #3077c6';
      minus[0].style.color = '#3077c6';
      plus[0].style.border = '1px solid #3077c6';
      plus[0].style.color = '#3077c6';
    }
    if (count < 0 || count > 30) {
      return count;
    }

    countInputAdults.value = count;
  };
};

const countAd = countAdults();

buttonDecEl[0].addEventListener('click', () => countAd('dec'));
buttonIncEl[0].addEventListener('click', () => countAd('inc'));

// CHILDREN

const countChildren = () => {
  const countInputChildren = document.getElementById('children');
  let count = 0;

  return (a) => {
    if (a === 'dec') {
      count -= 1;
    } else {
      count += 1;
    }
    if (count < 0 || count > 10) {
      minus[1].style.border = '1px solid #CECECE';
      minus[1].style.color = '#CECECE';
      plus[1].style.border = '1px solid #CECECE';
      plus[1].style.color = '#CECECE';
    } else {
      minus[1].style.border = '1px solid #3077c6';
      minus[1].style.color = '#3077c6';
      plus[1].style.border = '1px solid #3077c6';
      plus[1].style.color = '#3077c6';
    }

    if (count < 0 || count > 10) {
      return count;
    }

    countInputChildren.value = count;
  };
};

const countCh = countChildren();

buttonDecEl[1].addEventListener('click', () => countCh('dec'));
buttonIncEl[1].addEventListener('click', () => countCh('inc'));

const showChildrenSelect = () => {
  const childrenSelector = document.querySelector('.header__people_filter div:nth-child(4)');
  childrenSelector.style.display = 'block';
  if (document.getElementById('children').value >= 2) {
    const childrenSelectorAnother = document.getElementById('age_selector').cloneNode(true);
    childrenSelectorAnother.classList.add('whyfuckingstylesdontcopy');
    document.querySelector('.header__people_filter').appendChild(childrenSelectorAnother);
  }
};
buttonIncEl[1].addEventListener('click', showChildrenSelect);

const hideChildrenSelect = () => {
  document.querySelector('#age_selector').remove();
  if (document.getElementById('children').value < 1) {
    document.querySelector('.header__people_filter div:nth-child(4)').style.display = 'none';
  }
};
buttonDecEl[1].addEventListener('click', hideChildrenSelect);

// ROOMS

const countRooms = () => {
  const countInputRooms = document.getElementById('rooms');
  let count = 0;

  return (a) => {
    if (a === 'dec') {
      count -= 1;
    } else {
      count += 1;
    }
    if (count < 0 || count > 30) {
      minus[2].style.border = '1px solid #CECECE';
      minus[2].style.color = '#CECECE';
      plus[2].style.border = '1px solid #CECECE';
      plus[2].style.color = '#CECECE';
    } else {
      minus[2].style.border = '1px solid #3077c6';
      minus[2].style.color = '#3077c6';
      plus[2].style.border = '1px solid #3077c6';
      plus[2].style.color = '#3077c6';
    }
    if (count < 0 || count > 30) {
      return count;
    }

    countInputRooms.value = count;
  };
};

const countRm = countRooms();

buttonDecEl[2].addEventListener('click', () => countRm('dec'));
buttonIncEl[2].addEventListener('click', () => countRm('inc'));

async function getHotelsData(url) {
  const response = await fetch(url);
  const hotelsData = await response.json();
  return hotelsData;
}

async function pasteHotelsItems() {
  const hotels = await getHotelsData('https://fe-student-api.herokuapp.com/api/hotels/popular');
  const newHotels = hotels.slice(0, 4);

  const hotelsCarrouselDiv = document.createElement('div');
  hotelsCarrouselDiv.classList.add('hotels__carrousel');
  document.querySelector('.hotels__title').after(hotelsCarrouselDiv);

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
    // eslint-disable-next-line no-useless-concat
    pCityCountry.innerHTML = `${i.city}` + ', ' + `${i.country}`;
    pHotel.after(pCityCountry);
  });
}
pasteHotelsItems();
