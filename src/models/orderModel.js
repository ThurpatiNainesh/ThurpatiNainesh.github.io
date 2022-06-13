const mongoose = require('mongoose');

const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.objectId
const orderSchema = new mongoose.Schema( {
userId:{
    type:ObjectId,
    ref:"User"
},
productId:{
    type:ObjectId,
    ref:'Product'
},
amount:Number,
date:{
    type:String,
    required:true
}

}, { timestamps: true });


module.exports = mongoose.model('order',orderSchema ) //users






