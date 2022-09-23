import User from "../../entities/User.entity";
import { IUserRequestData } from "../../interfaces/users/userRequest.interface";
import { IUserResponse } from "../../interfaces/users/userResponse.interface";
import UserRepository from "../../repositories/user.repository";

async function updateUserService(userId:string, data:IUserRequestData): Promise<IUserResponse>{
    const userRepository = new UserRepository();

    await userRepository.update({id:userId}, data);

    const {id, username, email}  = await userRepository.findOne({id: userId}) as User

    const responseData: IUserResponse = {
        id,
        username,
        email
    }

    return responseData
}

export default updateUserService