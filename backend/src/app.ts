import express, { Application } from "express";
import apiRouter from "./routes/user.route";
import cors from "cors";

const app: Application = express();

app.use(cors({ origin: "http://localhost:5173" })); // Allow CORS for frontend

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", apiRouter);

export default app;
