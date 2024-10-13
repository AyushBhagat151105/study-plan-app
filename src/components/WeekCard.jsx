// src/components/WeekCard.jsx

import PropTypes from "prop-types";

const WeekCard = ({ weekData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-2 text-blue-600">
        Week {weekData.week} 🎉
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        {weekData.goal}
      </h3>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-1">Topics:</h4>
        <ul className="list-disc list-inside ml-5 text-gray-600">
          {weekData.topics.map((topic, index) => (
            <li key={index} className="mb-1">
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-1">Project:</h4>
        <p className="text-gray-600">{weekData.project}</p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Resources:</h4>
        <ul className="list-disc list-inside ml-5 text-gray-600">
          {weekData.resources.map((resource, index) => (
            <li key={index} className="mb-1">
              {resource}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

WeekCard.propTypes = {
  weekData: PropTypes.shape({
    week: PropTypes.number.isRequired,
    goal: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    project: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default WeekCard;
