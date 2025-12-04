import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const Mysql = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

Mysql.connect((err) => {
  if (err) {
    console.log("Not connect ❌", err); // include the error for debugging
    return;
  }
  console.log("Database connected ✅");
});

export default Mysql;
