import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.velidation";
import { AuthControllers } from "./auth.controller";

const router = Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);

// router.post(
//   '/change-password',
//   auth(user_role.admin ,user_role.faculty,user_role.student),
//   validateRequest(AuthValidation.changePasswordValidationSchema),
//   AuthController.changePassword,
// );

export const AuthRouter = router