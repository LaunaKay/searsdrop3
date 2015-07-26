app.controller('CustomersController', function(CustomerFactory){
    console.log("CustomersController Loaded");
    var that = this;

    var getCustomers = function(){
        CustomerFactory.getCustomers(function(customers){
            that.customers = customers;
            console.log('ctrl.customers', that.customers);
        });
    }
    console.log('executing getCustomers');
    getCustomers();

    this.add = function(newCustomer)
    {
        console.log('ctl.add', newCustomer);
        CustomerFactory.add(newCustomer, function()
        {
            getCustomers();
        })
    }
    this.addOrder = function(newOrder)
    {
        console.log('ctl.addOrder', newOrder);
        CustomerFactory.addOrder(newOrder, function()
        {
            //clear model after submit
            newOrder.product_id = "";
            newOrder.quantity="";
            newOrder.name="";

            getCustomers();
        })
    }
    this.remove = function(customer){
        CustomerFactory.remove(customer, function(){
            getCustomers();
        })
    }
    this.show = function(customer){
        CustomerFactory.setCustomer(customer);
    }
})
