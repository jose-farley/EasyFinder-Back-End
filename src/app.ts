import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import morgan from 'morgan';
import { routes } from './routes/routes';
import path from 'path'
import cors from 'cors'

const app = express();
app.use(express.static(__dirname + "/images"));
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(routes);

export {app}