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
router.get("/users",userController.list);
router.get("/user/random",userController.userRandom);
router.get("/user/:id",userController.get);
router.put("/user/:id",userController.update);
router.delete("/user/:id",userController.deleteItem);

  
export default router;