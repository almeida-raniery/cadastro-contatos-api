import { Request, Response } from "express";

export async function createContact(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({message: "Contact created successfully"})
}

export async function listContacts(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({name: "Contract"})
}

export async function getContact(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({name: "Contract"})
}

export async function updadteContact(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({name: "Contact"})
}

export async function deleteContact(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({message: "Contact deleted successfully"})
}