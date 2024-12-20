import { z } from "zod";

export const createUserValidationSchema = z.object({
  body: z.object({
    title:z.string(),
    content: z.string(),
    author: z.,
    ispublished: z.boolean().optional(),
  }),
});