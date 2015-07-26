module.exports = function(app)
{
  	var customers = require('../controllers/customers.js');
  	var products = require('../controllers/products.js');
	app
	// - - - CUSTOMER - - -
    // Index
	.get('/customers', function(request, response)
		{
			console.log('routes.get customers');
			customers.index(request, response)
		})
	.get('/products', function(request, response)
		{
			console.log('routes.get products');
			products.index(request, response)
		})
	// New
	.get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit
	.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	.post('/customer', function(request, response)
		{
			customers.create(request, response)
		})
	.post('/product', function(request, response)
		{
			console.log('.post product', request)
			products.create(request, response)
		})
	.post('/product', function(request, response)
		{
			console.log('.post order', request)
			customers.update(request, response)
		})

	// Destroy
	.delete('/users/:id', function(request, response) { users.destroy(request, response) })
	// Update
	.put('/customers/:id', function(request, response)
		{
			customers.update(request, response)
		})
};