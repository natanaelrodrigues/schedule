import  express, { Response, Request } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mainRoutes from './routes/index'

dotenv.config();

const  server = express();

const hostname: string = "127.0.0.1";

server.use(express.static(path.join(__dirname,'../public')));

server.use(mainRoutes)
//server.use('/admin',routes) Cria um subgrupo ou para mais grupos de rotas

server.use((req: Request, res: Response) => {
  res.status(404).json({error: 'Endpoint não encontrado.'});
})

server.listen(process.env.PORT, function () {
    console.log(
      `App listening on port ${process.env.PORT} in link http://${hostname}:${process.env.PORT}`
    );
  });