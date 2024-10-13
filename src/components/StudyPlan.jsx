// src/components/StudyPlan.jsx
import { useState } from "react";
import WeekCard from "./WeekCard";
import weekData from "../data/weekdata";



const StudyPlan = () => {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setShowDropdown((prev) => (prev === index ? null : index));
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Study Plan</h1>
      <div className="grid grid-cols-1 gap-4">
        {weekData.map((weekData, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg border border-gray-200 p-4"
          >
            <div
              onClick={() => handleDropdownToggle(index)}
              className="cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                Week {weekData.week}
              </h2>
              <p className="text-gray-700">{weekData.goal}</p>
            </div>
            {showDropdown === index && (
              <div className="mt-2">
                <WeekCard weekData={weekData} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPlan;
