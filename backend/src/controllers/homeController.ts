import  { Response, Request } from 'express';

export const home = (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ Status: "On" }));
};