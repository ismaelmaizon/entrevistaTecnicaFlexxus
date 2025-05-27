import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_NAME } = process.env

let dbPort: number = 3306

if (DB_PORT === undefined || DB_PORT === '') {
  dbPort = 3306 // Default MySQL port
}

export const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  port: dbPort,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
