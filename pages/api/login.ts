import type { NextApiRequest, NextApiResponse } from 'next'
import model from '../../database/model/model';
import db from '../../database/connect/db';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.login(req.body.data, (err: Error | null, results?: string | null) => {
    if (err) {
      res.status(400);
      res.json({message: 'failed authorization'});
    } else {
      if (!results) {
        res.json({message: 'failed authorization'})
      } else {
        res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
          httpOnly: true,
          maxAge: 3600,
          path: '/'
        }))
        res.json({message: 'welcome'})
      }
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}