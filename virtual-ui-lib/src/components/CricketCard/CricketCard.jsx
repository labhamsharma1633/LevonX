import React from "react";

export const CricketCard = ({
  team1 = "IND",
  team2 = "AUS",
  score1 = 320,
  score2 = 280,
  overs1 = 50,
  overs2 = 49,
  status = "India won by 40 runs",
  bg = "#0f172a",
  accent = "#6366f1",
  onDetailsClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "24px", width: "320px", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid " + alpha(accent, 0.25) }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "18px", fontWeight: "700", color: accent }}>{team1}</span>
          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>({overs1} overs)</span>
        </div>
        <span style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>{score1}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "18px", fontWeight: "700", color: accent }}>{team2}</span>
          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>({overs2} overs)</span>
        </div>
        <span style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>{score2}</span>
      </div>
      <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", textAlign: "center", marginBottom: "16px" }}>{status}</div>
      <button onClick={onDetailsClick} style={{ width: "100%", padding: "10px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>View Details</button>
    </div>
  );
};