import type { Response } from "express";

export interface ApiResponse<T = any> {
    status: boolean;
    code: string;
    message: string;
    data?: T;
    pagination?: {
        total: number;
        page: number;
        limit: number;
    };
}

export const sendSuccess = <T = any>(
    res: Response,
    data: T,
    message: string = "Success",
    statusCode: number = 200,
    pagination?: { total: number; page: number; limit: number }
) => {
    const response: ApiResponse<T> = {
        status: true,
        code: "SUCCESS",
        message,
        data,
    };

    if (pagination) {
        response.pagination = pagination;
    }

    res.status(statusCode).json(response);
};

export const sendError = (
    res: Response,
    message: string,
    code: string = "ERROR",
    statusCode: number = 400,
    errors?: any
) => {
    res.status(statusCode).json({
        status: false,
        code,
        message,
        ...(errors && { errors }),
    });
};
