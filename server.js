//requires
var express = require('express');
var swig = require('swig');
var path = require('path');
var db = require('./db');
var volleyball = require('volleyball');

//app instance creation and config
var app = express();
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

//middleware
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(volleyball);
app.use(require('body-parser').urlencoded( { extended: false} ));
app.use(require('method-override')('_method'));

//index route
app.get('/', function(req, res, next){
  res.render('index', {product: db.getTopProduct()});
});

//all other routes
app.use('/products', require('./routes'));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(function(err, req, res, next){
  res.render('error', { error: err});
});

//port set-up
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listing on port ${port}`);
});
