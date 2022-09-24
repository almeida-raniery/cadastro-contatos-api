import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

function authUSer(req: Request, res: Response, next:NextFunction) {
  if(!req.headers.authorization){
    throw new AppError("Missing authentication token", 403)
  }
  
  const token = req.headers.authorization?.split(" ")[1]

  jwt.verify(token!, process.env.SECRET_KEY!, (error: any, decoded: any)=>{
      if (error) {
          throw new AppError("Invalid token", 403)
        }
      
      req.user = {
          id: decoded.sub
      };

      next()
  })
}

export default authUSer