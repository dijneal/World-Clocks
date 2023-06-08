function oaklandTime() {
  let firstDate = document.querySelector("#oakland .date");
  firstDate.innerHTML = moment()
    .tz("America / Los_Angeles")
    .format("MMMM Do YYYY");

  let firstTime = document.querySelector("#oakland .time");
  firstTime.innerHTML = moment()
    .tz("America / Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");
}
oaklandTime();
setInterval(oaklandTime, 1000);
function newYorkTime() {
  let secondDate = document.querySelector("#new-york .date");
  secondDate.innerHTML = moment().tz("America/New_York").format("MMMM Do YYYY");

  let secondTime = document.querySelector("#new-york .time");
  secondTime.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");
}
newYorkTime();
setInterval(newYorkTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("hh:mm:ss")}
          <small> ${cityTime.format("A")} </small>
          </div>
        </div>`;
}

let selectCity = document.querySelector("#select-cities");
selectCity.addEventListener("change", updateCity);
