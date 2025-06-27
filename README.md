# 🌦️ Weather App

A fully responsive Weather App built using **HTML**, **CSS**, and **JavaScript**, powered by the **OpenWeatherMap API**. It allows users to check real-time weather conditions by entering any city name. The app displays temperature, humidity, wind speed, and weather icons based on live conditions.

## 🔗 Live Demo

🌐 [View Live on GitHub Pages](https://cheery-centaur-0d7ecc.netlify.app/)  


## 📌 Features

- 🔍 Search weather by **city name**
- 🌡️ Displays **temperature in °C**, **humidity**, and **wind speed**
- 🖼️ Dynamic weather icons for conditions like clouds, rain, drizzle, etc.
- ⚠️ Handles invalid or misspelled city names with an error message
- 📱 Fully responsive UI for both desktop and mobile devices
- 🎨 Clean and modern design using CSS gradients and flexbox


## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?logo=OpenWeatherMap&logoColor=white)


# ⚙️ How It Works

User types a city name and clicks the search button.

The app sends a GET request to the OpenWeatherMap API with the city name.

On a successful response:

It shows the temperature, humidity, wind speed, and condition.

It changes the icon based on weather (e.g., clouds, rain).

If the city name is invalid, an error message is shown to the user.

# 🌐 API Reference
The app uses the OpenWeatherMap API:

Base URL:

bash
Copy
Edit
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
q → city name

appid → your API key

units → metric for Celsius

🔑 Note: You need to sign up at https://openweathermap.org to get a free API key.

# 📷 Screenshots

![image alt](https://github.com/itsgauresh/weatherapp/blob/106a989ef91115d12a5ac510c19739430492b83d/Screenshot%202025-06-27%20235438.png)
![image alt](https://github.com/itsgauresh/weatherapp/blob/106a989ef91115d12a5ac510c19739430492b83d/Screenshot%202025-06-27%20235502.png)

# ⭐ If you found this project helpful, feel free to give it a star!

Let me know if you'd like:
- A Markdown badge version (`shields.io`)
- Auto-generated `LICENSE` file
- Screenshot images embedded

This `README.md` is designed to impress recruiters and guide contributors professionally.


## 📁 Project Structure

```plaintext
weatherapp/
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
├── style.css                # Styling and responsiveness
├── README.md                # Project overview and documentation

