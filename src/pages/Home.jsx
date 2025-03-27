import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { getWeather } from "../services/weatherServices"; 
import dayjs from "dayjs";
import { Paper, Typography, Box, Button } from "@mui/material";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm:ss A"));
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const today = dayjs().format("dddd, MMMM D, YYYY");

  const addTask = async (newTask) => {
    if (newTask.isOutdoor) {
      try {
        const weatherData = await getWeather();
        console.log("Fetched Weather Data:", weatherData); 
        newTask.weather = weatherData || { temp: "N/A", feelsLike: "N/A", condition: "N/A", icon: "" };
      } catch (error) {
        console.error("Weather API failed", error);
        newTask.weather = { temp: "N/A", feelsLike: "N/A", condition: "N/A", icon: "" };
      }
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); 
    navigate("/login"); 
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Paper elevation={3} sx={{ display: "flex", width: "90%", height: "85vh", borderRadius: 3, overflow: "hidden" }}>
        
        
        <Box sx={{ width: "45%", p: 4, backgroundColor: "#f4f4f4", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <Typography variant="h5">{today}</Typography>
            <Button 
              variant="contained" 
              color="error" 
              onClick={handleLogout} 
              sx={{ height: "30px", fontSize: "12px", padding: "3px 10px" }}
            >
              Logout
            </Button>

          </Box>
          <Typography variant="h4" sx={{ color: "#007bff", mt: 1 }}>
            {currentTime}
          </Typography>
          <Box sx={{ mt: 5, width: "100%", maxWidth: "400px" }}>
            <TaskInput addTask={addTask} />
          </Box>
        </Box>

        
        <Box sx={{ width: "55%", p: 4, overflowY: "auto" }}>
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
        </Box>

      </Paper>
    </Box>
  );
};

export default Home;
