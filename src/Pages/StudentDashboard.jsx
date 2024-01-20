import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProgressCard from "../Components/ProgressCard";

const StudentDashboard = () => {
  const courseEnrolled = useSelector((state) => state.student.courseEnrolled);
  const courseEnrolledInformation = useSelector(
    (state) => state.student.courseEnrolledInformation
  );

  return courseEnrolled === 0 ? (
    <div className="w-full  flex flex-col justify-center items-center  ">
      <div className="flex justify-center items-center ">
        <img
          src="https://cdn.dribbble.com/users/860366/screenshots/6364054/desolazione_empty_1.gif"
          alt="no course"
        />
      </div>
      <div className="text-2xl font-bold font-serif">
        No courses!{" "}
        <Link to="/courses" className="underline hover:text-purple-500">
          Check out the courses{" "}
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap justify-start m-10 gap-x-10 gap-y-10">
      {courseEnrolledInformation.map((course) => (
        <ProgressCard course={course} key={course.courseID} />
      ))}
    </div>
  );
};

export default StudentDashboard;
