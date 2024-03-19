import express from "express";
import { signup } from "../controllers/usersControllers.js";
import multer from "multer";

const upload = multer();

const router = express.Router();

router.post("/signup", upload.any(), signup);

export default router;
