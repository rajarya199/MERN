const{check,validationResult} =require('express-validator')

exports.categoryValidation=[
    check('category_name','category name is required').notEmpty()
    .isLength({min:3}).withMessage('category must be of at least 3 character')

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