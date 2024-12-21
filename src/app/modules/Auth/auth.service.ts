import config from "../../config";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const loginUser = async (payload: TLoginUser) => {
    // console.log(payload);
    
    const isUserExists = await User.findOne({email:payload?.email})
    if (!isUserExists) {
      throw new Error( 'User is not found');
    }
    // console.log(isUserExists);
    const isBlocked = isUserExists?.isBlocked;
  
    if (isBlocked) {
      throw new Error( 'User is blocked');
    }
  
  const isPasswordMatched = await bcrypt.compare(payload?.password ,isUserExists?.password)
   if(!isPasswordMatched){
    throw new Error("User do not matched")
   }
//    console.log(isPasswordMatched);
  
    const jwtPayload = {
      email: isUserExists.email,
      role: isUserExists.role,
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
    loginUser
}
  