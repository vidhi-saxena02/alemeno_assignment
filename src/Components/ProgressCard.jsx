import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCourse } from "../store/index";
import { useToasts, Progress } from "@geist-ui/core";
import Completion from "./Completion";

const ProgressCard = ({ course }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setToast } = useToasts();

  const handleRemoveCourse = (courseID) => {
    dispatch(removeCourse(courseID));
    setToast({
      text: "Course Removed",
      type: "success",
    });
  };

  return (
    <div className=" cursor-pointer   duration-300 shadow-md shadow-blue-300 flex flex-col  justify-start items-center rounded-lg w-[390px]">
      <div
        onClick={() => {
          navigate(`/courses/${course.courseID}/${course.courseName}`);
        }}
        className="w-full p-4 rounded-md bg-gradient-to-r from-purple-200 to-purple-100 flex items-center justify-center"
      >
        <img
          src={course.thumbnail}
          alt={course.courseName}
          className="w-20 h-20 object-contain"
        />
      </div>
      <div className="py-6  px-3 flex flex-col  w-full  gap-y-1 justify-start items-start ">
        <div className="flex  items-center justify-between  w-full">
          <h1 className="font-sans font-bold text-[18px]">
            {course.courseName}
          </h1>
          <div
            onClick={() => handleRemoveCourse(course.courseID)}
            className="hover:text-blue-500 hover:underline cursor-pointer"
          >
            Remove
          </div>
        </div>

        <div className="underline text-blue-900">{course.instructor}</div>
        <p className="font-medium font-serif">Due- {course.dueDate}</p>
        <Progress value={course.progress} max={100} />
        <p className="font-medium  font-sans">{course.progress}%</p>

        <Completion
          courseID={course.courseID}
          courseCompleted={course.courseCompleted}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
