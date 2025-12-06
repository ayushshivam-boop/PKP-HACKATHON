import { useState } from "react";

const initialState = {
  name: "",
  subject: "Mathematics",
  level: "beginner",
  style: "visual",
  timePerDay: 30,
  goal: "",
};

export default function OnboardingQuiz({ onComplete }) {
  const [form, setForm] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onComplete(form);
  }

  return (
    <section className="container" style={{ paddingBottom: "2rem" }}>
      <h2 className="section-title">Let’s personalise your space</h2>
      <p className="section-caption">
        These answers run our (mock) recommendation engine. In a full system, they would feed an AI model.
      </p>

      <form onSubmit={handleSubmit} className="glass-card">
        <div className="quiz-grid">
          <div className="quiz-row">
            <div>
              <span className="label">Your name</span>
              <input
                name="name"
                type="text"
                placeholder="e.g. Ayush"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <span className="label">What do you want to learn first?</span>
              <select name="subject" value={form.subject} onChange={handleChange}>
                <option>Mathematics</option>
                <option>Programming</option>
                <option>Science</option>
              </select>
            </div>
          </div>

          <div className="quiz-row">
            <div>
              <span className="label">Current level</span>
              <select name="level" value={form.level} onChange={handleChange}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <span className="label">Preferred learning style</span>
              <select name="style" value={form.style} onChange={handleChange}>
                <option value="visual">Visual (diagrams, videos)</option>
                <option value="reading">Reading & notes</option>
                <option value="practice">Practice questions</option>
                <option value="video">Video-heavy</option>
              </select>
            </div>
          </div>

          <div className="quiz-row">
            <div>
              <span className="label">Minutes per day you can invest</span>
              <input
                type="number"
                name="timePerDay"
                min={10}
                max={240}
                value={form.timePerDay}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <span className="label">Your primary goal</span>
            <textarea
              name="goal"
              rows={3}
              placeholder="e.g. Clear upcoming mid-sem, get confident with algebra basics, finish Python fundamentals…"
              value={form.goal}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>
              You can always change these later from the dashboard.
            </span>
            <button type="submit" className="primary-btn">
              Generate my learning path
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

