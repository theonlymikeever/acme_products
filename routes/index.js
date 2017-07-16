//requires
var db = require('../db');
var app = require('express').Router();

//routes
app.get('/', function(req, res, next){
  res.render('products', { products: db.getProducts() });
});

app.post('/', function(req, res, next){
  db.createProduct(req.body);
  res.redirect('/products');
});

app.get('/:id', function(req, res, next){
  res.render('product', { product: db.getProduct(req.params.id * 1)});
});

app.delete('/:id', function(req, res, next){
  db.deleteProduct(req.params.id * 1);
  res.redirect('/products');
});


//export
module.exports = app;
