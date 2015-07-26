app.factory('CustomerFactory', function($http, $location)
{
    return {
        getCustomers: function(callback)
        {
            console.log("CustomersFactory getCustomers");
            $http.get('/customers').success(function(response)
            {
                callback(response);
                console.log('factory.response', response);
            })
        },
        add: function(newCustomer, callback)
        {
            if(newCustomer)
            {
                console.log("CustomersFactory add ", newCustomer);
                $http.post('/customer', newCustomer).success(function(response)
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
        addOrder: function(newOrder){
            console.log("CustomersFactory add Order ", customer);
            $http.put('/customers/' + newOrder._id, newOrder).success(function(response){
                $location.path('/orders');
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