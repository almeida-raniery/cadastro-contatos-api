import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContact,
  listContacts,
  updadteContact,
} from "../../controllers/contacts/contact.controllers";

const contactRoute = Router();

contactRoute.post("/", createContact);
contactRoute.get("/", listContacts);
contactRoute.get("/:id", getContact);
contactRoute.patch("/:id", updadteContact);
contactRoute.delete("/:id", deleteContact);

export default contactRoute;
