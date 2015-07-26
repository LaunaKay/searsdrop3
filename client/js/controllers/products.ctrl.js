app.controller('ProductsController', function(ProductFactory)
{
    console.log("Productscontroller Loaded");
    var that = this;

    var getProducts = function(){
        ProductFactory.getProducts(function(products){
            that.products = products;
            console.log('ctrl.products', that.products);
        });
    }
    console.log('executing getProducts');
    getProducts();

    this.add = function(newProduct)
    {
        console.log('ctl.add', newProduct);
        ProductFactory.add(newProduct, function($scope)
        {
            //clear model after submit
            newProduct.item = "";
            newProduct.image="";
            newProduct.description="";
            newProduct.quantity="";
            //retrieve all products for display
            getProducts();
        })
    }
    this.remove = function(product){
        ProductFactory.remove(product, function(){
            getProducts();
        })
    }
    this.show = function(product){
        ProductFactory.setProduct(product);
    }
})