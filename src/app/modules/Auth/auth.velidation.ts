import { z } from 'zod';

export const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const registerValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    email: z.string({ required_error: 'email is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

// export const changePasswordValidationSchema = z.object({
//     body:z.object({
//         oldPassword:z.string({required_error: 'Old password is required'}),
//         newPassword:z.string({required_error: 'Password is required'}),
//     })
// })

export const AuthValidation = {
  loginValidationSchema,
  registerValidationSchema,
};
