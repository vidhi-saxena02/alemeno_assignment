import React from "react";
import { useDispatch } from "react-redux";
import { markCompleted, markUncompleted } from "../store";

const Completion = ({ courseID, courseCompleted }) => {
  const dispatch = useDispatch();
  const handleAction = (courseID) => {
    if (courseCompleted) {
      dispatch(markUncompleted(courseID));
    } else {
      dispatch(markCompleted(courseID));
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <div>Mark Completed</div>
      {courseCompleted ? (
        <button
          onClick={() => handleAction(courseID)}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Completed
        </button>
      ) : (
        <button
          onClick={() => handleAction(courseID)}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Not Completed
        </button>
      )}
    </div>
  );
};

export default Completion;
