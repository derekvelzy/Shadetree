import type { NextApiRequest, NextApiResponse } from 'next'
import model, { User } from '../../database/model/model';
import db from '../../database/connect/db';
import { authentication } from '../auth';

export default authentication( (req: NextApiRequest, res: NextApiResponse) => {
  model.getUserData((err: Error | null, results?: User | null) => {
    if (err) {
      res.status(400);
      res.end()
    } else {
      res.end(JSON.stringify(results));
    }
  })
})

export const config = {
  api: {
    externalResolver: true,
  },
}