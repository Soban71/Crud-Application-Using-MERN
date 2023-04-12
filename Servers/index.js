import express from 'express'
import connection from './Database/db.js';
import router from './Routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();

connection();
app.use(cors());
app.use(bodyParser.json({extended : true}))


app.use('/',router);

app.listen(7002 , ()=> console.log("Server is running"));




//janjuasoban71
//cKi0BYn0bohg9UqY
//PORT=9002;
//http://localhost:9002/