/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from "../../config";
import { TUser } from "../User/user.interface";
import { User } from "../User/user.model";
import { TLoginUser, TRegisterUser,} from "./auth.interface";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
 
const registerUser = async (payload: TRegisterUser) => {
  
  const result = await User.create(payload)
  return result
}

const loginUser = async (payload: TLoginUser) => {
    // console.log(payload);
    
    const user = await User.findOne({email:payload?.email}).select('+password')
    if (!user) {
      throw new Error( 'User is not found');
    }
    // console.log(user);
    const isBlocked = user?.isBlocked;
  
    if (isBlocked) {
      throw new Error( 'User is blocked');
    }
  
  const isPasswordMatched = await bcrypt.compare(payload?.password ,user?.password)
   if(!isPasswordMatched){
    throw new Error("User do not matched")
   }
//    console.log(isPasswordMatched);
  
    const jwtPayload = {
      email: user.email,
      role: user.role,
    };
    const accessToken = jwt.sign(
      jwtPayload,
      config.jwt_access_token as string,
      { expiresIn: '10d' },
    );
    
    return {
      accessToken,
    };
  };


export const AuthServices ={
    registerUser,
    loginUser
}
  