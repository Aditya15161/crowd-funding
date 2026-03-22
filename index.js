require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

connectDB();

const port = process.env.PORT;

app.use(express.json())

app.use("/api/project", projectRoutes);

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
