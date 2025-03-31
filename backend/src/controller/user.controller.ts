import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import APIError from "../utils/apiError";

const prisma = new PrismaClient();

const userLogin = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: "User creation failed" });
    throw new APIError("User creation failed", 400);
  }
};

export default userLogin;
