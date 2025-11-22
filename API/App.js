import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" Hello I am starting coding the  BackEnd of the Project ");
});

app.listen(PORT, () => {
  console.log("Server at running http://localhost:3000");
});
