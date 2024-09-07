import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({
  path: './.env'
})

mongoose
.connect(
  process.env.MONGODB_URI
)
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error))

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));