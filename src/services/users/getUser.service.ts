import User from "../../entities/User.entity";
import { IUserResponse } from "../../interfaces/users/userResponse.interface";
import UserRepository from "../../repositories/user.repository";

async function getUserService(userId: string): Promise<IUserResponse> {
  const userRepository = new UserRepository();
  const { id, username, email, created_at, updated_at } =
    (await userRepository.findOne({ id: userId })) as User;

  const userResponse: IUserResponse = {
    id,
    username,
    email,
    created_at,
    updated_at,
  };

  return userResponse;
}

export default getUserService;
