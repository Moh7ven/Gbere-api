import express from "express";
import { signup, login } from "../controllers/usersControllers.js";
import multer from "multer";

const upload = multer();

const router = express.Router();

/**
 * @swagger
 * /signup:
 *  post:
 *    summary: Inscription
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: Inscription reussie
 *      400:
 *        description: Erreur
 *      500:
 *        description: Erreur server
 */
router.post("/signup", upload.any(), signup);

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Connexion
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: Connexion reussie
 *      400:
 *        description: Erreur
 *      500:
 *        description: Erreur server
 */
router.post("/login", upload.any(), login);

export default router;
