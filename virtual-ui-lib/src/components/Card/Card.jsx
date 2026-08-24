import React, { useState } from "react";

// 🎨 Variant styles
const variantStyles = {
  primary: {
    background: "#534AB7",
    color: "#fff",
    border: "1.5px solid #3C3489",
  },
  secondary: {
    background: "#fff",
    color: "#534AB7",
    border: "1.5px solid #534AB7",
  },
  danger: {
    background: "#A32D2D",
    color: "#fff",
    border: "1.5px solid #791F1F",
  },
  ghost: {
    background: "#fff",
    color: "#333",
    border: "1.5px solid #ccc",
  },
};

export const Card = ({
  title = "Card Title",
  variant = "primary",
  description = "A short description of the card content goes here.",
  tag = "Category",
  tagColor = "#E6F1FB",
  tagTextColor = "#185FA5",
  accentColor = "#E6F1FB",
  accentIcon = "🖼",
  author = "Author Name",
  authorInitials = "AU",
  authorBg = "#EAF3DE",
  authorColor = "#3B6D11",
  date = "Apr 12",
  width = "280px",
  onClick,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);

  const currentVariant =
    variantStyles[variant] || variantStyles.primary;

  const styles = {
    card: {
      width,
      borderRadius: "12px",
      border: hovered
        ? "1.5px solid #aaa"
        : currentVariant.border,
      overflow: "hidden",
      cursor: "pointer",
      transition: "all 0.2s ease",
      boxShadow: hovered
        ? "0 6px 18px rgba(0,0,0,0.1)"
        : "none",
      backgroundColor: currentVariant.background,
      fontFamily: "sans-serif",
    },
    imageArea: {
      height: "140px",
      backgroundColor: accentColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
    },
    body: {
      padding: "1rem 1.25rem",
    },
    tag: {
      display: "inline-block",
      fontSize: "11px",
      fontWeight: "500",
      backgroundColor: tagColor,
      color: tagTextColor,
      borderRadius: "4px",
      padding: "2px 8px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "600",
      margin: "0.5rem 0 0.25rem",
      color:
        variant === "primary" || variant === "danger"
          ? "#fff"
          : "#111",
    },
    description: {
      fontSize: "14px",
      color:
        variant === "primary" || variant === "danger"
          ? "#e0e0e0"
          : "#555",
      margin: "0 0 1rem",
      lineHeight: "1.6",
    },
    footer: {
      borderTop:
        variant === "primary" || variant === "danger"
          ? "1px solid rgba(255,255,255,0.2)"
          : "1px solid #eee",
      paddingTop: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    authorRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    avatar: {
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      backgroundColor: authorBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      fontWeight: "500",
      color: authorColor,
    },
    authorName: {
      fontSize: "13px",
      color:
        variant === "primary" || variant === "danger"
          ? "#ddd"
          : "#666",
    },
    date: {
      fontSize: "12px",
      color:
        variant === "primary" || variant === "danger"
          ? "#ccc"
          : "#999",
    },
  };

  return (
    <div
      className={className}
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image / Icon */}
      <div style={styles.imageArea}>
        {accentIcon}
      </div>

      {/* Body */}
      <div style={styles.body}>
        <span style={styles.tag}>{tag}</span>

        <h3 style={styles.title}>{title}</h3>

        <p style={styles.description}>
          {description}
        </p>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.authorRow}>
            <div style={styles.avatar}>
              {authorInitials}
            </div>
            <span style={styles.authorName}>
              {author}
            </span>
          </div>

          <span style={styles.date}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;