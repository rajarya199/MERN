const Product=require('../models/productModel')

//to insert product

exports.postProduct=async(req,res)=>{
    let product=new Product({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        countInStock:req.body.countInStock,
        product_description:req.body.product_description,
        product_image:req.body.product_image,
        category:req.body.category
    })
    product=await product.save()
    if(!product){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(product)
}

//to show all the product
exports.productList=async(req,res)=>{
    const product=await Product.find()
    if(!product){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(product)
}

