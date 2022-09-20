import { Request, Response } from "express";

export async function login(req:Request, res:Response):Promise<Response> {
    return res.status(200).json({message: "loggin successful"})
}