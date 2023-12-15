//Declaring global variables --

let city = document.querySelector(".city");
let icon = document.querySelector(".icon");
let des = document.querySelector(".description");
let temperature = document.querySelector(".temp");
let tempFeelsLike = document.querySelector(".tempFeelsLike");
let sunRise = document.querySelector(".sunrise");
let sunSet = document.querySelector(".sunset");
let humi = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weath = document.querySelector(".weather");
let searchBar = document.querySelector(".searchBar");
let searchButton = document.querySelector(".search button");

// Converting json time into hour:minute formate
function unix(unixTimeStamp){
    let date = new Date(unixTimeStamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}     

// Creating an object 
let weather = {
    apiKey: "fc71eb680f94789efe06814e43723f84",

    url : "https://api.openweathermap.org/data/2.5/weather?q=",
    fetchWeather: function (city) {
        fetch(this.url + city + "&units=metric&appid=" + this.apiKey) 
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    }, 

    displayWeather: function (data) {
        city.innerHTML = `City: ${data.name}`;
        temperature.innerHTML = `Temperature: ${data.main.temp} °C`;
        tempFeelsLike.innerHTML = `Feels like: ${data.main.feels_like} °C`
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        des.innerHTML = data.weather[0].description;
        humi.innerHTML = `Humidity: ${data.main.humidity} %`;
        wind.innerHTML = `Wind Speed: ${data.wind.speed} km/hr`;
        sunRise.innerHTML = `Sunrise: ${unix(data.sys.sunrise)}`;
        sunSet.innerHTML = `Sunset: ${unix(data.sys.sunset)}`;
        document.querySelector(".searchBar").value = '';
    },

    search: function () {this.fetchWeather(searchBar.value); }
}

searchButton.addEventListener("click", function () {weather.search();
});

searchBar.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather();