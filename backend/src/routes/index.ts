import { Router, Response, Request } from 'express';

import * as homeController from '../controllers/homeController';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get("/", homeController.home);
router.get("/ping", apiController.ping);
router.get("/random", apiController.random);
  
export default router;