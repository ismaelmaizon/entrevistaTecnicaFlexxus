import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_NAME } = process.env

export const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
