const mongoose = require('mongoose');

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema( {
    name: String,
    balance:{
        type:Number,
        default:100
    },
    address:{
        type:String,
    },
    IsFreeAppUser:{
        type:Boolean,
        default:false,
     },
    age :Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },})
    module.exports = mongoose.model('User', userSchema)
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]



// String, Number
// Boolean, Object/json, array