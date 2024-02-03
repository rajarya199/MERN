const{check,validationResult} =require('express-validator')

exports.categoryValidation=[
    check('category_name','category name is required').notEmpty()
    .isLength({min:3}).withMessage('category must be of at least 3 character')

]

exports.productValidation=[
    check('product_name','product name is requires').notEmpty()
    .isLength({min:3}).withMessage('product name must be of at least 3 character'),

    check('product_price','price is required').notEmpty()
    .isNumeric().withMessage('price should be numerical value'),

    check('countInStock','stock is required').notEmpty()
    .isNumeric().withMessage('numerical value is required'),

    check('product_description','description is required').notEmpty()
    .isLength({min:20}).withMessage('description must be at least of 20 character'),
    check('category','category is required').notEmpty()
]


//next middleware -if correct then push to next,coming fn 
exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(errors.isEmpty()){
        //no error next
        next()
    }
    else{
        //errors.array()-multiple errors ,[0]-index0 ist error at a time
        return res.status(400).json({error:errors.array()[0].msg})
    }
}