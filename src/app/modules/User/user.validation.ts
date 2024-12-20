import z from 'zod';

export const createUserNameValidationSchema = z.object({
  firstName: z.string().refine((value) => /^[A-Z]/.test(value), {
    message: 'First Name must start with a capital letter',
  }),
  middleName: z.string(),
  lastName: z.string(),
});

export const createUserValidationSchema = z.object({
  body: z.object({
    name: createUserNameValidationSchema,
    email: z.string().email(),
    password: z.string(),
    gender: z.enum(['user', 'admin']),
    isBlocked: z.boolean().optional(),
  }),
});

