function losangelesTime() {
  let firstDate = document.querySelector("#losangeles .date");
  firstDate.innerHTML = moment()
    .tz("America / Los_Angeles")
    .format("MMMM Do YYYY");

  let firstTime = document.querySelector("#losangeles .time");
  firstTime.innerHTML = moment()
    .tz("America / Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");
}
losangelesTime();
setInterval(losangelesTime, 1000);
function barbadosTime() {
  let secondDate = document.querySelector("#barbados .date");
  secondDate.innerHTML = moment().tz("America/Barbados").format("MMMM Do YYYY");

  let secondTime = document.querySelector("#barbados .time");
  secondTime.innerHTML = moment()
    .tz("America/Barbados")
    .format("hh:mm:ss [<small>]A[</small>]");
}
barbadosTime();
setInterval(barbadosTime, 1000);

function londonTime() {
  let secondDate = document.querySelector("#london .date");
  secondDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");

  let secondTime = document.querySelector("#london .time");
  secondTime.innerHTML = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");
}
londonTime();
setInterval(londonTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

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
        </div>
         <a href="index.html">Homepage</a>
        `;
}

let selectCity = document.querySelector("#select-cities");
selectCity.addEventListener("change", updateCity);
