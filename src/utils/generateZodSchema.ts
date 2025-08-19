// src/utils/generateZodSchema.ts
import { z, ZodTypeAny } from "zod";

interface FieldConfig {
  name: string;
  type: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  options?: string[];
}

export const generateZodSchema = (fields: FieldConfig[]) => {
  const shape: Record<string, ZodTypeAny> = {};

  fields.forEach((field) => {
    let validator: ZodTypeAny;

    switch (field.type) {
      case "email":
        validator = z.string().email("Invalid email");
        break;
      case "text":
      case "select":
        validator = z.string();
        break;
      case "number":
        validator = z.string().regex(/^\d+$/, "Only numbers allowed");
        break;
      default:
        validator = z.string();
    }

    if (field.required !== false) {
      if (validator instanceof z.ZodString) {
        validator = validator.min(1, `${field.name} is required`);
      }
    }

    if (field.minLength) {
      if (validator instanceof z.ZodString) {
        validator = validator.min(
          field.minLength,
          `${field.name} is too short`
        );
      }
    }

    if (field.maxLength) {
      if (validator instanceof z.ZodString) {
        validator = validator.max(field.maxLength, `${field.name} is too long`);
      }
    }

    shape[field.name] = validator;
  });

  return z.object(shape);
};
