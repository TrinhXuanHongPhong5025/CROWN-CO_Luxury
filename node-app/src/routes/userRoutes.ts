import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validate } from "../middleware/validationMiddleware.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createUserSchema, updateUserSchema } from "../utils/validators.js";

const router = Router();

// GET /api/users - Get all users (with pagination)
router.get("/", asyncHandler(userController.getAllUsers));

// GET /api/users/:id - Get user by id
router.get("/:id", asyncHandler(userController.getUserById));

// POST /api/users - Create new user
router.post("/", validate(createUserSchema), asyncHandler(userController.createUser));

// PUT /api/users/:id - Update user
router.put("/:id", validate(updateUserSchema), asyncHandler(userController.updateUser));

// DELETE /api/users/:id - Delete user
router.delete("/:id", asyncHandler(userController.deleteUser));

export default router;
