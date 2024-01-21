import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    studentId: 899,
    courseEnrolled: 0,
    courseEnrolledInformation: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courseEnrolledInformation.push({
        courseName: action.payload.courseName,
        courseID: action.payload.courseID,
        progress: action.payload.progress,
        thumbnail: action.payload.thumbnail,
        instructor: action.payload.instructor,
        dueDate: action.payload.dueDate,
        courseCompleted: action.payload.courseCompleted,
      });

      state.courseEnrolled = state.courseEnrolledInformation.length;
    },
    removeCourse: (state, action) => {
      const updated = state.courseEnrolledInformation.filter((course) => {
        return course.courseID !== action.payload;
      });
      state.courseEnrolledInformation = updated;
      state.courseEnrolled = state.courseEnrolledInformation.length;
    },
    markCompleted: (state, action) => {
      state.courseEnrolledInformation = state.courseEnrolledInformation.map(
        (course) =>
          course.courseID === action.payload
            ? { ...course, progress: 100, courseCompleted: true }
            : course
      );
    },
    markUncompleted: (state, action) => {
      state.courseEnrolledInformation = state.courseEnrolledInformation.map(
        (course) =>
          course.courseID === action.payload
            ? { ...course, progress: 0, courseCompleted: false }
            : course
      );
    },
  },
});

export const { addCourse, removeCourse, markCompleted, markUncompleted } =
  studentSlice.actions;
export const studentReducer = studentSlice.reducer;
