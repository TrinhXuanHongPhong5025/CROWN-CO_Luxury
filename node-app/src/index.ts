import express from "express";
import { initDb } from "./db.js";
import { corsMiddleware } from "./middleware/corsMiddleware.js";
import { errorHandler } from "./middleware/errorHandler.js";
import StudentRoutes from "./routes/StudentRoutes.js";
import { logger } from "./utils/logger.js";

const app = express();
const PORT = Number(process.env.PORT ?? 9000);
const NODE_ENV = process.env.NODE_ENV ?? "development";

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Server is running",
        timestamp: new Date().toISOString(),
        environment: NODE_ENV,
    });
});

app.use("/api/students", StudentRoutes);

app.use(errorHandler);

const startServer = async () => {
    try {
        await initDb();

        logger.info("Database initialized successfully");

        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (error) {
        logger.error("Failed to start server", error);
        process.exit(1);
    }
};

startServer();