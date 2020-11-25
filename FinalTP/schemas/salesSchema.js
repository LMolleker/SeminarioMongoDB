const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    direction: {
        type : String,
        required : true
    },
    totalPrice: {
        type : Number,
        required : true
    },
    products: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Products' 
    }]
});

module.exports = mongoose.model('Sales', saleSchema);