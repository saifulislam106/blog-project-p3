import { TUser } from "./user.interface"
import { User } from "./user.model"


const createUserIntoDB = async(payload:TUser)=>{
    
    const result = await User.create(payload)
    // console.log(payload);
    return result
}

const getUserFromDB = async()=>{
    const result = await User.find()
    return result
}

export const UserServices = {
    createUserIntoDB,
    getUserFromDB
}