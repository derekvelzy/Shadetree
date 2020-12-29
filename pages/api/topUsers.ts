import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import model, { Combined } from '../../database/model/model';
import db from '../../database/connect/db';
import { verify } from 'jsonwebtoken';
import token from '../../database/secret';

const authentication = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization, token, async (err, decoded) => {
    if (!err && decoded) {
      return await fn(req, res)
    }
    res.status(401).json({message: 'Failed Authentication'});
  })
}

export default authentication(async (req: NextApiRequest, res: NextApiResponse) => {
  model.getInitialPageLoad((err: Error | null, results?: Combined | null) => {
    if (err) {
      console.log('error in controller');
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