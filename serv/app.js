import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import noteRoute from "./routes/note.route.js";
import dontenv from 'dotenv';
import customErrorHandler from './middleware/customError.handler.js';
import appConfig from './config/app.config.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

dontenv.config();
const {HTTP_PORT,ENVIROMENT} = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

//TODO: Config should depend on enviroment, appConfig structure is not setup
// for that yet
app.use('/api', noteRoute(appConfig.controllers.noteController));

//SPA application serving index.html for all routes that dont match /api
// or path to file in wwwroot folder.
app.use(express.static(path.join(__dirname, "wwwroot")));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "wwwroot", "index.html"));
});

app.use(customErrorHandler(ENVIROMENT == "DEV"));

app.listen(HTTP_PORT, () => {
  console.log(`Listening at ${HTTP_PORT}`);
});

