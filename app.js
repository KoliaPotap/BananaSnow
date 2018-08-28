const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const crypto = require('crypto');
var fs = require('fs');


const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// Set Port
const port = 8080;

// Init app
const app = express();

// View Engine\
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// methodOverride
app.use(methodOverride('_method'));


// PASSPORT        PASSSSS ------------------------    PAAAASSSSS



// Search Page
app.get('/', function(req, res, next){
  res.render('photoedi', {us: req.user});
});


// Delete User


app.listen(port, function(){
  console.log('Server started on port '+port);
});
