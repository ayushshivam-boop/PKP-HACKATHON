import { useState } from "react";

function initialsFromName(name = "") {
  const parts = name.trim().split(" ");
  if (parts.length === 0) return "U";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() || "U";
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function Navbar({
  activeProfile,
  users,
  onSignOut,
  onSwitchUser,
  onAddUser,
}) {
  const [open, setOpen] = useState(false);

  const hasActive = !!activeProfile;

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="nav-brand">LearnPath</div>

        {/* RIGHT SIDE */}
        {!hasActive && (
          <div className="nav-pill">No learner selected</div>
        )}

        {hasActive && (
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setOpen((o) => !o)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.4rem",
                borderRadius: "999px",
                border: "1px solid rgba(148,163,184,0.5)",
                background: "rgba(15,23,42,0.9)",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "999px",
                  background: "linear-gradient(120deg,#38bdf8,#22c55e)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#020617",
                }}
              >
                {initialsFromName(activeProfile.name)}
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 12, color: "var(--text-soft)" }}>
                  Signed in as
                </div>
                <div style={{ fontSize: 13 }}>
                  {activeProfile.name || "Learner"}
                </div>
              </div>
              <span style={{ fontSize: 18, lineHeight: 1 }}>▾</span>
            </button>

            {open && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  marginTop: "0.5rem",
                  minWidth: 230,
                  background: "rgba(15,23,42,0.96)",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(148,163,184,0.3)",
                  boxShadow: "0 18px 40px rgba(15,23,42,0.9)",
                  padding: "0.35rem",
                  zIndex: 20,
                }}
              >
                <div
                  style={{
                    padding: "0.45rem 0.6rem",
                    fontSize: 12,
                    color: "var(--text-soft)",
                  }}
                >
                  Learners on this device
                </div>

                {/* list all users */}
                {users.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => {
                      onSwitchUser(u.id);
                      setOpen(false);
                    }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "0.45rem 0.7rem",
                      borderRadius: "0.6rem",
                      border: "none",
                      background:
                        u.id === activeProfile.id
                          ? "rgba(56,189,248,0.15)"
                          : "transparent",
                      color:
                        u.id === activeProfile.id
                          ? "var(--accent)"
                          : "var(--text)",
                      fontSize: 13,
                      cursor: "pointer",
                    }}
                  >
                    {u.name || "Learner"} · {u.subject}
                  </button>
                ))}

                <div
                  style={{
                    borderTop: "1px solid rgba(31,41,55,0.9)",
                    margin: "0.3rem 0",
                  }}
                />

                <button
                  onClick={() => {
                    onAddUser();
                    setOpen(false);
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "0.45rem 0.7rem",
                    borderRadius: "0.6rem",
                    border: "none",
                    background: "transparent",
                    color: "var(--text)",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  ➕ Add another learner
                </button>

                <button
                  onClick={() => {
                    onSignOut();
                    setOpen(false);
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "0.45rem 0.7rem",
                    borderRadius: "0.6rem",
                    border: "none",
                    background: "transparent",
                    color: "#f97373",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  🚪 Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
