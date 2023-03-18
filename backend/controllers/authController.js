const User=require("../models/user");
const errorHandler=require("../utils/errorHandler");
const catchAsyncErrors=require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");


//Register a user  =>/api/v1/register
exports.registerUser=async(req,res,next)=>{
   try {
    
     const { name, email, password } = req.body;
    
    const user = await new User({
        name,
        email,
        password,
    }).save();

     sendToken(user,200,res);
   } catch (error) {
    console.log(error);
   }
}



   // Login User  =>  /a[i/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

     sendToken(user,200,res);
})


//Logout user
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})