import type { Request, Response } from "express";
import type { RowDataPacket } from "mysql2";
import pool from "../db.js";
import { sendSuccess, sendError } from "../utils/responseHandler.js";
import { NotFoundError, ValidationError } from "../middleware/errorHandler.js";
import type { User, CreateUserInput } from "../models/User.js";
import { logger } from "../utils/logger.js";

export const getAllUsers = async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
        const [countResult] = await pool.query<RowDataPacket[]>(
            "SELECT COUNT(*) as total FROM users"
        );
        const total = (countResult?.[0]?.total as number) || 0;

        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM users ORDER BY id DESC LIMIT ? OFFSET ?",
            [limit, offset]
        );

        sendSuccess(res, rows as User[], "Users retrieved successfully", 200, {
            total,
            page,
            limit,
        });
    } catch (error) {
        logger.error("Error fetching users", error);
        sendError(res, "Unable to fetch users", "FETCH_ERROR", 500);
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );

        if (!rows.length) {
            throw new NotFoundError(`User with id ${id} not found`);
        }

        sendSuccess(res, rows[0] as User, "User retrieved successfully");
    } catch (error) {
        if (error instanceof NotFoundError) {
            sendError(res, error.message, error.code, error.status);
        } else {
            logger.error("Error fetching user", error);
            sendError(res, "Unable to fetch user", "FETCH_ERROR", 500);
        }
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body as CreateUserInput;

    try {
        // Check if email already exists
        const [existingUser] = await pool.query<RowDataPacket[]>(
            "SELECT id FROM users WHERE email = ?",
            [email]
        );

        if (existingUser.length > 0) {
            throw new ValidationError("Email already exists");
        }

        const [result] = await pool.query(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email]
        );

        const insertId = (result as { insertId?: number }).insertId;
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM users WHERE id = ?",
            [insertId]
        );

        logger.info(`User created with id: ${insertId}`);
        sendSuccess(res, rows[0] as User, "User created successfully", 201);
    } catch (error) {
        if (error instanceof ValidationError) {
            sendError(res, error.message, error.code, error.status);
        } else {
            logger.error("Error creating user", error);
            sendError(res, "Unable to create user", "CREATE_ERROR", 500);
        }
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        // Check if user exists
        const [userExists] = await pool.query<RowDataPacket[]>(
            "SELECT id FROM users WHERE id = ?",
            [id]
        );

        if (!userExists.length) {
            throw new NotFoundError(`User with id ${id} not found`);
        }

        // Check if new email already exists
        if (email) {
            const [existingUser] = await pool.query<RowDataPacket[]>(
                "SELECT id FROM users WHERE email = ? AND id != ?",
                [email, id]
            );

            if (existingUser.length > 0) {
                throw new ValidationError("Email already exists");
            }
        }

        const updates: string[] = [];
        const values: any[] = [];

        if (name) {
            updates.push("name = ?");
            values.push(name);
        }
        if (email) {
            updates.push("email = ?");
            values.push(email);
        }

        if (updates.length === 0) {
            throw new ValidationError("No fields to update");
        }

        values.push(id);
        await pool.query(`UPDATE users SET ${updates.join(", ")} WHERE id = ?`, values);

        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );

        logger.info(`User ${id} updated`);
        sendSuccess(res, rows[0] as User, "User updated successfully");
    } catch (error) {
        if (error instanceof NotFoundError || error instanceof ValidationError) {
            sendError(res, error.message, error.code, error.status);
        } else {
            logger.error("Error updating user", error);
            sendError(res, "Unable to update user", "UPDATE_ERROR", 500);
        }
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Check if user exists
        const [userExists] = await pool.query<RowDataPacket[]>(
            "SELECT id FROM users WHERE id = ?",
            [id]
        );

        if (!userExists.length) {
            throw new NotFoundError(`User with id ${id} not found`);
        }

        await pool.query("DELETE FROM users WHERE id = ?", [id]);

        logger.info(`User ${id} deleted`);
        sendSuccess(res, { id }, "User deleted successfully");
    } catch (error) {
        if (error instanceof NotFoundError) {
            sendError(res, error.message, error.code, error.status);
        } else {
            logger.error("Error deleting user", error);
            sendError(res, "Unable to delete user", "DELETE_ERROR", 500);
        }
    }
};
