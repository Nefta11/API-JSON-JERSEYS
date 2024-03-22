import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
config()
import clothesRouter from './routes/clothes.routes.js'
const app = express();

//Cargar archivos estaticos 
app.use(express.static('./public'));

// Configuración del motor de vistas


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('src'));


app.use(clothesRouter);

export default app;