// make function and exports
const Category=require('../models/categoryModel') //Category is created variable to capture import
exports.testFunction=(req,res)=>{
    res.send('this is from category controller' )
}

//to insert the category
exports.postCategory=async(req,res)=>{
    // yo category variable bata data mathi import gareko Category  model ma pathauni
    let category= new Category({
        //categoty_name from  Category model
        //user bata input lina -req.body and store in key(json format)
        
        category_name:req.body.category_name
        //model-key:req.body.db-key
    })
    category= await category.save()
    //if not save
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}