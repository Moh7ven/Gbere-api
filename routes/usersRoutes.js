import express from "express";
import { signup, login } from "../controllers/usersControllers.js";
import multer from "multer";

const upload = multer();

const router = express.Router();

/**
 * 
 */
router.post("/signup", upload.any(), signup);

router.post("/login", upload.any(), login);

export default router;
