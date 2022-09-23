import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  ILoginRequest,
  IUserCredentials,
} from "../../interfaces/sessions/loginCredentials.interface";
import { ILoginResponse } from "../../interfaces/sessions/loginResponse.interface";

async function loginService(userData: IUserCredentials, credentials: ILoginRequest): Promise<ILoginResponse> {
  const passwordMatch = bcrypt.compareSync(
    credentials.password,
    userData.password
  );

  if (!passwordMatch) throw new Error("Wrong password");

  const token = jwt.sign(
    {
      sub: userData.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
    }
  );

  return {userId: userData.id, token}
}

export default loginService