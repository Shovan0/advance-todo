import axios from "axios";

const API_KEY = "6f74a2efbf004a2389c105523252703"; // Replace with your actual API key
const CITY = "Kolkata"; // Replace with your city

export const getWeather = async () => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
    );
    console.log("Weather API Response:", response.data); // Debugging

    return {
      temp: `${response.data.current.temp_c}°C`,
      feelsLike: `${response.data.current.feelslike_c}°C`,
      condition: response.data.current.condition.text,
      icon: `https:${response.data.current.condition.icon}`, // Ensure full URL
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
