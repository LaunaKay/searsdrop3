var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema(
{
  name:
    {
        type: String,
        trim: true
    },
    email:
    {
        type: String,
        trim: true
    },
    password:
    {
        type: String,
        trim: true
    },
    salt:
    {
        type: String,
        trim: true
    },
    auth_token:
    {
        type: String,
        trim: true
    },
    orders:
    [{
        product_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity:Number,
        ordered:
        {
            type:Date,
            default:Date.now
        }
    }],
    created:
    {
        type: Date,
        default: Date.now
    },
    updated:
    {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Customer', CustomerSchema);