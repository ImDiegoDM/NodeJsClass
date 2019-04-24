const express = require('express');
const port = 3000;
const path = require('path');
const routing = require('./routes/routing');
const hbs = require('hbs');

const publicAssets = path.join(__dirname,'/public');
const viewsPath = path.join(__dirname,'/templates/views');
const partialsPath = path.join(__dirname,'templates/partials');

const app = express();

app.use('/public',express.static(publicAssets))

app.set('view engine','hbs');
app.set('views',viewsPath);

hbs.registerPartials(partialsPath)

routing(app);

app.listen(port,()=>{
    console.log(`the server is runing and listen on port ${port}`)
});