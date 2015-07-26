app.controller('MainController', function(ProductFactory, CustomerFactory)
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

    var getCustomers = function()
    {
        CustomerFactory.getCustomers(function(customers)
        {
            object.customers = customers;
            console.log('ctrl.customers', object.customers);
        });
    };
    console.log('executing getCustomers');
    getCustomers();
})