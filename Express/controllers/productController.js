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

//product details
exports.productDetails=async(req,res)=>{
    const product=await Product.findById(req.params.id)
    .populate('category','category_name') //link with other table
    //product model ko category ko ref lihera category model ko catgeory name retrive gareko 
    if(!product){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(product) 
}

//update product
exports.updateProduct=async(req,res)=>{
    const product=await Product.findByIdAndUpdate(
        req.params.id,
        { product_name:req.body.product_name,
            product_price:req.body.product_price,
            countInStock:req.body.countInStock,
            product_description:req.body.product_description,
            product_image:req.body.product_image,
            category:req.body.category

    },{new:true}
    )
    if(!product){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(product) 
}