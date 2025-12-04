import express from "express";
import cors from "cors";
import AuthRoute from "./routes/Auth.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())


app.use("/Auth", AuthRoute);
app.use("/api", AuthRoute);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
