import { Request, Response } from "express";

export async function notFound(req: Request, res: Response) {
  res.status(404).json({ msg: "Route does not exist" });
}