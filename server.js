const express = require('express');

const app = express();

app.set('port',process.env.port || 9000);

app.get('/',(req,res) => {
    res.send('Welcome to my API');
});

app.listen(app.get('port'), () =>{
    console.log(`server running on PORT`,app.get('port'));
});