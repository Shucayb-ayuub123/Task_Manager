import db from "../Database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
export const SingUp = async (req, res) => {
  const { Name, Email, password } = req.body;
  const sql = "SELECT * FROM user_check WHERE Email = ?";

  db.query(sql, [Email], async (error, data) => {
    if (error) {
      return res.status(500).json({ message: error });
    }

    if (data.length > 0) {
      return res.status(403).json({ message: "User already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const insertSql =
      "INSERT INTO user_check (Name, Password, Email) VALUES (?,?,?)";

    db.query(insertSql, [Name, hashPass, Email], (error, result) => {
      if (error) {
        return res.status(500).json({ message: error });
      }

      // Correct way: send JSON with insertId
      return res.status(200).json({
        message: "Successfully signed up",
        userId: result.insertId,
      });
    });
  });
};

export const Login = (req, res) => {
  const { Email, password } = req.body;

  const sql = "SELECT * FROM user_check WHERE Email = ?";

  // Only Email should be passed here
  db.query(sql, [Email], async (error, data) => {
    if (error) {
      return res.status(500).json(error);
    }

    // If no user found
    if (data.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = data[0];

    if (!user.password)
      return res.status(500).json({ message: "User password not set in DB" });

    // Correct order: compare(plain, hashed)
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: user.id, email: user.Email }, process.env.JW_SECRET , {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .json({
        message: "Login success",
        token,
        user: { id: user.id, name: user.Name, email: user.Email },
      });
  });
};
