import { instanceToPlain } from "class-transformer";
import { UserResponse } from "../../@types/app";
import { IUserRequestData } from "../../interfaces/users/userRequest.interface";
import User from "../../entities/User.entity";
import UserRepository from "../../repositories/user.repository";

async function updateUserService(userId:string, data:IUserRequestData): Promise<UserResponse>{
    const userRepository = new UserRepository();

    await userRepository.update({id:userId}, data);

    const user:     User         = await userRepository.findOne({id: userId}) as User
    const userData: UserResponse = instanceToPlain(user)

    return userData
}

export default updateUserService