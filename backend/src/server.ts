import  express from 'express';
import maintRoutes from './routes/index'

const  server = express();

const hostname: string = "127.0.0.1";
const port: number = 8081;

server.use(maintRoutes)

server.listen(port, function () {
    console.log(
      `App listening on port ${port} in link http://${hostname}:${port}`
    );
  });