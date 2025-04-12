require("dotenv").config();
const express = require("express")
const cors = require("cors");
const path = require("path");

const app = express();

// MiddelWare to handle
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders: ["Content-Type" , "Authorization"]
    })
)