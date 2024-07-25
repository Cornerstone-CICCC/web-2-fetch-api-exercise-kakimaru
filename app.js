// YOUR JS CODE HERE
const weather = document.querySelector('.content')

const getData = async function() {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`);
    const data = await res.json();
  
    renderData(data)
  } catch(err) {
    console.error(err);
  }
}

const renderData = function(d) {
  const dDate = d.current.time;
  const date = new Date(dDate).toLocaleString('en-us');

  const html = `
    <h2 class="maintext">${d.current.temperature_2m}℃</h2>
    <p class="subtext">Wind speed: <span class="subtext-main">${d.current.wind_speed_10m} km/h</span></p>
    <p class="subtext">Timezone: <span class="subtext-main">${d.timezone}</span></p>
    <p class="smtext">Last updated: ${date}</p>
  `
  weather.insertAdjacentHTML('afterbegin', html)
}

getData()

