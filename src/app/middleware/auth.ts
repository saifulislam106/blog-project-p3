import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import config from "../config";
import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { TUserRole } from "../modules/User/user.interface";

const auth = (...requiredRole :TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error( 'You are not authorized');
      }
      // invalid token
      jwt.verify(
        token,
        config.jwt_access_token as string,
        function (err, decoded) {
          if (err) {
            throw new Error( 'You are not authorized');
          }
  
          const role = (decoded as JwtPayload)?.role
          if(requiredRole && !requiredRole.includes(role)){
            throw new Error( 'You are not authorized')
          }
        //   console.log(decoded);
        req.user=decoded as JwtPayload
        // console.log(decoded);
        next()
        },
        
      ); 
    });
  };
  
  export default auth;