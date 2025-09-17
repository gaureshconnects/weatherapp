const apikey = "be51b293ec9f82ab950b6a342d92ae08"; // OpenWeatherMap
const unsplashKey = "6CxoMyZMn01IC2q8Qwo6ZnqGFcDlwToH0qjgazqkrz4"; // Unsplash
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const newsAPIKey = "2bf718c1ec7a4808804076f9eef3a94c";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorBox = document.querySelector(".error");
const weatherBox = document.querySelector(".weather");
const aqiBox = document.querySelector(".aqi");

// AQI Levels
const aqiLevels = [
  { level: "Good", color: "#55a84f" },
  { level: "Fair", color: "#a3c853" },
  { level: "Moderate", color: "#fff833" },
  { level: "Poor", color: "#f29c33" },
  { level: "Very Poor", color: "#e93f33" },
  { level: "Severe", color: "#af2d24" }
];

// Fetch Unsplash background
async function getWeatherBackground(condition, city) {
  try {
    const query = encodeURIComponent(`${condition} ${city} india`);
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${unsplashKey}`
    );
    const data = await response.json();
    if (data && data.urls && data.urls.full) {
      document.body.style.transition = "background-image 1.5s ease-in-out";
      document.body.style.backgroundImage = `url(${data.urls.full})`;
    }
  } catch (err) {
    console.log("Unsplash fetch error:", err);
    document.body.style.backgroundImage = "url('images/default-bg.jpg')";
  }
}

// Fetch AQI based on coordinates
async function fetchAQI(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}`
    );
    const data = await response.json();
    if (data && data.list && data.list.length > 0) {
      const aqiValue = data.list[0].main.aqi;
      const aqiInfo = aqiLevels[aqiValue - 1];
      aqiBox.style.display = "block";
      aqiBox.innerHTML = `
        <h3>Air Quality Index (AQI): <span style="color: ${aqiInfo.color};">${aqiValue} - ${aqiInfo.level}</span></h3>
        <p>Lower value = Better Air Quality</p>
      `;
    }
  } catch (err) {
    console.log("AQI fetch error:", err);
    aqiBox.style.display = "none";
  }
}

// Main weather function
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();

  if (response.status === 404 || !data.weather) {
    weatherBox.style.display = "none";
    aqiBox.style.display = "none";
    errorBox.style.display = "block";
    return;
  }

  errorBox.style.display = "none";
  weatherBox.style.display = "block";

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  const condition = data.weather[0].main.toLowerCase();

  // Update weather icon
  switch (condition) {
    case "clouds": weatherIcon.src = "images/clouds.png"; break;
    case "clear": weatherIcon.src = "images/clear.png"; break;
    case "rain": weatherIcon.src = "images/rain.png"; break;
    case "drizzle": weatherIcon.src = "images/drizzle.png"; break;
    case "mist": weatherIcon.src = "images/mist.png"; break;
    default: weatherIcon.src = "images/default.png";
  }

  // Background
  getWeatherBackground(condition, data.name);

  // AQI
  const lat = data.coord.lat;
  const lon = data.coord.lon;
  fetchAQI(lat, lon);
}

// Search button
searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) checkWeather(city);
});

// My Location
function getLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
      );
      const data = await response.json();
      checkWeather(data.name);
    });
  } else {
    alert("Geolocation not supported in this browser.");
  }
}

async function fetchNews(city) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${city}&language=en&sortBy=publishedAt&pageSize=5&apiKey=${newsAPIKey}`
    );
    const data = await response.json();

    const newsContainer = document.querySelector(".news-cards");
    newsContainer.innerHTML = ""; // clear previous news

    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `
          <img src="${article.urlToImage || 'images/default-bg.jpg'}" alt="News Image">
          <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
          <p>${article.description || ''}</p>
        `;
        newsContainer.appendChild(card);
      });
    } else {
      newsContainer.innerHTML = "<p>No news found for this location.</p>";
    }
  } catch (err) {
    console.log("News API error:", err);
  }
}

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();

  if (response.status === 404 || !data.weather) {
    weatherBox.style.display = "none";
    errorBox.style.display = "block";
    return;
  }

  errorBox.style.display = "none";
  weatherBox.style.display = "block";

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  const condition = data.weather[0].main.toLowerCase();

  // Update icon and background
  switch (condition) {
    case "clouds": weatherIcon.src = "images/clouds.png"; break;
    case "clear": weatherIcon.src = "images/clear.png"; break;
    case "rain": weatherIcon.src = "images/rain.png"; break;
    case "drizzle": weatherIcon.src = "images/drizzle.png"; break;
    case "mist": weatherIcon.src = "images/mist.png"; break;
    default: weatherIcon.src = "images/default.png";
  }

  getWeatherBackground(condition, data.name);

  // **Fetch news for the city**
  fetchNews(data.name);
}
