import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import routes
import monumentsRoute from "./routes/monuments.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import bookingRoute from "./routes/bookingorder.js";
import adminRoute from "./routes/admin.js";

dotenv.config();

const app = express();

// MongoDB connection
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
  }
};

// Handle MongoDB connection events
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Route middlewares
app.use("/monuments", monumentsRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/bookingorder", bookingRoute);
app.use("/admin", adminRoute);

// Base route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running successfully!" });
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong!";
  
  console.error(`[Error] ${statusCode} - ${message}`);
  
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Hide stack trace in production
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server is running on port ${PORT}`);
});
