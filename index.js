import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRoutes from "./routes/authRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/notices", noticeRoutes);

const PORT = process.env.PORT || 3001;

const mongoConnect = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  mongoConnect();
});
