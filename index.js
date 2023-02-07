import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { validationResult } from "express-validator";

import { registerValidation } from "./validations/auth.js";

import UserModel from "./models/User.js"

mongoose
  .connect(
    "mongodb+srv://admin:228322@cluster0.l5ihmlm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));
const app = express();

app.use(express.json());

// Проверяем есть ли в auth register то что нужно и только после этого идем дальше
app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const doc = new UserModel({
    email: req.body.email,
    fullname: req.body.fullname,
    avatarUrl: req.body.avatarUrl,
    passwordHash: req.body.avatarUrl,
  });

  res.json({
    success: true,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
