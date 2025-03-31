import { userLogin } from "../controller/user.controller";
import { Router, Request, Response, NextFunction } from "express";

const router = Router();

const asyncHandler =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

router.post("/login", asyncHandler(userLogin));

export default router;
