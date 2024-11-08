import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import bookRoutes from './routes/book.routes.js';
import bodyParser from 'body-parser';

dotenv.config();

//Usamos express para los middlewares
const app = express();
app.use(bodyParser.json())//Parseador de bodies

//Conexion a la base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME});
const db = mongoose.connection;
app.use('/books', bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Iniciado en port: ${port}`);
});