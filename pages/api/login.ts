import type { NextApiRequest, NextApiResponse } from 'next'
import model from '../../database/model/model';
import db from '../../database/connect/db';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.login(req.body.data, (err: Error | null, results?: string | null) => {
    if (err) {
      console.log('error in controller');
      res.status(400);
      res.end()
    } else {
      res.json(results);
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}