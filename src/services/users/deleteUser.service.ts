import User from "../../entities/User.entity"
import UserRepository from "../../repositories/user.repository"

async function deleteUserService(userId:string){
    const userRepository = new UserRepository()
    await userRepository.delete({id: userId})
}

export default deleteUserService