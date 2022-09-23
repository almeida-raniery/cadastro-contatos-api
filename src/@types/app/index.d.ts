import { IContactResponse } from "../../interfaces/contacts/contactResponse.interface";
import { IUserResponse } from "../../interfaces/users/userResponse.interface";

export type ContactResponse = Record<string, any> | IContactResponse
export type UserResponse    = Record<string, any> | IUserResponse