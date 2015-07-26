var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
{
    item:
    {
        type: String,
        trim: true
    },
    description:
    {
        type: String,
        trim: true
    },
    image:
    {
        type:String,
        trim:true
    },
    quantity:
    {
        type: Number,
        trim: true
    },
    created:
    {
        type: Date,
        default: Date.now
    },
    orders:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer.orders'
    },
    updated:
    {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', ProductSchema);