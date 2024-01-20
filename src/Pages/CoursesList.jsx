import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../ApiReq/CourseApi";
import CourseCard from "../Components/CourseCard";

const CoursesList = () => {
  const courseListQuery = useQuery({
    queryKey: ["courses"],
    queryFn: getCourse,
    staleTime: Infinity,
  });

  const [searchQuery, setSearchQuery] = useState("");

  if (courseListQuery.isLoading) return <p>Loading...</p>;

  const filteredCourses = courseListQuery.data.data.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-between px-3 py-5 items-center">
        <h1
          className=" font-serif text-3xl font-bold"
          style={{
            background: "linear-gradient(45deg, #8a2387, #e94057, #f27121)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Check Out the Courses!
        </h1>
        <input
          placeholder="Search Course"
          className="py-2 px-4 border mt-5 lg:mt-0  w-7/12 lg:w-3/12 border-gray-300 rounded-md focus:outline-none focus:border-purple-600 transition-all duration-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredCourses.map((course) => (
          <div key={course.id} className=" m-8 flex">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
