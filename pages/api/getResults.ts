import type { NextApiRequest, NextApiResponse } from 'next'
import model, { User } from '../../database/model/model';
import db from '../../database/connect/db';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getResults((err: Error | null, results?: User | null) => {
    if (err) {
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