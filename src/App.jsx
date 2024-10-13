// src/App.jsx
import StudyPlan from "./components/StudyPlan";
import "./styles/globals.css"; // Ensure Tailwind CSS is properly configured

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen m-2">
      <StudyPlan />
    </div>
  );
};

export default App;
