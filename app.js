const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.set('views', __dirname + '/views');

 
app.use(express.static(__dirname + "/public"));

app.use('/',require('./router/rutasWeb'));

app.use((req,res,next)=>{
    res.status(404).render("404");
})



app.listen(port,()=>{
    console.log('servidor en marcha',port);
});