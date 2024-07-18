import express from "express";
import { resgisterUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(resgisterUser);

export default router;

