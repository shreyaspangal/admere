const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./routes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/error.middleware");

const app = express();
dotenv.config();
connectDB();

// Json body parser
app.use(express.json());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/api", routes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started listening in port ${PORT}`));