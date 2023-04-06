const express = require("express");

const app = express();
const  dotenv = require("dotenv");

const mongoose = require("mongoose");
const cors = require("cors");
const leaveRoute=require("./routes/leaveRoute")


dotenv.config();

//connect to db
const connectDB = require('./config/empDB')

const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)


app.use(express.json());
app.use(cors())

app.use("/api/leave",leaveRoute)

app.listen(4800, ()=> console.log("server running on port 4800!"));
