import { Request, Response } from "express"
import * as jwt from ""


export const authMiddleware = (req: any, res: Response)=>{
    const {autorization} = req.headers

    if(!autorization) {
        throw console.log('nao encontrado')
    }

    const token = autorization.split(' ')[1]
    const {id} = jwt

}