import React, { useState, useEffect } from "react";
import { getCourseById } from "../ApiReq/CourseApi";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DropDownContent from "../Components/DropDownContent";
import { useToasts } from "@geist-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../store/index";

const AboutCourses = () => {
  const { id, name } = useParams();
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { setToast } = useToasts();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coursesEnrolled = useSelector(
    (state) => state.student.courseEnrolledInformation
  );
  const courseInfo = useQuery({
    queryKey: ["coursesInformation", id, name],
    queryFn: () => getCourseById(id),
  });

  useEffect(() => {
    if (courseInfo.data && courseInfo.data.data) {
      setTotalLikes(courseInfo.data.data.likes);
    }

    if (coursesEnrolled.length > 0) {
      const isEnrolled = coursesEnrolled.find(
        (course) => course.courseID === id
      );
      if (isEnrolled) {
        setIsEnrolled(true);
      }
    }
  }, [courseInfo.data, coursesEnrolled, id]);

  const handleLikeDislike = () => {
    if (!liked) {
      setLiked(true);
      setTotalLikes(totalLikes + 1);
      setToast({
        text: "Course Liked",
        type: "success",
      });
    } else {
      setLiked(false);
      setTotalLikes(totalLikes - 1);
      setToast({
        text: "Course Disliked",
        type: "success",
      });
    }
  };

  const handleClick = () => {
    dispatch(
      addCourse({
        courseName: name,
        courseID: id,
        progress: Math.floor(Math.random() * 100),
        thumbnail: courseInfo?.data?.data?.thumbnail,
        instructor: courseInfo?.data?.data?.instructor,
        dueDate: new Date().toLocaleDateString(),
        courseCompleted: false,
      })
    );
    setToast({
      text: "Course Added",
      type: "success",
    });
    navigate("/");
  };

  if (courseInfo.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className=" bg-gradient-to-r from-violet-100 to-fuchsia-200  w-full lg:h-[300px] lg:flex justify-center items-start gap-x-6">
        <img
          src={courseInfo?.data?.data?.thumbnail}
          className="w-[400px] h-[300px] p-2"
          alt="Course Thumbnail"
        />
        <div className="my-5 font-serif font-bold text-gray-800 text-md gap-y-1 flex flex-col mx-4 lg:mx-0">
          <div className="flex gap-x-3 items-center">
            <div className="lg:text-4xl">{courseInfo.data.data.name}</div>
            <div onClick={handleLikeDislike}>
              {liked ? (
                <div className="cursor-pointer">❤️ </div>
              ) : (
                <div className="lg:text-[30px] cursor-pointer">♡</div>
              )}
            </div>
          </div>
          <div>by:- {courseInfo.data.data.instructor}</div>
          <div>{courseInfo.data.data.description}</div>
          <div>Enrollment Status- {courseInfo.data.data.enrollmentStatus}</div>
          <div>Duration- {courseInfo.data.data.duration}</div>
          <div className="text-green-800">{courseInfo.data.data.location}</div>
          <div className="font-sans">
            <span className="lg:text-xl text-purple-800">{totalLikes}</span>{" "}
            People Liked the Course
          </div>
          <button
            onClick={handleClick}
            disabled={isEnrolled}
            type="button"
            className="text-black border border-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg lg:text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            {isEnrolled ? "Already Enrolled" : "Add Course"}
          </button>
        </div>
      </div>
      <div className=" mt-5 mx-5 lg:mt-20 lg:mx-20">
        <div>
          <h1 className=" text-[30px] lg:text-3xl font-bold mb-3">
            Pre-requisites
          </h1>
        </div>
        {courseInfo.data.data.prerequisites.map((prerequisite) => (
          <li className=" text-[20px] lg:text-xl" key={prerequisite}>
            {prerequisite}
          </li>
        ))}
      </div>

      <div className="my-5 mx-5 lg:my-20 lg:mx-20">
        <div>
          <h1 className="text-[30px] lg:text-3xl font-bold mb-3">Syllabus</h1>
        </div>
        {courseInfo.data.data.syllabus.map((syllabus) => (
          <DropDownContent key={syllabus.week} data={syllabus} />
        ))}
      </div>
    </div>
  );
};

export default AboutCourses;
