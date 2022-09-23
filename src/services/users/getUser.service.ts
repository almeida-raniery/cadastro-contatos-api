import { instanceToPlain } from "class-transformer";
import { UserResponse } from "../../@types/app";
import User from "../../entities/User.entity";
import UserRepository from "../../repositories/user.repository";

async function getUserService(userId: string): Promise<UserResponse> {
  const userRepository = new UserRepository();
  const user           = (await userRepository.findOne({ id: userId })) as User;

  const userData: UserResponse = instanceToPlain(user);

  return userData;
}

export default getUserService;
