const { Pool } = require("pg");
require("dotenv").config();

// PostgreSQL connection configuration
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "newsletter",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 5432,
});

// Create subscribers table if it doesn't exist
const createSubscribersTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS subscribers (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_active BOOLEAN DEFAULT true
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("Subscribers table created or already exists");
  } catch (error) {
    console.error("Error creating subscribers table:", error);
    throw error;
  }
};

// Add a new subscriber
const addSubscriber = async (email) => {
  const client = await pool.connect();
  try {
    // Check if email already exists
    const checkQuery = "SELECT id FROM subscribers WHERE email = $1";
    const checkResult = await client.query(checkQuery, [email]);

    if (checkResult.rows.length > 0) {
      throw new Error("Email already exists");
    }

    // Insert new subscriber
    const insertQuery = `
      INSERT INTO subscribers (email) 
      VALUES ($1) 
      RETURNING id, email, created_at
    `;
    const result = await client.query(insertQuery, [email]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

// Get all subscribers
const getAllSubscribers = async () => {
  const client = await pool.connect();
  try {
    const query = `
      SELECT id, email, created_at, is_active 
      FROM subscribers 
      ORDER BY created_at DESC
    `;
    const result = await client.query(query);
    return result.rows;
  } finally {
    client.release();
  }
};

// Get subscriber count
const getSubscriberCount = async () => {
  const client = await pool.connect();
  try {
    const query = "SELECT COUNT(*) FROM subscribers WHERE is_active = true";
    const result = await client.query(query);
    return parseInt(result.rows[0].count);
  } finally {
    client.release();
  }
};

// Remove subscriber (soft delete)
const removeSubscriber = async (email) => {
  const client = await pool.connect();
  try {
    const query = `
      UPDATE subscribers 
      SET is_active = false 
      WHERE email = $1 
      RETURNING id, email
    `;
    const result = await client.query(query, [email]);
    return result.rows[0];
  } finally {
    client.release();
  }
};

// Test database connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();
    console.log("Database connected successfully:", result.rows[0]);
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
};

// Initialize database
const initializeDatabase = async () => {
  try {
    await testConnection();
    await createSubscribersTable();
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  }
};

module.exports = {
  pool,
  addSubscriber,
  getAllSubscribers,
  getSubscriberCount,
  removeSubscriber,
  testConnection,
  initializeDatabase,
};
