// Create and send token and save in the cookie

const sendToken=(user,statusCode,res)=>{
    //create jwt token
    const token = user.getJwtToken();


    //options for cookie
    const options={
        expires:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRE*24*60*60*1000),
        httpOnly:true,
        secure:false,
        sameSite:'none'
    }
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}
module.exports=sendToken