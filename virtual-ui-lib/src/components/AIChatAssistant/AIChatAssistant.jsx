import React, { useState, useEffect } from "react";

export const AIChatAssistant = ({
  avatar = "https://i.imgur.com/6VBx3Io.png",
  name = "EVA",
  accent = "#6366f1",
  bg = "#0f172a",
  messages = ["Hello! I'm your AI assistant.", "How can I help you today?"],
  onSend = () => {},
  placeholder = "Type your message...",
  loading = false
}) => {
  const [inputValue, setInputValue] = useState("");
  const [messageHistory, setMessageHistory] = useState(messages);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  useEffect(() => {
    setMessageHistory(messages);
  }, [messages]);
  const handleSend = () => {
    if (!inputValue.trim()) return;
    onSend(inputValue);
    setInputValue("");
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", width: "340px", height: "400px", display: "flex", flexDirection: "column", border: "1px solid " + alpha(accent, 0.15), boxShadow: "0 16px 40px rgba(0,0,0,0.5)", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "18px", borderBottom: "1px solid " + alpha(accent, 0.1) }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "10px", overflow: "hidden" }}>
          <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ fontSize: "15px", fontWeight: "700", color: "#fff" }}>{name}</div>
        <div style={{ marginLeft: "auto", width: "10px", height: "10px", borderRadius: "50%", background: loading ? "#6366f1" : "#059669", boxShadow: "0 0 8px " + (loading ? "#6366f1" : "#059669") }} />
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {messageHistory.map((msg, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", animation: "fadeIn 0.3s ease", alignItems: i % 2 === 0 ? "flex-start" : "flex-end" }}>
            {i % 2 === 0 && (
              <div style={{ width: "28px", height: "28px", borderRadius: "8px", overflow: "hidden" }}>
                <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}
            <div style={{ maxWidth: "70%", padding: "12px 16px", borderRadius: i % 2 === 0 ? "12px 12px 12px 4px" : "12px 12px 4px 12px", background: i % 2 === 0 ? alpha(accent, 0.1) : alpha(accent, 0.2), border: "1px solid " + alpha(accent, 0.15), fontSize: "13px", color: "#fff", lineHeight: 1.6 }}>{msg}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "18px", borderTop: "1px solid " + alpha(accent, 0.1) }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            style={{ flex: 1, padding: "10px 14px", borderRadius: "10px", border: "1px solid " + alpha(accent, 0.15), background: alpha(accent, 0.05), color: "#fff", fontSize: "13px", outline: "none", transition: "border 0.2s" }}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            style={{ padding: "10px 14px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", opacity: loading ? 0.7 : 1, transition: "opacity 0.2s" }}
          >
            Send
          </button>
        </div>
      </div>
      <style>{"@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }"}</style>
    </div>
  );
};