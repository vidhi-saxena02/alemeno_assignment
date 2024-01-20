import React from "react";
import { useNavigate } from "react-router-dom";
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const handleCourseInfo = () => {
    navigate(`/courses/${course.id}/${course.name}`);
  };
  return (
    <div
      onClick={handleCourseInfo}
      className="bg-gray-50 cursor-pointer hover:scale-110 ease-in-out duration-300 shadow-md shadow-blue-300 flex flex-col  justify-start items-center rounded-lg w-[390px]"
    >
      <div className="w-full p-4 rounded-md bg-gradient-to-r from-purple-200 to-purple-100 flex items-center justify-center">
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-20 h-20 object-contain"
        />
      </div>
      <div className="py-6 px-3 flex flex-col justify-start items-start ">
        <div className="flex  items-center justify-between w-full">
          <h1 className="font-sans font-bold text-xl">{course.name}</h1>
          <div>❤️{course.likes}</div>
        </div>
        <div className="underline text-blue-900">{course.instructor}</div>
        <p className="font-medium font-serif">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
