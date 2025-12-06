import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import OnboardingQuiz from "./components/OnboardingQuiz.jsx";
import Dashboard from "./components/Dashboard.jsx";

const USERS_KEY = "learnpath_users";
const ACTIVE_KEY = "learnpath_active_user_id";

function App() {
  const [users, setUsers] = useState([]);
  const [activeUserId, setActiveUserId] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const activeProfile = users.find((u) => u.id === activeUserId) || null;

  // Load saved users and active user on first render
  useEffect(() => {
    const savedUsers = localStorage.getItem(USERS_KEY);
    const savedActiveId = localStorage.getItem(ACTIVE_KEY);

    if (savedUsers) {
      try {
        const parsed = JSON.parse(savedUsers);
        setUsers(parsed);
      } catch {
        // ignore
      }
    }
    if (savedActiveId) setActiveUserId(savedActiveId);
  }, []);

  // When quiz is completed, create a new learner profile
  function handleQuizComplete(data) {
    const id = Date.now().toString(); // simple unique id
    const newUser = { id, ...data };
    const nextUsers = [...users, newUser];

    setUsers(nextUsers);
    setActiveUserId(id);
    setShowQuiz(false);

    localStorage.setItem(USERS_KEY, JSON.stringify(nextUsers));
    localStorage.setItem(ACTIVE_KEY, id);
  }

  // Switch to an existing learner
  function handleSwitchUser(id) {
    setActiveUserId(id);
    localStorage.setItem(ACTIVE_KEY, id);
    setShowQuiz(false);
  }

  // Start creating a brand-new learner
  function handleAddUser() {
    setActiveUserId(null);       // no active user while filling quiz
    setShowQuiz(true);
  }

  // “Sign out”: no active learner, but keep profiles on this device
  function handleSignOut() {
    setActiveUserId(null);
    localStorage.removeItem(ACTIVE_KEY);
    setShowQuiz(false);
  }

  return (
    <div className="app">
      <Navbar
        activeProfile={activeProfile}
        users={users}
        onSignOut={handleSignOut}
        onSwitchUser={handleSwitchUser}
        onAddUser={handleAddUser}
      />

      {/* LANDING & QUIZ */}
      {!activeProfile && !showQuiz && (
        <>
          <Hero onStart={() => setShowQuiz(true)} />

          {users.length > 0 && (
            <section className="container" style={{ paddingBottom: "2rem" }}>
              <h2 className="section-title">Continue as</h2>
              <p className="section-caption">
                Profiles already created on this device.
              </p>
              <div className="pills-row">
                {users.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => handleSwitchUser(u.id)}
                    className="pill pill--accent"
                    style={{ cursor: "pointer", border: "none" }}
                  >
                    {u.name || "Unnamed learner"} · {u.subject}
                  </button>
                ))}
                <button
                  onClick={handleAddUser}
                  className="pill"
                  style={{ cursor: "pointer", borderStyle: "dashed" }}
                >
                  + Add another learner
                </button>
              </div>
            </section>
          )}
        </>
      )}

      {!activeProfile && showQuiz && (
        <OnboardingQuiz onComplete={handleQuizComplete} />
      )}

      {/* DASHBOARD */}
      {activeProfile && <Dashboard profile={activeProfile} />}
    </div>
  );
}

export default App;
