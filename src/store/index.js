import { configureStore } from "@reduxjs/toolkit";
import {
  studentReducer,
  addCourse,
  removeCourse,
  markCompleted,
  markUncompleted,
} from "./slice/studentSlice";

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export { store, addCourse, removeCourse, markCompleted, markUncompleted };
