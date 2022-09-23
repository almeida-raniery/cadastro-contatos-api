import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";

function authUSer(req: Request, res: Response, next:NextFunction) {
    const token = req.headers.authorization?.split(" ")[1]

    jwt.verify(token!, process.env.SECRET_KEY!, (error: any, decoded: any)=>{
        if (error) {
            return res.status(401).json({
              message: "Invalid token",
            });
          }
        
        req.user = {
            id: decoded.id
        };

        next()
    })
}

export default authUSer