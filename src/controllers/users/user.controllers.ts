import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import deleteUserService from "../../services/users/deleteUser.service";
import getUserService from "../../services/users/getUser.service";
import updateUserService from "../../services/users/updateUser.service";

export async function createUser(req:Request, res:Response):Promise<Response> {
    const responseData = await createUserService(req.body)

    return res.status(201).json(responseData)
}

export async function getUser(req:Request, res:Response):Promise<Response> {
    const responseData = await getUserService(req.params.id)

    return res.status(200).json(responseData)
}

export async function updateUser(req:Request, res:Response):Promise<Response> {
    const responseData = await updateUserService(req.params.id, req.body)

    return res.status(200).json(responseData)
}

export async function deleteUser(req:Request, res:Response):Promise<Response> {
    await deleteUserService(req.params.id)

    return res.status(204).send({})
}