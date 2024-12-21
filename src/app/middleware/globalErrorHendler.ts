// /* eslint-disable @typescript-eslint/no-unused-expressions */
// /* eslint-disable no-unused-expressions */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { ErrorRequestHandler } from "express";
// import { TErrorSource } from "../error/error.interface";
// import { ZodError } from "zod";
// import zodError from "../error/zodError";
// import AppError from "../error/AppError";
// import config from "../config";

// const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//     let statusCode = err.statusCode || 500;
//     let message = err.message || 'Something went wrong';
  
//     let errorSources: TErrorSource = [
//       {
//         path: '',
//         message: 'Something went wrong',
//       },
//     ];
  
//     if (err instanceof ZodError) {
//       const simplifiedZodError = zodError(err);
//       (message = simplifiedZodError.message),
//         (statusCode = simplifiedZodError.statusCode),
//         (errorSources = simplifiedZodError.errorSources);
//     } 
//      else if (err instanceof AppError) {
//       statusCode = err.statusCode;
//       message = err.message;
//       errorSources = [
//         {
//           path: '',
//           message: err.message,
//         },
//       ];
//     }
//      else if (err instanceof Error) {
//       message = err.message;
//       errorSources = [
//         {
//           path: '',
//           message: err.message,
//         },
//       ];
//     }
//     return res.status(statusCode).json({
//       success: false,
//       message,
//       errorSources,
//       stack: config.node_env === 'development' ? err?.stack : null,
//       err,
//     });
//   };
  
//   export default globalErrorHandler;