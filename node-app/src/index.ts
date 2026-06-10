import express from "express";
import type { RowDataPacket } from "mysql2";
import pool, { initDb } from "./db.js";
import { corsMiddleware } from "./middleware/corsMiddleware.js";
import { errorHandler } from "./middleware/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";
import { logger } from "./utils/logger.js";

const app = express();
const PORT = Number(process.env.PORT ?? 9000);
const NODE_ENV = process.env.NODE_ENV ?? "development";

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Server is running",
        timestamp: new Date().toISOString(),
        environment: NODE_ENV,
    });
});

// API Routes
app.use("/api/users", userRoutes);

// Legacy endpoints (keeping for backward compatibility)
app.get("/api/get", (req, res) => {
    res.status(200).json({
        message: "This is GET request!"
    });
});

app.post("/api/post", (req, res) => {
    res.status(201).json({
        message: "This is POST request!",
        data: req.body
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        status: false,
        code: "NOT_FOUND",
        message: `Route ${req.method} ${req.path} not found`
    });
});

// Global error handler
app.use(errorHandler);

// Start server
const startServer = async () => {
    try {
        await initDb();
        logger.info("Database initialized successfully");

        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
            logger.info(`Environment: ${NODE_ENV}`);
            logger.info("API Documentation: http://localhost:9000/health");
        });
    } catch (error) {
        logger.error("Failed to start server", error);
        process.exit(1);
    }
};

startServer();
