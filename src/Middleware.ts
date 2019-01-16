import {Request, Response, NextFunction, RequestHandler} from 'express'

// tslint:disable-next-line no-any
export type PromiseMiddleware = (req: Request, res: Response) => Promise<any>

export const promise = (middleware: PromiseMiddleware) => (
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await middleware(req, res)

      if (!result) next()
    } catch (err) {
      next(err)
    }
  }
)

export default {promise}
