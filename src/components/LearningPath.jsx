export function LearningPath({ course, profile }) {
  if (!course) return null;

  const days = course.durationWeeks * 7;
  const dailyMinutes = Number(profile.timePerDay);
  const totalMinutes = days * dailyMinutes;

  return (
    <div className="glass-card">
      <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Your learning plan</h3>
      <p style={{ opacity: 0.8 }}>
        You’ll study about <b>{dailyMinutes} min/day</b> for ~
        <b>{course.durationWeeks} weeks</b> ({totalMinutes} total minutes).
      </p>
      <p style={{ opacity: 0.8, marginTop: "0.75rem" }}>
        Week-by-week focus:
      </p>
      <ol style={{ paddingLeft: "1.2rem" }}>
        {course.topics.map((topic, index) => (
          <li key={topic}>
            <b>Week {index + 1}:</b> {topic}
          </li>
        ))}
      </ol>
    </div>
  );
}
