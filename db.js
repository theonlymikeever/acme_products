var products = [
  {
    id: 1,
    name: 'Foo',
    rating: 10
  },
  {
    id: 2,
    name: 'Bar',
    rating: 9
  },
  {
    id: 3,
    name: 'Bazz',
    rating: 5
  },
];

module.exports = {
  getProducts: function(){
    return products;
  },
  getProduct: function(id){
    return products.filter(function(product){
      return product.id === id;
    })[0];
  },
  createProduct: function(product){
    if(!product.name){
      throw 'name is required';
    }
    products.id = Math.round(1000*Math.random()),
    products.push(product);
  },
  deleteProduct: function(id){
    products = products.filter(function(product){
      return product.id !== id;
    });
  }
};
