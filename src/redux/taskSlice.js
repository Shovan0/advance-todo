import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); // ✅ Update state correctly
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
