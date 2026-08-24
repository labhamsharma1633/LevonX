import React, { useState } from "react";

export const HeroSection = ({
  title = "Revolutionize Your AI Workflow",
  subtitle = "Harness the power of cutting-edge AI tools to transform your business.",
  stats = [
    { value: "95%", label: "Accuracy" },
    { value: "10x", label: "Faster" },
    { value: "24/7", label: "Support" }
  ],
  placeholder = "Enter your email",
  buttonText = "Get Early Access",
  accent = "#6366f1",
  bg = "#0f172a",
  onSignup = () => {}
}) => {
  const [email, setEmail] = useState("");
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, padding: "80px 24px", textAlign: "center", fontFamily: "system-ui,sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at center, " + alpha(accent, 0.1) + " 0%, transparent 70%)", pointerEvents: "none" }} />
      <h1 style={{ fontSize: "56px", fontWeight: "800", background: "linear-gradient(90deg, " + accent + ", " + alpha(accent, 0.7) + ")", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 16px" }}>{title}</h1>
      <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 48px" }}>{subtitle}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "64px" }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ background: alpha(accent, 0.1), border: "1px solid " + alpha(accent, 0.3), borderRadius: "16px", padding: "20px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "800", background: "linear-gradient(90deg, " + accent + ", " + alpha(accent, 0.7) + ")", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "8px" }}>{stat.value}</div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "500px", margin: "0 auto", display: "flex", gap: "12px" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          style={{
            flex: 1,
            padding: "14px 20px",
            borderRadius: "12px",
            border: "1px solid " + alpha(accent, 0.3),
            background: alpha(accent, 0.1),
            color: "#fff",
            fontSize: "14px",
            outline: "none",
            fontFamily: "inherit"
          }}
        />
        <button
          onClick={() => onSignup(email)}
          style={{
            padding: "14px 24px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(90deg, " + accent + ", " + alpha(accent, 0.7) + ")",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit"
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};