import type { NextApiRequest, NextApiResponse } from 'next'
import model from '../../database/model/model';
import db from '../../database/connect/db';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.signup(req.body, (err: Error | null, results?: string | null) => {
    if (err) {
      console.log('error in controller');
      res.status(400);
      res.end()
    } else {
      res.end(JSON.stringify(results));
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}