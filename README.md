##🌦️ Andaaj of Weather

A fully responsive Weather App built using HTML, CSS, and JavaScript, powered by the OpenWeatherMap API and Unsplash API.
It allows users to check real-time weather conditions by city name or their current location, displaying temperature, humidity, wind speed, and dynamically changing backgrounds based on weather conditions.

🌐 [View Live on GitHub Pages](https://andajofweather.netlify.app/)  


## 📌 Features

🔍 Search weather by city name

📍 Get weather for your current location using geolocation

🌡️ Displays temperature in °C, humidity, and wind speed

🖼️ Dynamic backgrounds from Unsplash based on weather and location

🌤️ Weather icons for conditions like clouds, rain, drizzle, mist, etc.

⚠️ Handles invalid or misspelled city names with an error message

📱 Fully responsive UI for mobile, tablet, and desktop

🎨 Smooth transitions for backgrounds and interactive buttons


## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?logo=OpenWeatherMap&logoColor=white)


## ⚙️ How It Works

User types a city name or clicks "My Location".

App fetches weather data from OpenWeatherMap API.

Weather details (temperature, humidity, wind) and icons are displayed.

Unsplash API fetches a location-specific background image based on the current weather.

Smooth transitions ensure the background and UI update gracefully.

Invalid city names show a clear error message.

## 🌐 API References
OpenWeatherMap
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric


q → city name

appid → your OpenWeatherMap API key

units=metric → Celsius

🔑 Free API key available at OpenWeatherMap
.

Unsplash
https://api.unsplash.com/photos/random?query={weather}+{city}&orientation=landscape&client_id={API key}


Dynamically fetches a background image based on weather condition and city.

client_id → your Unsplash API key

Orientation set to landscape for fullscreen backgrounds.

# ⭐ If you found this project helpful, feel free to give a star!

Let me know if you'd like:
- A Markdown badge version (`shields.io`)
- Auto-generated `LICENSE` file
- Screenshot images embedded

This `README.md` is designed to impress recruiters and guide contributors professionally.


## 📁 Project Structure

```plaintext
andaaj-weather/
├── images/                  # Weather icons and UI assets
│   ├── clouds.png
│   ├── clear.png
│   ├── drizzle.png
│   ├── rain.png
│   ├── mist.png
│   ├── humidity.png
│   ├── wind.png
│   └── search.png
│
├── index.html               # Main HTML file
├── style.css                # Styling, responsiveness, hover effects
├── script.js                # JavaScript logic (OpenWeatherMap + Unsplash API)
├── README.md                # Project overview and documentation


