import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import router from "./routes/user.js";

const app = express();
dotenv.config();

// port
const PORT = process.env.PORT || 3000;

// db connection
dbConnect();

// map route
app.use("/api", router)

// server listen
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});