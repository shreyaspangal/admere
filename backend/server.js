const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./routes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/error.middleware");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

// Json body parser
app.use(express.json());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/api", routes);

// ------------ deployment ----------------- //
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    })
} else {
    app.get("/", (req, res) => {
        res.send("API is running...");
    })
}
// ------------ deployment ----------------- //

// Error handlers
app.use(notFound);
app.use(errorHandler);

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})