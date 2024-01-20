import React from "react";
import { useState } from "react";

const DropDownContent = ({ data }) => {
  const [initialIsOpen, setInitialIsOpen] = useState(false);
  return (
    <div>
      <div className="border-t border-l border-r border-black  bg-slate-50 flex gap-x-10 p-2  ">
        <button onClick={() => setInitialIsOpen(!initialIsOpen)}>
          {initialIsOpen ? "v" : ">"}
        </button>
        <div className="text-[20px] lg:text-xl font-bold">
          WEEK - {data.week}
        </div>
      </div>
      {initialIsOpen && (
        <div className=" border-l text-md font-sans px-10  border-r border-black bg-slate-50">
          <li className="font-bold">{data.topic}</li>
          <p className="mx-10">- {data.content}</p>
        </div>
      )}
    </div>
  );
};

export default DropDownContent;
