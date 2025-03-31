import { PrismaClient } from "@prisma/client";
import app from "./app";
import { config } from "dotenv";

const prisma = new PrismaClient();

// Load environment variables
config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("Connected to MongoDB via Prisma");
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
});

// Handle shutdown
process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  server.close(() => {
    console.log("Server terminated");
  });
});
