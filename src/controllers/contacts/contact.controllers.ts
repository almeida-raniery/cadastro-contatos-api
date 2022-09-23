import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";
import deleteContactService from "../../services/contacts/deleteContact.service";
import getContactService from "../../services/contacts/getContact.service";
import listContactsService from "../../services/contacts/listContacts.service";
import updateContactService from "../../services/contacts/updateContact.service";

export async function createContact(req:Request, res:Response):Promise<Response> {
    const responseData = await createContactService(req.body)

    return res.status(201).json(responseData)
}

export async function getContact(req:Request, res:Response):Promise<Response> {
    const responseData = await getContactService(req.params.id)

    return res.status(200).json(responseData)
}

export async function listContacts(req:Request, res:Response):Promise<Response> {
    const responseData = await listContactsService(req.params.id)

    return res.status(200).json(responseData)
}

export async function updateContact(req:Request, res:Response):Promise<Response> {
    const responseData = await updateContactService(req.params.id, req.body)

    return res.status(200).json(responseData)
}

export async function deleteContact(req:Request, res:Response):Promise<Response> {
    await deleteContactService(req.params.id)

    return res.status(204).send({})
}