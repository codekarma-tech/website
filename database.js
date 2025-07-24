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
    CREATE TABLE IF NOT EXISTS website_logins (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_date timestamp DEFAULT CURRENT_TIMESTAMP NULL,
    last_updated_date timestamp DEFAULT CURRENT_TIMESTAMP NULL,
    CONSTRAINT wlogin_uk_email UNIQUE (email)
  );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("Website logins table created or already exists");
  } catch (error) {
    console.error("Error creating website logins table:", error);
    throw error;
  }
};

// Add a new subscriber
const addSubscriber = async (email) => {
  const client = await pool.connect();
  try {
    // Check if email already exists
    const checkQuery = "SELECT id FROM website_logins WHERE email = $1";
    const checkResult = await client.query(checkQuery, [email]);

    if (checkResult.rows.length > 0) {
      throw new Error("Email already exists");
    }

    // Insert new subscriber
    const insertQuery = `
      INSERT INTO website_logins (email) 
      VALUES ($1) 
      RETURNING id, email, created_date, last_updated_date
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
      SELECT id, email, created_date, last_updated_date 
      FROM website_logins 
      ORDER BY created_date DESC
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
    const query = "SELECT COUNT(*) FROM website_logins";
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
      UPDATE website_logins 
      SET last_updated_date = CURRENT_TIMESTAMP
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
