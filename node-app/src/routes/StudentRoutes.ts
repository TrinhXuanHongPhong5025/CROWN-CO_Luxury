import { Router } from "express";
import * as studentController from "../controllers/StudentController.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = Router();

// GET /api/students
router.get(
    "/",
    asyncHandler(studentController.getAllStudents)
);

// GET /api/students/:id
router.get(
    "/:id",
    asyncHandler(studentController.getStudentById)
);

// POST /api/students
router.post(
    "/",
    asyncHandler(studentController.createStudent)
);

// PUT /api/students/:id
router.put(
    "/:id",
    asyncHandler(studentController.updateStudent)
);

// DELETE /api/students/:id
router.delete(
    "/:id",
    asyncHandler(studentController.deleteStudent)
);

export default router;