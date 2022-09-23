import { instanceToPlain } from "class-transformer";
import { ContactResponse } from "../../@types/app";
import Contact from "../../entities/Contact.entity";
import ContactRepository from "../../repositories/contacts.repository";

async function listContactsService(userId:string): Promise<ContactResponse> {
  const repository = new ContactRepository();
  const contact    = await repository.listByUserId(userId) as Contact[];

  const contactData: ContactResponse = instanceToPlain(contact)

  return contactData;
}

export default listContactsService;