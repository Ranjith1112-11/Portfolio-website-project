const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create contact table if not exists
async function initializeDatabase() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      mobile VARCHAR(20) NOT NULL,
      reason TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await pool.query(createTableQuery);
}

initializeDatabase();

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, mobile, reason } = req.body;
    const [result] = await pool.query(
      'INSERT INTO contacts (name, email, mobile, reason) VALUES (?, ?, ?, ?)',
      [name, email, mobile, reason]
    );
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));