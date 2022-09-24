import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import Contact from "../entities/Contact.entity";
import ContactRepository from "../repositories/contacts.repository";

async function contactOwnerPermission(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository = new ContactRepository();
  const ownerId           = await contactRepository.getOwnerId(req.params.id)

  console.log(ownerId, req.user.id)

  if (ownerId !== req.user.id)
    throw new AppError("Unauthorized User", 401)

  next();
}

export default contactOwnerPermission
