import express from "express";
import auth from "./routes/auth";
import config from "./config";

const { PORT } = config;

const app = express();
app.use("/auth", auth);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
