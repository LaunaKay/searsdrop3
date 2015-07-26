var Product = mongoose.model('Product');

module.exports = (function() {
    return {
        index: function(request, response){
            console.log("Server / Ctrl / Products - Index");
            Product.find({}, function(err, products){
                if(err)
                {
                    console.log(err);
                    response.json([{item:"Updating, please be patient..."}]);
                }
                else
                {
                    console.log('products.products',products);
                    response.json(products);
                }
            })
        },
        new: function(request, response){
            console.log("Server / Ctrl / Products - New")
        },
        create: function(request, response)
        {
            console.log("Server / Ctrl / Products - Create", product)
            var product = new Product;
            product.item = request.body.item;
            product.image = request.body.image;
            product.description = request.body.description;
            product.quantity = request.body.quantity;
            product.save(function(err)
            {
                if(err)
                {
                    console.log(err);
                    response.json({status:false});
                }
                else
                {
                    response.json({status:true});
                }
            })
        },
        edit: function(request, response){
            console.log("Server / Ctrl / Products - Edit")
        },
        update: function(request, response){
            console.log("Server / Ctrl / Products - Update", request.body)
            Product.findOneAndUpdate({_id:request.params.id}, request.body, function(err, record){
                if(err){
                    console.log(err);
                    response.json({status:false});
                }
                else{
                    response.json({status:true});
                }
            })
        },
        show: function(request, response){
            console.log("Server / Ctrl / Products - Show")
        },
        destroy: function(request, response){
            console.log("Server / Ctrl / Products - Destroy");
            console.log("Destroy params id:", request.params.id);
            User.remove({_id:request.params.id}, function(err){
                if(err){
                    console.log(err);
                    response.json({status:false});
                }
                else{
                    response.json({status:true});
                }
            })
        }
    }
})();