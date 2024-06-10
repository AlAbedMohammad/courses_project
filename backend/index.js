const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const userRouter=require("./routes/userAPI")
const courseRoutes=require("./routes/CourseAPI.js")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', userRouter);
app.use('/api/courses', courseRoutes);

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
