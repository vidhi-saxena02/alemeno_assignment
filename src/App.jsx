import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StudentDashboard from "./Pages/StudentDashboard";
import CoursesList from "./Pages/CoursesList";
import AboutCourses from "./Pages/AboutCourses";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <main className="h-full ">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:id/:name" element={<AboutCourses />} />
        </Routes>
      </Router>
    </main>
  );
};
export default App;
