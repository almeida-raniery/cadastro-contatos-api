import UserRepository from "../../repositories/user.repository";

async function updateUserService(userId:string, data:IUserRequestData){
    const userRepository  = new UserRepository();
    await userRepository.update({id:userId}, data);
}