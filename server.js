const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes.js');


const app = express();
app.set('port',process.env.port || 9000);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'programacionvisual22',
    database: 'library'
};

// midlewares -----------------------------
app.use(myconn(mysql,dbOptions,'single'));
app.use(express.json());
//routes -----------------------------------
app.get('/',(req,res) => {
    res.send('Welcome to my API!');
});
app.use('/api',routes);
// server running ---------------------------
app.listen(app.get('port'), () =>{
    console.log(`server running on PORT`,app.get('port'));
});