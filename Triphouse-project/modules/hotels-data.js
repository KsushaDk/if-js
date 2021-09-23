export async function getHotelsData(url) {
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
