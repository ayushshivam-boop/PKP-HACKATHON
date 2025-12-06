import React from "react";

export function ProgressTracker({ topics = [], completedWeeks = [], onToggleWeek }) {
  const totalWeeks = topics.length;
  const completion =
    totalWeeks === 0 ? 0 : Math.round((completedWeeks.length / totalWeeks) * 100);

  return (
    <div className="glass-card">
      <h3 style={{ fontWeight: 600, marginBottom: "0.3rem" }}>Weekly progress</h3>
      <p className="section-caption" style={{ marginBottom: 0 }}>
        Mark a week as done when you finish its topics. The completion bar updates automatically.
      </p>

      {/* progress bar */}
      <div className="progress-bar-outer">
        <div
          className="progress-bar-inner"
          style={{ width: `${completion}%` }}
        />
      </div>

      <div className="progress-meta">
        <span>{completion}% complete</span>
        <span>
          {completedWeeks.length}/{totalWeeks} weeks done
        </span>
      </div>

      {/* week list with toggle buttons */}
      <div style={{ marginTop: "0.7rem", display: "grid", gap: "0.4rem" }}>
        {topics.map((topic, index) => {
          const weekNumber = index + 1;
          const isDone = completedWeeks.includes(weekNumber);

          return (
            <div
              key={weekNumber}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.9rem",
                padding: "0.4rem 0.55rem",
                borderRadius: "0.7rem",
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(30,64,175,0.6)",
              }}
            >
              <div>
                <div style={{ fontWeight: 500 }}>Week {weekNumber}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-soft)" }}>{topic}</div>
              </div>

              <button
                type="button"
                onClick={() => onToggleWeek(weekNumber)}
                style={{
                  padding: "0.3rem 0.7rem",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  background: isDone
                    ? "rgba(34,197,94,0.15)"
                    : "rgba(15,23,42,0.9)",
                  color: isDone ? "#22c55e" : "var(--text)",
                  borderColor: isDone ? "rgba(34,197,94,0.7)" : "rgba(148,163,184,0.5)",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                {isDone ? "✓ Done" : "Mark done"}
              </button>
            </div>
          );
        })}

        {totalWeeks === 0 && (
          <p style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>
            Your plan doesn’t have any weeks defined yet.
          </p>
        )}
      </div>
    </div>
  );
}
