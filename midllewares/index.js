const {userValidation} = require('../validationSchemes/userValidation')

module.exports.validateUser = async (req,res,next) => {
    try{
        const data = await userValidation.validate(req.body);
        return next();
    } catch(error){
        res.send(error.message);
    }
}