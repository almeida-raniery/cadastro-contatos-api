import ContactRepository from "../../repositories/contacts.repository"


async function deleteContactService(userId:string){
    const repository = new ContactRepository()
    await repository.delete({id: userId})
}

export default deleteContactService