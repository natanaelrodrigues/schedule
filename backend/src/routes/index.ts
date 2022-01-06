import { Router, Response, Request } from 'express';

import * as homeController from '../controllers/homeController';
import * as apiController from '../controllers/apiController';
import * as userController from '../controllers/userController';

const router = Router();

router.get("/", homeController.home);
router.get("/ping", apiController.ping);
router.get("/random", apiController.random);

// USER
router.post("/users",userController.create);
  
export default router;