import { Router } from "express";
import { createContact, deleteContact, listContacts, updadteContact } from "../../controllers/contacts/contact.controllers";

const contactRoute = Router();

contactRoute.post("/", createContact);
contactRoute.get("/", listContacts);
contactRoute.patch("/:id", updadteContact);
contactRoute.delete("/:id", deleteContact);

export default contactRoute;