// import modules:
import express from 'express';
import { connectDB } from "./db/dbConnection.js";
import authorRouter from './src/modules/author/author.router.js';
import bookRouter from './src/modules/book/book.router.js';

// create server:
const app = express();
const port = 3000;
// connect to db:
connectDB();
// app usage:
app.use(express.json());
app.use('/authors', authorRouter);
app.use('/books', bookRouter);








// listen to server:
app.listen(port, ()=>{
    console.log('server is running on port', port);
})