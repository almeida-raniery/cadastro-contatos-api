import { instanceToPlain } from "class-transformer";
import { ContactResponse } from "../../@types/app";
import Contact from "../../entities/Contact.entity";
import ContactRepository from "../../repositories/contacts.repository";

async function getContactService(contactId: string): Promise<ContactResponse> {
  const repository = new ContactRepository();
  const contact    = await repository.findOne({ id: contactId }) as Contact;

  const contactData: ContactResponse = instanceToPlain(contact)

  return contactData;
}

export default getContactService;
