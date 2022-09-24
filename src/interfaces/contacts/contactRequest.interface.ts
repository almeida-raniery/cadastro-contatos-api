export interface IContactRequestData {
  nickname: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface IUserContactRequestData extends IContactRequestData {
    is_user: true
}
