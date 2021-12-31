import  express, { Response, Request } from 'express';
import path from 'path';
import maintRoutes from './routes/index'

const  server = express();

const hostname: string = "127.0.0.1";
const port: number = 8081;

server.use(express.static(path.join(__dirname,'../public')));

server.use(maintRoutes)
//server.use('/admin',routes) Cria um subgrupo ou para mais grupos de rotas

server.use((req: Request, res: Response) => {
  res.status(404).send('<h1>Página não encontrada.</h1>')
})

server.listen(port, function () {
    console.log(
      `App listening on port ${port} in link http://${hostname}:${port}`
    );
  });