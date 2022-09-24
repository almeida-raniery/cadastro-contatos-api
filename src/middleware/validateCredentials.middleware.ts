import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ICredentials } from "../interfaces/sessions/loginCredentials.interface";
import UserRepository from "../repositories/user.repository";

async function validateCredentials(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const repository = new UserRepository();
  const { username, email } = req.body;

  const credentials: ICredentials = {
    username,
    email,
  };

  const user = await repository.findByCredentials(credentials);

  if (!user) 
    throw new AppError("User not found", 404);

  req.user = {
    id: user.id,
    password: user.password,
  };

  next();
}

export default validateCredentials