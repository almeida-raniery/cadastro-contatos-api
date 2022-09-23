import { instanceToPlain } from "class-transformer";
import ContactRepository from "../../repositories/contacts.repository";
import { IContactRequestData } from "../../interfaces/contacts/contactRequest.interface";
import { ContactResponse } from "../../@types/app";

async function createContactService(data: IContactRequestData): Promise<ContactResponse> {
  const repository = new ContactRepository();
  const contact    = await repository.create(data);

  const responseData = instanceToPlain(contact);

  return responseData;
}

export default createContactService;
