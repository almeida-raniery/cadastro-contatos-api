import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

function handleAppError (error: Error, req: Request, res:Response, _: NextFunction) {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            message: error.message
        })
    }

    return res.status(500).json({
        message: error.message
    })
}

export default handleAppError