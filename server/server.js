import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/database.js";
import router from "./routes/user.js";

const app = express();
dotenv.config();

app.use(express.json());  // must add to parse json data.
app.use(cors());  // must add 

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