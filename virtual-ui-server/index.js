import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/connectDB.js";
dotenv.config();
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import componentRouter from "./routes/component.route.js";
import paymentRouter from "./routes/payment.route.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.CLIENT_URL
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, curl, or same-origin requests)
      if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  })
);

/* ✅ Body parser */
app.use(express.json());
app.use(cookieParser()); 
app.get("/", (req, res) => {
  res.json({ message: "LevonX Backend Running 🚀" });
});

app.use("/api/auth" , authRouter)
app.use("/api/user" , userRouter)
app.use("/api/component" , componentRouter)
app.use("/api/payment" , paymentRouter)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  connectDB()
});
