import { NextFunction, Request, Response } from 'express'

const API_SECRET_TOKEN = process.env.API_SECRET_TOKEN

export const verificarTokenSimple = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  if (token === undefined || token !== `Bearer ${API_SECRET_TOKEN}`) {
    res.status(401).json({ mensaje: 'No autorizado' })
  }

  next()
}
