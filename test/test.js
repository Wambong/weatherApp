var inputField = document.querySelector('.input_text');
var searchButton = document.querySelector('.submit');
var cityNameHeader = document.querySelector('#name');

var cityTables = document.querySelectorAll('.city-table');
var searchCityTable = document.querySelector('.search-city-table');

const proxyUrl = "https://cors-anywhere.herokuapp.com";




searchCityTable.style.display = 'none';
// Default cities
const defaultCities = ["Moscow", "London", "New York", "Saint Petersburg"];

// Function to fetch and display weather forecast
const displayWeatherForecast = async (cityName, index) => {
    const cityInfo = await getCityByName(cityName);
    const location = cityInfo._links.location[0].href;
    const weatherUrl = `${proxyUrl}/https://www.yr.no${location}/forecast`;
    const weatherDetail = await getForecasts(weatherUrl);

    // Forecast today
    const todayData = weatherDetail['dayIntervals'][0];
    const dateToday = todayData.start.substring(0, 10);
    const tempTodayMin = todayData.temperature.min;
    const tempTodayMax = todayData.temperature.max;
    const cloudToday = todayData.sixHourSymbols[2];
    const precipitationToday = todayData.precipitation.value;

    // Forecast for the next 4 days
    const futureData = weatherDetail['dayIntervals'].slice(1, 5).map(data => ({
        date: data.start.substring(0, 10),
        tempMin: data.temperature.min,
        tempMax: data.temperature.max,
        cloud: data.sixHourSymbols[2],
        precipitation: data.precipitation.value
    }));

    // Displaying data
    if (index === -1) {
        // For search city
        cityNameHeader.innerText = cityName;
        searchCityTable.style.display = "table";
        searchCityTable.querySelector('.search-date').innerText = dateToday;
        searchCityTable.querySelector('.search-temp').innerText = `${tempTodayMax}/${tempTodayMin}`;
        searchCityTable.querySelector('.search-clouds').innerText = cloudToday;
        searchCityTable.querySelector('.search-precipitation').innerText = `${precipitationToday}mm`;

        futureData.forEach((data, i) => {
            searchCityTable.querySelector(`.search-date${i + 2}`).innerText = data.date;
            searchCityTable.querySelector(`.search-temp${i + 2}`).innerText = `${data.tempMax}/${data.tempMin}`;
            searchCityTable.querySelector(`.search-clouds${i + 2}`).innerText = data.cloud;
            searchCityTable.querySelector(`.search-precipitation${i + 2}`).innerText = `${data.precipitation}mm`;
        });
    } else {
        // For default cities
        cityTables[index].querySelector('.date').innerText = dateToday;
        cityTables[index].querySelector('.temp').innerText = `${tempTodayMax}/${tempTodayMin}`;
        cityTables[index].querySelector('.clouds').innerText = cloudToday;
        cityTables[index].querySelector('.precipitation').innerText = `${precipitationToday}mm`;

        futureData.forEach((data, i) => {
            cityTables[index].querySelector(`.date${i + 2}`).innerText = data.date;
            cityTables[index].querySelector(`.temp${i + 2}`).innerText = `${data.tempMax}/${data.tempMin}`;
            cityTables[index].querySelector(`.clouds${i + 2}`).innerText = data.cloud;
            cityTables[index].querySelector(`.precipitation${i + 2}`).innerText = `${data.precipitation}mm`;
        });
    }
};

// Function to fetch city information by name
const getCityByName = async (userInput) => {
    const url = `${proxyUrl}/https://www.yr.no/api/v0/locations/suggest?language=nb&q=${userInput}`;
    const response = await fetch(url, {
        headers: {
            "User-Agent": "Wambong https://github.com/Wambong"
        }
    });
    return await response.json();
};

// Function to fetch weather forecasts
const getForecasts = async (url) => {
    const response = await fetch(url, {
        headers: {
            "User-Agent": "Wambong https://github.com/Wambong"
        }
    });
    return await response.json();
};

// Load default weather forecasts for default cities on page load
window.addEventListener('load', () => {
    defaultCities.forEach((city, index) => {
        displayWeatherForecast(city, index);
    });
});

// Event listener for search button
searchButton.addEventListener("click", () => {
    const userInput = inputField.value;
    displayWeatherForecast(userInput, -1); // Passing -1 to indicate it's a search city
});
