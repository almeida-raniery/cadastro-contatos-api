import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContact,
  listContacts,
  updateContact,
} from "../../controllers/contacts/contact.controllers";
import authUSer from "../../middleware/authUser.middleware";
import contactOwnerPermission from "../../middleware/ownerPermission.middleware";

const contactRoute = Router();

contactRoute.post("/", authUSer, createContact);
contactRoute.get("/", authUSer, listContacts);
contactRoute.get("/:id", authUSer, contactOwnerPermission, getContact);
contactRoute.patch("/:id", authUSer, contactOwnerPermission, updateContact);
contactRoute.delete("/:id", authUSer, contactOwnerPermission, deleteContact);

export default contactRoute;
