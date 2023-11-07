import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  return res.json({ message: "Hello, What is it that you're looking for." });
}
