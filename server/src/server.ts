import http from 'http';
import express, { Request, Response, Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import userController from './controller/userEnv.controller';
import Env, { connectToDB } from '../config';

const { NODE_PORT } = Env;

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, Please try again after 15 minute',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToDB();

app.get('/', userController.saveUserEnv, (req, res) => res.send('<h1>Success</h1>'));
app.get('/user/env', userController.getUserEnvByIP);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  res.status(404).send({
    error: 'page not found',
  });
});

const httpServer = http.createServer(app);
httpServer.listen(NODE_PORT, () => {
  console.log(`Server is starting at port:${NODE_PORT}`);
});

export default app;
