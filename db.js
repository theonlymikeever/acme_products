var products = [
  {
    id: 1,
    name: 'Foo',
    description: "So good you'll want seconds!",
    rating: 10,
  },
  {
    id: 2,
    name: 'Bar',
    description: "Simple to use and hard to master.",
    rating: 9
  },
  {
    id: 3,
    name: 'Bazz',
    description: "Not your average Acme Product",
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
    //error handling
    if(!product.name){
      throw 'name is required';
    }
    if(!product.description){
      throw 'description is required';
    }
    if(!product.rating){
      throw 'rating is required';
    }
    product.id = Math.round(1000*Math.random()),
    products.push(product);
  },
  deleteProduct: function(id){
    products = products.filter(function(product){
      return product.id !== id;
    });
  }
};
