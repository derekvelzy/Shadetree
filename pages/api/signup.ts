import type { NextApiRequest, NextApiResponse } from 'next'
import model from '../../database/model/model';
import db from '../../database/connect/db';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.signup(req.body.data, (err: Error | null, results?: string | null) => {
    if (err) {
      console.log('error in controller');
      res.status(400);
      res.end()
    } else {
      res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
        httpOnly: true,
        maxAge: 3600,
        path: '/'
      }))
      res.json({message: 'approved'});
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}