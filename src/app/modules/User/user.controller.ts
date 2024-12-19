import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
    const result = await UserServices.createUserIntoDB(req.body);
    console.log(result);
    res.send({
        status:true,
        message:"User create successfully",
        data:result

    })
};

export const UserControllers ={
    createUser
}
