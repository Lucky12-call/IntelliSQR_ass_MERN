import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 character" });
    }

    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    return res.status(400).json({ error: "User creation failed" });
  }
};

export { userLogin };
