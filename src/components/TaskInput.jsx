import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Box } from "@mui/material";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [isOutdoor, setIsOutdoor] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task, isOutdoor, completed: false });
      setTask(""); 
      setIsOutdoor(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
      <TextField
        label="Enter Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        sx={{ fontSize: "1.2rem" }}
      />
      <FormControlLabel
        control={<Checkbox checked={isOutdoor} onChange={(e) => setIsOutdoor(e.target.checked)} />}
        label="Outdoor Activity"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ fontSize: "1.1rem", padding: "12px 0" }}>
        ADD TASK
      </Button>
    </Box>
  );
};

export default TaskInput;
