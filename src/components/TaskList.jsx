import React from "react";
import { List, ListItem, ListItemText, IconButton, Checkbox, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <Box>
      <Typography variant="h5">Your Tasks</Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Checkbox checked={task.completed} onChange={() => toggleTaskCompletion(index)} />
              <ListItemText
                primary={task.text}
                sx={{ textDecoration: task.completed ? "line-through" : "none" }}
              />
              <IconButton onClick={() => deleteTask(index)} sx={{ marginLeft: "auto" }}>
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Box>

            {task.isOutdoor && task.weather && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#f0f0f0",
                  padding: "5px",
                  borderRadius: "5px",
                  width: "fit-content",
                  marginLeft: "30px",
                  marginTop: "5px"
                }}
              >
                {task.weather.icon && <img src={task.weather.icon} alt={task.weather.condition} width="30" />}
                <Typography variant="body2">
                  🌡 {task.weather.temp} | Feels like {task.weather.feelsLike}  
                  <br />
                  ☁ {task.weather.condition}
                </Typography>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
