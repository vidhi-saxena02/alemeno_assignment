import axios from "axios";

export const getCourse = () => {
  const response = axios.get("http://localhost:3001/api/courses");
  return response;
};

export const getCourseById = (id) => {
  const response = axios.get(`http://localhost:3001/api/courses/${id}`);
  return response;
};
