import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("weather/getWeather", async (location) => {
  const data = await fetchWeather(location);
  if (data) console.log("Weather API Response:", data);
  return data;
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,  // ✅ Ensure initial state is defined
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
