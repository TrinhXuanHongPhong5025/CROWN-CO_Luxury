import Joi from "joi";

export const createUserSchema = Joi.object({
    name: Joi.string().required().min(2).max(100).messages({
        "string.empty": "Name is required",
        "string.min": "Name must be at least 2 characters",
        "string.max": "Name must not exceed 100 characters",
    }),
    email: Joi.string().email().required().messages({
        "string.email": "Invalid email format",
        "string.empty": "Email is required",
    }),
});

export const updateUserSchema = Joi.object({
    name: Joi.string().min(2).max(100),
    email: Joi.string().email(),
}).min(1);
