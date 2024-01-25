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

//to retrive all data from category
exports.categoryList=async(req,res)=>{
    const category= await Category.find()
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}
//
exports.categoryDetails=async(req,res)=>{
    const category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category) 

}
// to update category
exports.updateCategory=async(req,res)=>{
    const category=await Category.findByIdAndUpdate(
        req.params.id,{
            category_name:req.body.category_name  
        },
        { new:true}
    )
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category) 
}
//delete category
exports.deleteCategory=async(req,res)=>{
    Category.findByIdAndDelete(req.params.id)
    .then (category=>{
        if(!category){
        return res.status(404).json({error:'category with that id not fpund'})
        }
        else{
            return res.status(200).json({message:'category deleted'})
        }
    })
    .catch(err=>{
        return res.status(400).json({error:err})
    })
}