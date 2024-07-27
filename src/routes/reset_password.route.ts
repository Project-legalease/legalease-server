import { Router } from "express";
import { login, validateUser } from "../middlewares/login.middleware";

const router = Router();


router.post("/auth/login", validateUser, login);

export default router;
