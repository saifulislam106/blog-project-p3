import { z } from "zod";

export const createUserValidationSchema = z.object({
  body: z.object({
    title:z.string(),
    content: z.string(),
    ispublished: z.boolean().optional(),
  }),
});