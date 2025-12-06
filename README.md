PKP Hackathon — Personalized Learning Platform

Problem Statement – PKPES01

One-size-fits-all education often leaves students behind.
How can AI or adaptive learning techniques create personalized education experiences?

⸻

🚀 Tech Stack
	•	Frontend: React + JavaScript
	•	Styling: CSS
	•	Build Tool: Vite
	•	Package Manager: NPM
	•	Linting: ESLint

⸻

📁 Project Architecture 

├── public/

│   └── vite.svg

├── src/

│   ├── assets/

│   │   └── react.svg

│   │

│   ├── components/

│   │   ├── ChatAssistant.jsx

│   │   ├── Dashboard.jsx

│   │   ├── Hero.jsx

│   │   ├── LearningPath.jsx
|
│   │   ├── Navbar.jsx

│   │   ├── OnboardingQuiz.jsx

│   │   ├── ProgressTracker.jsx

│   │   └── RecommendationList.jsx

│   ├── data/

│   │   └── courses.js

│   │

│   ├── App.css

│   ├── App.jsx

│   ├── index.css

│   ├── main.jsx

│

├── .gitignore

├── README.md

├── eslint.config.js

├── index.html

├── package-lock.json

├── package.json

└── vite.config.js

Architecture Explanation

📂 public/

Contains static files such as icons that do not go through bundling.
	•	vite.svg → Default Vite logo.

⸻

📂 src/

Main source folder containing all logic, UI, and configuration.

📂 src/assets/

Static media used inside the app.
	•	react.svg — Logo/graphics.

⸻

📂 src/components/

Contains all UI components and functional modules.

Component-Description
ChatAssistant.jsx- AI chatbot for learning support.
Dashboard.jsx-User dashboard showing progress & insights.
Hero.jsx-Homepage hero section.
LearningPath.jsx-Dynamic AI-generated learning path UI.
Navbar.jsx-Navigation bar for the site.
OnboardingQuiz.jsx-Quiz for assessing learner profile/preferences.
ProgressTracker.jsx-Visual tracking of learning progress.
RecommendationList.jsx-Course/content recommendations from AI.
src/data/

Contains static data and dataset.
	•	courses.js → Course data used by the recommendation system.
Root Files Inside src/
File-Purpose
App.jsx-Main app layout and routing.
App.css-Styles for App.
index.css-Global CSS styles.
main.jsx-Entry point that renders React into the DOM.
Configuration Files
File-Purpose
index.html-Main HTML shell; React mounts here.
package.json-Dependencies, scripts, project metadata.
package-lock.json-Locks exact versions for consistent installs.
vite.config.js-Vite bundler configuration.
eslint.config.js-Ensures consistent JS code style.
.gitignore-Excludes unwanted files from Git.
README.md-Project documentation.
Running the Project
1. Install dependencies-npm install
2. ⁠Run the development server-npm run dev
3. ⁠Build for production-npm run build

🚀Deployment Of The Website(using vercel)
Link: https://ai-student-helper-blush.vercel.app/

Team Members

	•	Shivangi Kakkar
	•	Ayush Shivam
