export default function Hero({ onStart }) {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <h1 className="hero-title">
          Stop learning like everyone else.
          <br />
          <span className="hero-highlight">Design a path that matches you.</span>
        </h1>

        <p className="hero-subtitle">
          LearnPath uses your goals, pace and learning style to build a study roadmap
          that adapts over time. Start with a 60-second personalization quiz.
        </p>

        <div className="hero-badges">
          <span className="badge">🎯 Goal-driven study plans</span>
          <span className="badge">⏱️ Fits your daily time</span>
          <span className="badge">🧠 Adapts to your level</span>
        </div>

        <button className="primary-btn" onClick={onStart}>
          Start personalization
        </button>
      </div>
    </header>
  );
}
