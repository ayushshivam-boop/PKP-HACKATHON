import { useEffect, useState } from "react";
import { RecommendationList } from "./RecommendationList.jsx";
import { LearningPath } from "./LearningPath.jsx";
import { ProgressTracker } from "./ProgressTracker.jsx";
import ChatAssistant from "./ChatAssistant.jsx";
import { COURSES } from "../data/courses.js";

export default function Dashboard({ profile }) {
  const course = COURSES.find(
    (c) =>
      c.subject === profile.subject &&
      c.level === profile.level &&
      (c.style === profile.style || c.style === "practice")
  );

  const topics = course?.topics || [];
  const storageKey = course
    ? `learnpath_progress_${profile.id}_${course.id}`
    : null;

  const [completedWeeks, setCompletedWeeks] = useState([]);

  // load saved progress for this user + course
  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setCompletedWeeks(parsed);
      } catch {
        // ignore parse errors
      }
    } else {
      setCompletedWeeks([]);
    }
  }, [storageKey]);

  // save progress when it changes
  useEffect(() => {
    if (!storageKey) return;
    localStorage.setItem(storageKey, JSON.stringify(completedWeeks));
  }, [completedWeeks, storageKey]);

  function handleToggleWeek(weekNumber) {
    setCompletedWeeks((prev) =>
      prev.includes(weekNumber)
        ? prev.filter((w) => w !== weekNumber)
        : [...prev, weekNumber]
    );
  }

  return (
    <section className="container" style={{ paddingBottom: "2.5rem" }}>
      <h2 className="section-title">
        Hi {profile.name || "learner"}, here’s your learning control-room.
      </h2>
      <p className="section-caption">
        Mark each week as done as you move through your personalised path.
      </p>

      <div className="pills-row">
        <span className="pill pill--accent">Subject: {profile.subject}</span>
        <span className="pill">Level: {profile.level}</span>
        <span className="pill">Style: {profile.style}</span>
        <span className="pill">Time/day: {profile.timePerDay} min</span>
      </div>

      <div className="dashboard-grid">
        <div>
          <div className="glass-card">
            <h3 style={{ fontWeight: 600, marginBottom: "0.4rem" }}>Your goal</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-soft)" }}>
              {profile.goal || "No specific goal set yet. Edit in quiz to make this more targeted."}
            </p>
          </div>

          <RecommendationList course={course} profile={profile} />
          <LearningPath course={course} profile={profile} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ProgressTracker
            topics={topics}
            completedWeeks={completedWeeks}
            onToggleWeek={handleToggleWeek}
          />
          <ChatAssistant />
        </div>
      </div>
    </section>
  );
}
