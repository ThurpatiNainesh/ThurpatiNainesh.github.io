// const { count } = require("console")
// const authorModel= require("../models/authorModel")

// const createAuthor= async function (req, res) {
//     let data = req.body
//     let authorId = data.dauthor_id
//     if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

//     let savedData= await authorModel.create(data)
//     res.send({data: savedData})
// }

// module.exports.createAuthor= createAuthor
const UserModel= require("../models/userModel")

const { count } = require("console")
const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder= async function (req, res) {
    let data = req.body
    let isproduct = await orderModel.findOne({_id:data.productId})
    let isuser = await userModel.findOne({_Id:userId})

    let header=req.header.isFreeAppUser
    if(header){
        res.send("user balance is not deducted")
    }
    if(isproduct&& isuser){
        let savedData= await orderModel.create(data);
        res.send({data:savedData});
    }else if (!isproduct && !isuser){
        res.send("please provide product id and user id ")
    }
}

module.exports.createOrder= createOrder