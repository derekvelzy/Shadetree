import { Request, Response } from 'express';
import model, { Item } from '../model/model';

export default {
  get: (req: Request, res: Response) => {
    model.getTopUsers((err: Error, results?: Item[] | null) => {
      if (err) {
        console.log('error in controller');
        throw err;
      } else {
        console.log(results)
        res.send(results);
      }
    })
  },
};
