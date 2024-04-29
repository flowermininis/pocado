const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use("/api/listings", require("./routes/pocadoRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));
app.use("/api/search", require("./routes/searchRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
