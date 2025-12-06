export function RecommendationList({ course, profile }) {
  if (!course) {
    return (
      <div className="card">
        <p>
          We couldn’t find a perfect match for your combination yet. Try changing subject or level –
          in a real system this is where an AI model would suggest a custom plan.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card">
      <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Recommended starting track</h3>
      <p style={{ opacity: 0.85, marginBottom: "0.75rem" }}>
        {course.title} · {course.durationWeeks} weeks · tailored for a{" "}
        {profile.level} learner who prefers {profile.style} learning.
      </p>
      <ul style={{ paddingLeft: "1.2rem" }}>
        {course.topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
