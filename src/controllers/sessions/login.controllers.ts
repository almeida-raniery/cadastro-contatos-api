import { Request, Response } from "express";
import { IUserCredentials } from "../../interfaces/sessions/loginCredentials.interface";
import loginService from "../../services/sessions/login.service";

export async function login(req: Request, res: Response): Promise<Response> {
  const userCredentials: IUserCredentials = {
    password: req.user.password!,
    id: req.user.id,
  };

  const responseData = await loginService(userCredentials, req.body);

  return res.status(200).json(responseData);
}