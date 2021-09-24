import { getHotelsData } from './hotels-data.js';
import { hotelTitle } from './variables.js';

export async function pasteHotelsItems() {
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
