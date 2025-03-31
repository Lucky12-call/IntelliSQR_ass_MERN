import userLogin from "../controller/user.controller";
import { Router } from "express";

const router = Router();

router.post("/login", userLogin);

export default router;
