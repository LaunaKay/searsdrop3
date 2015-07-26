app.controller('MainController', function(ProductFactory)
{
	console.log("MainController Loaded");
    var object = this;

    var getProducts = function()
    {
        ProductFactory.getProducts(function(products)
        {
            object.products = products;
            console.log('ctrl.products', object.products);
        });
    }
    getProducts();
})