import { Request, Response } from "express";

export async function asyncWrapper(cb: Function) {
    return async function (req: Request, res: Response, next: Function) {
        try {
            await cb(req, res, next);
        }
        catch (error: any) {
            next(error);
        }
    };
}