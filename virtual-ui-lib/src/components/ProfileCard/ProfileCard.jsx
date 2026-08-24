import React,{ useState } from "react";

export const ProfileCard = ({
  name = "Alex Johnson",
  role = "Product Designer",
  bio = "Crafting intuitive interfaces and delightful user experiences.",
  avatarUrl = "",
  initials = "AJ",
  accentColor = "#7F77DD",
  followers = 1240,
  following = 380,
  posts = 56,
}) => {
  const [followed, setFollowed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const styles = {
    card: {
      width: 280,
      borderRadius: 16,
      border: "1px solid rgba(0,0,0,0.08)",
      background: "#fff",
      overflow: "hidden",
      fontFamily: "system-ui, sans-serif",
      boxShadow: hovered
        ? "0 8px 32px rgba(0,0,0,0.12)"
        : "0 2px 8px rgba(0,0,0,0.06)",
      transition: "box-shadow 0.2s ease, transform 0.2s ease",
      transform: hovered ? "translateY(-2px)" : "translateY(0)",
    },
    banner: {
      height: 72,
      background: accentColor,
      opacity: 0.15,
    },
    body: { padding: "0 20px 20px", marginTop: -32 },
    avatarWrap: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      border: "3px solid #fff",
      overflow: "hidden",
      background: accentColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
    },
    initials: { color: "#fff", fontWeight: 600, fontSize: 20 },
    name: { margin: "0 0 2px", fontSize: 17, fontWeight: 600, color: "#111" },
    role: { margin: "0 0 8px", fontSize: 13, color: "#777" },
    bio: { margin: "0 0 16px", fontSize: 13, color: "#555", lineHeight: 1.5 },
    stats: {
      display: "flex",
      gap: 20,
      borderTop: "1px solid #f0f0f0",
      paddingTop: 14,
      marginBottom: 16,
    },
    stat: { display: "flex", flexDirection: "column", alignItems: "center" },
    statNum: { fontSize: 15, fontWeight: 600, color: "#111" },
    statLabel: { fontSize: 11, color: "#999", marginTop: 1 },
    btn: {
      width: "100%",
      padding: "9px 0",
      borderRadius: 8,
      border: followed ? `1.5px solid ${accentColor}` : "none",
      background: followed ? "#fff" : accentColor,
      color: followed ? accentColor : "#fff",
      fontWeight: 600,
      fontSize: 13,
      cursor: "pointer",
      transition: "all 0.18s ease",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.banner} />
      <div style={styles.body}>
        <div style={styles.avatarWrap}>
          {avatarUrl
            ? <img src={avatarUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={styles.initials}>{initials}</span>
          }
        </div>
        <p style={styles.name}>{name}</p>
        <p style={styles.role}>{role}</p>
        <p style={styles.bio}>{bio}</p>
        <div style={styles.stats}>
          {[["Posts", posts], ["Followers", followed ? followers + 1 : followers], ["Following", following]].map(([label, val]) => (
            <div key={label} style={styles.stat}>
              <span style={styles.statNum}>{val.toLocaleString()}</span>
              <span style={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
        <button style={styles.btn} onClick={() => setFollowed(f => !f)}>
          {followed ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

