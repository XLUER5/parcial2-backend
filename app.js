import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("DATABASE ACTIVE");
} catch (error) {
  console.log("DATABASE ERROR:" + error);
}

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(8000, () => {
  console.log("Server Running on port 8000");
});
