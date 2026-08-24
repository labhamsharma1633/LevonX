import React, { useState } from "react";

const variantStyles = {
  primary: {
    background: "#534AB7",
    color: "#fff",
    border: "1.5px solid #3C3489",
  },
  secondary: {
    background: "transparent",
    color: "#534AB7",
    border: "1.5px solid #534AB7",
  },
  danger: {
    background: "#A32D2D",
    color: "#fff",
    border: "1.5px solid #791F1F",
  },
  ghost: {
    background: "transparent",
    color: "#333",
    border: "1.5px solid #ccc",
  },
};

const sizeStyles = {
  sm: { padding: "6px 14px", fontSize: "13px", borderRadius: "6px" },
  md: { padding: "9px 20px", fontSize: "15px", borderRadius: "8px" },
  lg: { padding: "13px 28px", fontSize: "17px", borderRadius: "10px" },
};

export const Button = ({
  label = "Click me",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  onClick = () => {},
}) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "inherit",
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    outline: "none",
    transition: "opacity 0.15s, transform 0.1s, background 0.15s",
    transform: active && !disabled ? "scale(0.97)" : "scale(1)",
    ...variantStyles[variant] || variantStyles.primary,
    ...sizeStyles[size] || sizeStyles.md,
    ...(hovered && !disabled && variant === "primary"
      ? { background: "#3C3489" }
      : {}),
    ...(hovered && !disabled && variant === "secondary"
      ? { background: "#EEEDFE" }
      : {}),
    ...(hovered && !disabled && variant === "danger"
      ? { background: "#791F1F" }
      : {}),
    ...(hovered && !disabled && variant === "ghost"
      ? { background: "#f3f3f3" }
      : {}),
  };

  return (
    <button
      style={baseStyle}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {leftIcon && <span style={{ display: "flex", alignItems: "center" }}>{leftIcon}</span>}
      {label}
      {rightIcon && <span style={{ display: "flex", alignItems: "center" }}>{rightIcon}</span>}
    </button>
  );
};


