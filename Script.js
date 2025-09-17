const apikey = "be51b293ec9f82ab950b6a342d92ae08"; // OpenWeatherMap API
const unsplashKey = "6CxoMyZMn01IC2q8Qwo6ZnqGFcDlwToH0qjgazqkrz4"; // Unsplash Access Key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorBox = document.querySelector(".error");
const weatherBox = document.querySelector(".weather");
const themeToggle = document.getElementById("theme-toggle");

// Function to fetch Unsplash background based on weather condition
async function getWeatherBackground(condition, city) {
  try {
    // Query includes both weather condition and city for location-specific images
    const query = encodeURIComponent(`${condition} ${city} india`);
    
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${unsplashKey}`
    );
    
    const data = await response.json();
    
    if (data && data.urls && data.urls.full) {
      // Smooth fade transition
      document.body.style.transition = "background-image 1.5s ease-in-out";
      document.body.style.backgroundImage = `url(${data.urls.full})`;
    }
  } catch (err) {
    console.log("Unsplash fetch error:", err);
    document.body.style.backgroundImage = "url('images/default-bg.jpg')"; // fallback
  }
}


// Main function to check weather
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

  // Update weather icon
  switch (condition) {
    case "clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "mist":
      weatherIcon.src = "images/mist.png";
      break;
    default:
      weatherIcon.src = "images/default.png";
  }

  // Update background based on condition and city
  getWeatherBackground(condition, data.name);
}


// Search button event
searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) checkWeather(city);
});

// Location weather
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

