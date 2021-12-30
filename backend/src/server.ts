import  express, { Response, Request } from 'express';
const  server = express();

const hostname: string = "127.0.0.1";
const port: number = 8081;

server.get("/", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ Status: "On" }));
  });

server.listen(port, function () {
    console.log(
      `App listening on port ${port} in link http://${hostname}:${port}`
    );
  });