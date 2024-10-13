const weekData = [
  {
    week: 1,
    goal: "Introduction to HTML & CSS 🌐",
    topics: ["HTML Basics 📄", "CSS Fundamentals 🎨", "Web Structure 🏗️"],
    project: "Build a Personal Webpage 🏡",
    resources: [
      "MDN Web Docs on HTML 📖",
      "MDN Web Docs on CSS 📖",
      "FreeCodeCamp HTML & CSS Course 📹",
    ],
  },
  {
    week: 2,
    goal: "JavaScript Basics 🚀",
    topics: [
      "JavaScript Syntax 📜",
      "Variables and Data Types 💾",
      "Control Structures (if, loops) 🔄",
    ],
    project: "Create a Simple Calculator 🧮",
    resources: [
      "MDN Web Docs on JavaScript 📖",
      "JavaScript.info Basics 📚",
      "FreeCodeCamp JavaScript Course 📹",
    ],
  },
  {
    week: 3,
    goal: "DOM Manipulation and Events 🌟",
    topics: [
      "Understanding the DOM 📑",
      "Event Listeners 🔔",
      "DOM Manipulation Methods ✂️",
    ],
    project: "Interactive To-Do List ✅",
    resources: [
      "MDN Web Docs on DOM 📖",
      "JavaScript30 DOM Manipulation Course 📹",
      "YouTube Tutorials on Events 📺",
    ],
  },
  {
    week: 4,
    goal: "CSS Flexbox & Grid Layouts 🎉",
    topics: [
      "Flexbox Basics 📏",
      "CSS Grid Layout 🚧",
      "Responsive Design Techniques 📱",
    ],
    project: "Build a Responsive Layout 🖥️",
    resources: [
      "CSS-Tricks Flexbox Guide 📖",
      "CSS-Tricks Grid Guide 📖",
      "FreeCodeCamp Responsive Design Course 📹",
    ],
  },
  {
    week: 5,
    goal: "JavaScript Functions and Scope 🔍",
    topics: [
      "Function Declarations and Expressions 📜",
      "Scope and Hoisting 🌌",
      "Arrow Functions →",
    ],
    project: "Create a Simple Quiz App ❓",
    resources: [
      "MDN Web Docs on Functions 📖",
      "Eloquent JavaScript Functions Chapter 📚",
      "YouTube Tutorials on Functions 📺",
    ],
  },
  {
    week: 6,
    goal: "Asynchronous JavaScript 🌐",
    topics: ["Callbacks 🔄", "Promises 🤝", "Async/Await 🚀"],
    project: "Weather App using API 🌤️",
    resources: [
      "MDN Web Docs on Promises 📖",
      "JavaScript.info Asynchronous JavaScript 📚",
      "FreeCodeCamp APIs and Microservices Course 📹",
    ],
  },
  {
    week: 7,
    goal: "Introduction to Version Control with Git 🔧",
    topics: [
      "Git Basics 📂",
      "Git Commands (clone, commit, push) ⏳",
      "Using GitHub 🌐",
    ],
    project: "Create a GitHub Repository 📁",
    resources: [
      "Git Documentation 📖",
      "FreeCodeCamp Git Course 📹",
      "YouTube Git and GitHub Tutorials 📺",
    ],
  },
  {
    week: 8,
    goal: "Responsive Web Design Principles 📐",
    topics: [
      "Media Queries 📱",
      "Mobile-First Design 📱",
      "Accessibility Best Practices ♿",
    ],
    project: "Make Your Personal Webpage Responsive 📏",
    resources: [
      "MDN Web Docs on Responsive Design 📖",
      "WebAIM Accessibility Resources ♿",
      "FreeCodeCamp Responsive Web Design Course 📹",
    ],
  },
  {
    week: 9,
    goal: "Introduction to Frameworks: React 🌈",
    topics: [
      "React Basics 🧩",
      "Components and Props 💼",
      "State and Lifecycle ⏳",
    ],
    project: "Build a Simple React App 🖥️",
    resources: [
      "React Documentation 📖",
      "FreeCodeCamp React Course 📹",
      "YouTube React Tutorials 📺",
    ],
  },
  {
    week: 10,
    goal: "Advanced React Concepts 🔍",
    topics: [
      "Context API 🌍",
      "React Router 🚦",
      "Hooks (useState, useEffect) ⚓",
    ],
    project: "Create a Multi-Page React App 📄",
    resources: [
      "React Documentation on Hooks 📖",
      "FreeCodeCamp Advanced React Course 📹",
      "YouTube Tutorials on React Router 📺",
    ],
  },
  {
    week: 11,
    goal: "State Management with Redux 🔄",
    topics: [
      "Understanding Redux Principles 📏",
      "Actions, Reducers, and Store 🏪",
      "Integrating Redux with React 🔗",
    ],
    project: "Build a Redux-Based Application 📈",
    resources: [
      "Redux Documentation 📖",
      "FreeCodeCamp Redux Course 📹",
      "YouTube Redux Tutorials 📺",
    ],
  },
  {
    week: 12,
    goal: "APIs and Fetching Data 🌍",
    topics: [
      "Using Fetch API 📥",
      "Working with RESTful APIs 🌐",
      "Handling Responses and Errors ⚠️",
    ],
    project: "Create an API-Driven App 🌟",
    resources: [
      "MDN Web Docs on Fetch API 📖",
      "FreeCodeCamp APIs Course 📹",
      "YouTube Tutorials on Fetch API 📺",
    ],
  },
  {
    week: 13,
    goal: "Introduction to Testing 🧪",
    topics: [
      "Importance of Testing 📊",
      "Unit Testing with Jest 🧩",
      "Testing React Components 🔍",
    ],
    project: "Write Tests for Your React App ✏️",
    resources: [
      "Jest Documentation 📖",
      "FreeCodeCamp Testing Course 📹",
      "YouTube Tutorials on Testing React 📺",
    ],
  },
  {
    week: 14,
    goal: "Deployment and CI/CD 🚀",
    topics: [
      "Hosting Your App 🌐",
      "Continuous Integration Basics 🏗️",
      "Using GitHub Actions 🔄",
    ],
    project: "Deploy Your React App 🌟",
    resources: [
      "Netlify Documentation 📖",
      "GitHub Actions Documentation 📖",
      "YouTube Tutorials on CI/CD 📺",
    ],
  },
  {
    week: 15,
    goal: "Understanding Web Security 🔒",
    topics: [
      "Common Security Vulnerabilities ⚠️",
      "Securing Your Web App 🔒",
      "Best Practices for Security 🛡️",
    ],
    project: "Audit Your Application for Security 🔍",
    resources: [
      "OWASP Top Ten Project 📖",
      "Web Security Academy 📚",
      "YouTube Tutorials on Web Security 📺",
    ],
  },
  {
    week: 16,
    goal: "Final Project and Portfolio 🌟",
    topics: [
      "Building Your Portfolio 📁",
      "Finalizing Your Project 🚀",
      "Presenting Your Work 🎤",
    ],
    project: "Create Your Portfolio Website 🌐",
    resources: [
      "Portfolio Examples 📖",
      "Best Practices for Portfolios 📚",
      "YouTube Tutorials on Building Portfolios 📺",
    ],
  },
];

export default weekData;