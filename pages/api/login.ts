import type { NextApiRequest, NextApiResponse } from 'next'
import model from '../../database/model/model';
import db from '../../database/connect/db';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  //req.body.data
  model.login(req.body.data, (err: Error | null, results?: string | null) => {
    if (err) {
      console.log('error in controller', err);
      res.status(400);
      res.end();
    } else {
      console.log(results);
      res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
        httpOnly: true,
        maxAge: 20,
        path: '/'
      }))
      res.json({message: 'welcome'})
      // res.json(results);
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}