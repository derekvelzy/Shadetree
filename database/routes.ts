import { Router } from 'express';
import controller from './controller/controller';
const router = Router();

// routes
router.get('/api/highestRatedUsers', controller.get);


export default router;
