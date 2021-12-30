import { Router, Response, Request } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ Status: "On" }));
  });
  
export default router;