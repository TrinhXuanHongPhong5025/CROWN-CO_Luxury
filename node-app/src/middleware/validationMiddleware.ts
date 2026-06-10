import type { Request, Response, NextFunction } from "express";
import type { Schema } from "joi";
import Joi from "joi";
import { ValidationError } from "./errorHandler.js";

export const validate = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });

        if (error) {
            const messages = error.details.map((detail) => detail.message);
            throw new ValidationError(messages.join(", "));
        }

        req.body = value;
        next();
    };
};
