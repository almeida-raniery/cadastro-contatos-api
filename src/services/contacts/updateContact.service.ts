import { instanceToPlain } from "class-transformer";
import { ContactResponse } from "../../@types/app";
import { IContactRequestData } from "../../interfaces/contacts/contactRequest.interface";
import Contact from "../../entities/Contact.entity";
import ContactRepository from "../../repositories/contacts.repository";

async function updateContactService(contactId:string, data:IContactRequestData): Promise<ContactResponse>{
    const repository = new ContactRepository();

    await repository.update({id:contactId}, data);

    const contact:      Contact         = await repository.findOne({id: contactId}) as Contact
    const responseData: ContactResponse = instanceToPlain(contact)

    return responseData
}

export default updateContactService