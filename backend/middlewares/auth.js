//Checks if user is authenticated or not
const User=require("../models/user")
const jwt=require("jsonwebtoken");
const user = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");


exports.isAuthentcatedUser=catchAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies;
    //console.log(token);

    if(!token){
        return next(new ErrorHandler("Login first to access this resource"),401)
    }


    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await user.findById(decoded.id);
    next();
})


exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to acccess this resource`, 403))
        }
        next()
    }
}