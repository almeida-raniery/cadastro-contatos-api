import { instanceToPlain } from "class-transformer";
import { UserResponse } from "../../@types/app";
import { IContactRequestData, IUserContactRequestData } from "../../interfaces/contacts/contactRequest.interface";
import { IUserRequestData } from "../../interfaces/users/userRequest.interface";
import UserRepository from "../../repositories/user.repository";
import createContactService from "../contacts/createContact.service";

async function createUserService(data:IUserRequestData): Promise<UserResponse> {
    const userRepository  = new UserRepository();
    const user            = await userRepository.register(data);

    if (data.contactInfo) {
        const contactData: IUserContactRequestData = {
            email: data.email,
            nickname: data.username,
            firstName: data.contactInfo.firstName,
            lastName: data.contactInfo.lastName,
            phoneNumber: data.contactInfo.phoneNumber,
            is_user: true
        }
        
        await createContactService(contactData, user.id)
    } 

    const userData: UserResponse = instanceToPlain(user)

    return userData
}

export default createUserService