import express from "express";
import cors from "cors";
import AuthRoute from "./routes/Auth.js";
import Task_OP from './routes/Operation.js'
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())


app.use("/Auth", AuthRoute);
// app.use("/api", AuthRoute);
app.use("/Post", Task_OP);
app.use("/Select_Task", Task_OP);
app.use("/Update", Task_OP);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
