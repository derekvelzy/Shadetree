import type { NextApiRequest, NextApiResponse } from 'next'
import model, { Combined } from '../../database/model/model';
import db from '../../database/connect/db';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getInitialPageLoad((err: Error | null, results?: Combined | null) => {
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