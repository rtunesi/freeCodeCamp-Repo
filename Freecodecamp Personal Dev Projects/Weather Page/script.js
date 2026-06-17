// Get weather information
async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code`;

    const response = await fetch(url);
    const data = await response.json();

    return data.current;
};

// Store weather icons
// Store weather conditions with emoji
const weatherIcons = {
    0:  { icon: "☀️", text: "Clear sky" },
    1:  { icon: "🌤️", text: "Mainly clear" },
    2:  { icon: "⛅", text: "Partly cloudy" },
    3:  { icon: "☁️", text: "Overcast" },
    45: { icon: "🌫️", text: "Fog" },
    61: { icon: "🌧️", text: "Light rain" },
    63: { icon: "🌧️", text: "Rain" },
    71: { icon: "🌨️", text: "Snow" },
    95: { icon: "⛈️", text: "Thunderstorm" },
};
  
// Display weather information
async function showWeather() {
    const weather = await getWeather(51.43, -0.55);

    const condition = weatherIcons[weather.weather_code] || { icon: "❓", text: "Unknown" };

    const output = document.getElementById("weather");
    output.textContent = `${condition.icon} ${condition.text} — ${weather.temperature_2m}°C`;
}

showWeather();
 
showWeather();