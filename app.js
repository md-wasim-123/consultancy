import express from 'express'
import web from './routes/web.js'
import { join } from 'path';
import mongoose from 'mongoose'
import connectdb from './db/dataconnection.js';
import bodyParser from 'body-parser';
const app = express()

//port
const port = process.env.port || '3000'

app.use(express.static(join(process.cwd(), "public")));
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs");

const DATABASE_URL=process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017'
 

connectdb(DATABASE_URL);

app.use('/', web)





//server created
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})