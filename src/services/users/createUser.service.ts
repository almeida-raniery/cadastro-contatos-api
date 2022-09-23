import { instanceToPlain } from "class-transformer";
import { UserResponse } from "../../@types/app";
import { IUserRequestData } from "../../interfaces/users/userRequest.interface";
import UserRepository from "../../repositories/user.repository";

async function createUserService(data:IUserRequestData): Promise<UserResponse> {
    const userRepository  = new UserRepository();
    const user            = await userRepository.register(data);

    const userData: UserResponse = instanceToPlain(user)

    return userData
}

export default createUserService