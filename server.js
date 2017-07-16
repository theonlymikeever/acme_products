//requires
var express = require('express');
var swig = require('swig');
var path = require('path');
var db = require('./db');

//app instance creation and config
var app = express();
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

//middleware
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/', function(req, res, next){
  console.log(req.url);
  next();
});

app.get('/', function(req, res, next){
  res.render('index', {count: db.getProducts().length});
});

// routes
app.get('/products', function(req, res, next){
  res.render('products', { products: db.getProducts() });
});

app.get('/products/:id', function(req, res, next){
  res.render('product', { product: db.getProduct(req.params.id * 1)});
});


//port set-up
var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listing on port ${port}`);
});
