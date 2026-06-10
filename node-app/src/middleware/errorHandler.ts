import type { Request, Response, NextFunction } from "express";

export interface ApiError extends Error {
    status?: number;
    code?: string;
}

export const errorHandler = (
    err: ApiError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    const code = err.code || "INTERNAL_ERROR";

    console.error(`[${new Date().toISOString()}] ${status} - ${message}`);

    res.status(status).json({
        status: false,
        code,
        message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
};

export class ValidationError extends Error {
    status = 400;
    code = "VALIDATION_ERROR";

    constructor(message: string) {
        super(message);
    }
}

export class NotFoundError extends Error {
    status = 404;
    code = "NOT_FOUND";

    constructor(message: string = "Resource not found") {
        super(message);
    }
}

export class UnauthorizedError extends Error {
    status = 401;
    code = "UNAUTHORIZED";

    constructor(message: string = "Unauthorized") {
        super(message);
    }
}
