app.factory('ProductFactory', function($http, $location)
{
    return {
        getProducts: function(callback)
        {
            console.log("ProductsFactory getPRoducts");
            $http.get('/products').success(function(response)
            {
                callback(response);
                console.log('factory.response', response);
            })
        },
        add: function(newProduct, callback)
        {
            if(newProduct)
            {
                console.log("ProductsFactory add ", newProduct);
                $http.post('/product', newProduct).success(function(response)
                {
                    callback(response);
                })
            }
        },
        remove: function(user, callback){
            console.log("customersFactory remove ", user);
            $http.delete('/customers/'+customer._id).success(function(response){
                callback();
            })
        },
        update: function(customer){
            console.log("CustomersFactory remove ", customer);
            $http.put('/customers/'+customer._id, customer).success(function(response){
                $location.path('/customers');
            })
        },
        setCustomer: function(customer){
            this.customer = customer;
            $location.path('/customers/details');
        },
        getCustomer: function(){
            if(!this.customer)
                $location.path('/customers');
            return this.customer;
        }
    }
})