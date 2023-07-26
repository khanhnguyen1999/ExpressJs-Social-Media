import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  console.log('request ', req.params)
  res.json({
    data: [
      {
        id: 1,
        email: req.body.email
      }
    ]
  })
}
