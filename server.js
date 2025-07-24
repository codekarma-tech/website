// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs").promises;
const multer = require("multer");
require("dotenv").config();

// Import database functions
const {
  addSubscriber,
  getAllSubscribers,
  getSubscriberCount,
  removeSubscriber,
  initializeDatabase,
} = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure multer for FormData handling (text fields only, no files)
const upload = multer();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Initialize database on server start
initializeDatabase().catch((error) => {
  console.error("Failed to initialize database:", error);
  process.exit(1);
});

// Function to write email to text file
const writeEmailToFile = async (email) => {
  try {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${email}\n`;
    const filePath = path.join(__dirname, "email_subscriptions.txt");

    await fs.appendFile(filePath, logEntry, "utf8");
    console.log(`Email logged to file: ${email}`);
  } catch (error) {
    console.error("Error writing email to file:", error);
    // Don't throw error - file logging is supplementary
  }
};

// Static routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API endpoint to store email in PostgreSQL
// Use upload.none() to handle FormData with text fields only
app.post("/api/subscribe", upload.none(), async (req, res) => {
  try {
    // Handle both "email" and "Email" field names from form submissions
    console.log("Request body:", req.body);
    console.log("Content-Type:", req.get("Content-Type"));
    const { email, Email } = req.body;
    const emailValue = email || Email;

    if (!emailValue) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    const cleanEmail = emailValue.trim();

    // Write email to text file first (before database)
    await writeEmailToFile(cleanEmail);

    try {
      // Add subscriber to database
      await addSubscriber(cleanEmail);
    } catch (error) {
      console.error("Error adding email to database:", error);
    }

    res.json({
      success: true,
      message: "Email successfully added to the list!",
    });
  } catch (error) {
    console.error("Error adding email to database:", error);

    // Handle duplicate email error
    if (error.message === "Email already exists") {
      return res.status(409).json({
        success: false,
        message: "This email is already subscribed",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to add email. Please try again.",
    });
  }
});

// API endpoint to get all subscribers (for admin purposes)
app.get("/api/subscribers", async (req, res) => {
  try {
    const subscribers = await getAllSubscribers();
    const count = await getSubscriberCount();

    res.json({
      success: true,
      data: subscribers,
      count: count,
      total: subscribers.length,
    });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch subscribers",
    });
  }
});

// API endpoint to get subscriber count only
app.get("/api/subscribers/count", async (req, res) => {
  try {
    const count = await getSubscriberCount();

    res.json({
      success: true,
      count: count,
    });
  } catch (error) {
    console.error("Error fetching subscriber count:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch subscriber count",
    });
  }
});

// API endpoint to unsubscribe
app.post("/api/unsubscribe", upload.none(), async (req, res) => {
  try {
    // Handle both "email" and "Email" field names from form submissions
    const { email, Email } = req.body;
    const emailValue = email || Email;

    if (!emailValue) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const result = await removeSubscriber(emailValue.toLowerCase().trim());

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Email not found in our list",
      });
    }

    res.json({
      success: true,
      message: "Successfully unsubscribed",
    });
  } catch (error) {
    console.error("Error unsubscribing email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to unsubscribe. Please try again.",
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Catch-all route for SPA-like behavior (optional)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
