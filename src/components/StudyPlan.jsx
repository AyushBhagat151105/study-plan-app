// src/components/StudyPlan.jsx
import { useState } from "react";
import WeekCard from "./WeekCard";

const weekData = [
  {
    week: 1,
    goal: "Introduction to HTML & CSS 🌐",
    topics: [
      "🔍 HTML Basics 📄",
      "🎨 CSS Fundamentals 🎨",
      "🏗️ Web Structure 🏗️",
    ],
    project: "Build a Personal Webpage 🏡",
    resources: [
      "📖 [MDN Web Docs on HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)",
      "📖 [MDN Web Docs on CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)",
      "📹 [FreeCodeCamp HTML & CSS Course](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5)",
    ],
    importantTopics: [
      "HTML Elements and Attributes",
      "CSS Selectors and Box Model",
    ],
  },
  {
    week: 2,
    goal: "JavaScript Basics 📜",
    topics: [
      "🛠️ Understanding Variables and Data Types",
      "🔄 Control Structures: If, Switch, Loops",
      "📊 Functions: Declaration, Expressions, and Arrow Functions",
    ],
    project: "Create a Simple Calculator 🧮",
    resources: [
      "📖 [JavaScript Info](https://javascript.info)",
      "📖 [MDN Web Docs on JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)",
      "📹 [FreeCodeCamp JavaScript Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)",
    ],
    importantTopics: ["Variable Scope", "Event Handling"],
  },
  {
    week: 3,
    goal: "Responsive Design 📱",
    topics: [
      "📐 Media Queries: Making Your Site Mobile-Friendly",
      "🧩 Flexbox and Grid Layouts",
      "🖥️ Introduction to CSS Frameworks (Bootstrap, Tailwind)",
    ],
    project: "Revamp Your Personal Webpage for Responsiveness 📱",
    resources: [
      "📖 [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)",
      "📖 [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)",
      "📹 [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)",
    ],
    importantTopics: ["Mobile-First Design", "Flexbox and Grid Principles"],
  },
  {
    week: 4,
    goal: "Version Control with Git & GitHub 🛠️",
    topics: [
      "🌐 Understanding Git Basics",
      "📦 Creating and Managing Repositories on GitHub",
      "🔀 Branching and Merging",
    ],
    project: "Collaborate on a Group Project Using GitHub 🤝",
    resources: [
      "📖 [Pro Git Book](https://git-scm.com/book/en/v2)",
      "📖 [GitHub Learning Lab](https://lab.github.com/)",
      "📹 [Git & GitHub Crash Course](https://www.youtube.com/watch?v=RGOj5yH7evk)",
    ],
    importantTopics: [
      "Commit Messages Best Practices",
      "Collaboration Workflows",
    ],
  },
  {
    week: 5,
    goal: "Introduction to React 🌟",
    topics: [
      "💡 What is React? Component-Based Architecture",
      "🛠️ Setting Up a React Project",
      "🔗 State and Props",
    ],
    project: "Build a To-Do List Application ✅",
    resources: [
      "📖 [React Official Documentation](https://reactjs.org/docs/getting-started.html)",
      "📖 [FreeCodeCamp React Course](https://www.freecodecamp.org/learn/front-end-development-libraries/#react)",
      "📹 [React Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8)",
    ],
    importantTopics: ["JSX Syntax", "Component Lifecycle"],
  },
  {
    week: 6,
    goal: "Advanced React Concepts 🔄",
    topics: [
      "⏳ Lifecycle Methods",
      "🔄 Hooks: useState, useEffect",
      "🔗 Context API",
    ],
    project: "Create a Weather App Using API Calls 🌤️",
    resources: [
      "📖 [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)",
      "📖 [React Context API Documentation](https://reactjs.org/docs/context.html)",
      "📹 [Build a Weather App with React](https://www.youtube.com/watch?v=K1r6b0g8sM8)",
    ],
    importantTopics: [
      "Understanding useEffect",
      "Using Context for State Management",
    ],
  },
  {
    week: 7,
    goal: "Getting Started with Next.js 🚀",
    topics: [
      "🧩 What is Next.js? Features and Benefits",
      "🛠️ Setting Up a Next.js Project",
      "📂 File-Based Routing",
    ],
    project: "Build a Simple Blog with Next.js 📝",
    resources: [
      "📖 [Next.js Official Documentation](https://nextjs.org/docs/getting-started)",
      "📖 [Next.js Crash Course](https://www.youtube.com/watch?v=mTz0GXj8NN0)",
      "📹 [How to Create a Blog with Next.js](https://www.youtube.com/watch?v=Zy1L8kGfM_I)",
    ],
    importantTopics: ["Dynamic Routing", "Static vs. Server-Side Rendering"],
  },
  {
    week: 8,
    goal: "Server-Side Rendering and APIs 🌐",
    topics: [
      "📡 Understanding Server-Side Rendering (SSR)",
      "🔗 Fetching Data with Next.js",
      "🛠️ Introduction to REST APIs",
    ],
    project: "Enhance Your Blog with API Data 📖",
    resources: [
      "📖 [Next.js Data Fetching Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching)",
      "📖 [MDN Web Docs on REST APIs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)",
      "📹 [Server-Side Rendering in Next.js](https://www.youtube.com/watch?v=Yr1F2i49b_8)",
    ],
    importantTopics: ["API Integration", "Fetching Data on Server vs. Client"],
  },
  {
    week: 9,
    goal: "Building Full-Stack Applications 💻",
    topics: [
      "🛠️ Connecting Next.js with a Database",
      "📦 Introduction to MongoDB",
      "🔗 User Authentication Strategies",
    ],
    project: "Create a Full-Stack Application with Authentication 🔒",
    resources: [
      "📖 [MongoDB Documentation](https://www.mongodb.com/docs/atlas/getting-started/quickstart/)",
      "📖 [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)",
      "📹 [Full-Stack Next.js & MongoDB Tutorial](https://www.youtube.com/watch?v=1Re2MZSH2NQ)",
    ],
    importantTopics: ["Database Schemas", "Authentication Best Practices"],
  },
  {
    week: 10,
    goal: "Deploying Your Application 🚀",
    topics: [
      "🖥️ Overview of Deployment Options",
      "📦 Deploying with Vercel",
      "🔗 Setting Up Continuous Integration/Continuous Deployment (CI/CD)",
    ],
    project: "Deploy Your Full-Stack Application to Vercel 🌐",
    resources: [
      "📖 [Vercel Documentation](https://vercel.com/docs/platform/deployments)",
      "📖 [CI/CD with GitHub Actions](https://docs.github.com/en/actions/guides/about-continuous-integration)",
      "📹 [Deploy a Next.js App on Vercel](https://www.youtube.com/watch?v=anZKi8GgGm8)",
    ],
    importantTopics: ["Environment Variables", "Scaling Applications"],
  },
  {
    week: 11,
    goal: "Testing and Debugging 🧪",
    topics: [
      "🔍 Introduction to Testing in JavaScript",
      "🛠️ Using Jest for Unit Testing",
      "🔗 Debugging Techniques in React",
    ],
    project: "Implement Testing in Your Application 🧪",
    resources: [
      "📖 [Jest Documentation](https://jestjs.io/docs/getting-started)",
      "📖 [Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro)",
      "📹 [Testing React Applications](https://www.youtube.com/watch?v=8o4r4pK81Q)",
    ],
    importantTopics: ["Test-Driven Development", "Debugging Tools in Browser"],
  },
  {
    week: 12,
    goal: "Preparing for Job Interviews 🎤",
    topics: [
      "📝 Resume Writing Tips",
      "💬 Common Interview Questions",
      "🤝 Mock Interviews",
    ],
    project: "Prepare a Portfolio to Showcase Your Work 🖼️",
    resources: [
      "📖 [How to Build a Developer Portfolio](https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio/)",
      "📖 [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/)",
      "📹 [Interview Preparation Tips](https://www.youtube.com/watch?v=1E4bGnD7IoA)",
    ],
    importantTopics: [
      "Behavioral Interview Questions",
      "Technical Interview Questions",
    ],
  },
];

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
