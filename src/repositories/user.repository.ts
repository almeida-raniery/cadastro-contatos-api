import { hash } from "bcrypt";
import User from "../entities/User.entity";
import BaseRepository from "./baseRepository";

class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }

  async findByCredentials(credentials:ICredentials):Promise<User | null> {
    const user = await this.findOne(credentials)

    return user
  }

  async register(data:INewUserData) {
    const {email, password, username} = data

    const passwordHash: string = await hash(password, 12)
    const newUserData: INewUserData = {
        email,
        password: passwordHash,
        username
    };

    return this.create(newUserData)
  }
}

export default UserRepository;