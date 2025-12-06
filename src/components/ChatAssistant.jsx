import { useState } from "react";

export default function ChatAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Ask anything about your plan. (In real system this is AI.)" },
  ]);

  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };

    // simple fake AI: echo with a tip
    const botMsg = {
      from: "bot",
      text:
        "I would break that into a smaller step. Focus on understanding the concept first, " +
        "then practice 3–5 questions. (Demo response.)",
    };

    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  }

  return (
    <div className="glass-card">
      <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Ask your learning assistant</h3>
      <div
        style={{
          maxHeight: "180px",
          overflowY: "auto",
          marginBottom: "0.75rem",
          padding: "0.5rem",
          background: "#020617",
          borderRadius: "0.75rem",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.from === "user" ? "right" : "left",
              marginBottom: "0.4rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.35rem 0.7rem",
                borderRadius: "999px",
                background: m.from === "user" ? "#38bdf8" : "#111827",
                color: m.from === "user" ? "#020617" : "#e5e7eb",
                fontSize: "0.85rem",
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} style={{ display: "flex", gap: "0.5rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. How should I revise tomorrow?"
          style={{ flex: 1 }}
        />
        <button
          type="submit"
          style={{
            padding: "0.4rem 0.9rem",
            borderRadius: "999px",
            border: "none",
            background: "#22c55e",
            color: "#020617",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

