import type { NextApiRequest, NextApiResponse } from 'next'
import model, { TopTotal } from '../../database/model/model';
import db from '../../database/connect/db';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getResults(req.query, (err: Error | null, results?: TopTotal[] | null) => {
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