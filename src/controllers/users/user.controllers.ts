import { Request, Response } from "express";

export async function createUser(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({message: "User created successfully"})
}

export async function getUser(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({name: "Iser"})
}

export async function updateUser(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({name: "User"})
}

export async function deleteUser(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({message: "User deleted successfully"})
}