import { instanceToPlain } from "class-transformer";
import ContactRepository from "../../repositories/contacts.repository";
import { IContactRequestData } from "../../interfaces/contacts/contactRequest.interface";
import { ContactResponse } from "../../@types/app";

async function createContactService(data: IContactRequestData, ownerId: string): Promise<ContactResponse> {
  const repository = new ContactRepository();
  const contact    = await repository.createAndAssign(data, ownerId);

  const responseData = instanceToPlain(contact);

  return responseData;
}

export default createContactService;
