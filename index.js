const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views','views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('home');
});

app.listen(port);
console.log(`server listening on port ${port}`);
console.log('Node server started on port 3000');