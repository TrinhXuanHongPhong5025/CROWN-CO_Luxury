import type { Request, Response } from "express";
import type { RowDataPacket } from "mysql2";
import pool from "../db.js";
import { sendSuccess, sendError } from "../utils/responseHandler.js";
import { NotFoundError, ValidationError } from "../middleware/errorHandler.js";
import type { Student, CreateStudentInput } from "../models/Student.js";
import { logger } from "../utils/logger.js";

// GET ALL STUDENTS
export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM STUDENT ORDER BY SID"
        );

        sendSuccess(
            res,
            rows as Student[],
            "Students retrieved successfully"
        );
    } catch (error) {
        logger.error("Error fetching students", error);

        sendError(
            res,
            "Unable to fetch students",
            "FETCH_ERROR",
            500
        );
    }
};

// GET STUDENT BY ID
export const getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM STUDENT WHERE SID = ?",
            [id]
        );

        if (!rows.length) {
            throw new NotFoundError(
                `Student with SID ${id} not found`
            );
        }

        sendSuccess(
            res,
            rows[0] as Student,
            "Student retrieved successfully"
        );
    } catch (error) {
        if (error instanceof NotFoundError) {
            sendError(
                res,
                error.message,
                error.code,
                error.status
            );
        } else {
            logger.error("Error fetching student", error);

            sendError(
                res,
                "Unable to fetch student",
                "FETCH_ERROR",
                500
            );
        }
    }
};

// CREATE STUDENT
export const createStudent = async (
    req: Request,
    res: Response
) => {
    const {
        SID,
        SNAME,
        EMAIL,
        Tutor_Id
    } = req.body as CreateStudentInput;

    try {
        // Kiểm tra SID đã tồn tại chưa
        const [existingStudent] = await pool.query<RowDataPacket[]>(
            "SELECT SID FROM STUDENT WHERE SID = ?",
            [SID]
        );

        if (existingStudent.length > 0) {
            throw new ValidationError(
                "Student SID already exists"
            );
        }

        await pool.query(
            `
            INSERT INTO STUDENT
            (SID, SNAME, EMAIL, Tutor_Id)
            VALUES (?, ?, ?, ?)
            `,
            [
                SID,
                SNAME,
                EMAIL,
                Tutor_Id || null
            ]
        );

        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM STUDENT WHERE SID = ?",
            [SID]
        );

        logger.info(`Student created: ${SID}`);

        sendSuccess(
            res,
            rows[0] as Student,
            "Student created successfully",
            201
        );
    } catch (error) {
        if (error instanceof ValidationError) {
            sendError(
                res,
                error.message,
                error.code,
                error.status
            );
        } else {
            logger.error("Error creating student", error);

            sendError(
                res,
                "Unable to create student",
                "CREATE_ERROR",
                500
            );
        }
    }
};

// UPDATE STUDENT
export const updateStudent = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;

    const {
        SNAME,
        EMAIL,
        Tutor_Id
    } = req.body;

    try {
        const [studentExists] = await pool.query<RowDataPacket[]>(
            "SELECT SID FROM STUDENT WHERE SID = ?",
            [id]
        );

        if (!studentExists.length) {
            throw new NotFoundError(
                `Student with SID ${id} not found`
            );
        }

        await pool.query(
            `
            UPDATE STUDENT
            SET
                SNAME = ?,
                EMAIL = ?,
                Tutor_Id = ?
            WHERE SID = ?
            `,
            [
                SNAME,
                EMAIL,
                Tutor_Id || null,
                id
            ]
        );

        const [rows] = await pool.query<RowDataPacket[]>(
            "SELECT * FROM STUDENT WHERE SID = ?",
            [id]
        );

        logger.info(`Student updated: ${id}`);

        sendSuccess(
            res,
            rows[0] as Student,
            "Student updated successfully"
        );
    } catch (error) {
        if (error instanceof NotFoundError) {
            sendError(
                res,
                error.message,
                error.code,
                error.status
            );
        } else {
            logger.error("Error updating student", error);

            sendError(
                res,
                "Unable to update student",
                "UPDATE_ERROR",
                500
            );
        }
    }
};

// DELETE STUDENT
export const deleteStudent = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;

    try {
        const [studentExists] = await pool.query<RowDataPacket[]>(
            "SELECT SID FROM STUDENT WHERE SID = ?",
            [id]
        );

        if (!studentExists.length) {
            throw new NotFoundError(
                `Student with SID ${id} not found`
            );
        }

        await pool.query(
            "DELETE FROM STUDENT WHERE SID = ?",
            [id]
        );

        logger.info(`Student deleted: ${id}`);

        sendSuccess(
            res,
            { SID: id },
            "Student deleted successfully"
        );
    } catch (error) {
        if (error instanceof NotFoundError) {
            sendError(
                res,
                error.message,
                error.code,
                error.status
            );
        } else {
            logger.error("Error deleting student", error);

            sendError(
                res,
                "Unable to delete student",
                "DELETE_ERROR",
                500
            );
        }
    }
};