export interface ICredentials {
    username?: string
    email?:string
}

export interface ILoginRequest extends ICredentials {
    password: string
}

export interface IUserCredentials extends ILoginRequest{
    id: string
}