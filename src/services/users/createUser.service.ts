import UserRepository from "../../repositories/user.repository";

async function createUserService(data:IUserRequestData): Promise<IUserResponse> {
    const userRepository  = new UserRepository();
    const {id, email, username, created_at} = await userRepository.register(data);

    const responseData:IUserResponse = {
        id,
        email,
        username,
        created_at
    }

    return responseData
}