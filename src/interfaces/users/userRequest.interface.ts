import { IRequestData } from "../baseInterfaces/requestData.interface";

export interface INewUserData extends IRequestData {
  username: string;
  password: string;
  email: string;
}

export interface IUserRequestData extends IRequestData {
  username: string;
  password: string;
  email: string;
  contactInfo?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}
