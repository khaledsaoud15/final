const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth.route");

app.use(express.json());
app.use(cors());
dotenv.config();

connectDB();

const port = process.env.PORT || 3000;
app.use("/api/auth/", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
