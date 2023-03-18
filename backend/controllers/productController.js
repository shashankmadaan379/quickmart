const Product=require("../models/product");
const ErrorHandler=require("../utils/errorHandler");
const catchAsyncErrors=require("../middlewares/catchAsyncErrors");
const ApiFeatures=require("../utils/apiFeatures");
//create new product => /api/v1/product/new
exports.newProduct=catchAsyncErrors(async (req,res,next)=>{
    req.body.user=req.user.id;
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        message:"New product created successfully",
        data:product
    });
})

//Get all products => /api/v1/products
exports.getProducts=catchAsyncErrors(async(req,res,next)=>{
    const productCount=await Product.countDocuments();
    const apiFeatures=new ApiFeatures(Product.find(),req.query).search().filter();
    const products= await apiFeatures.query;
    res.status(200).json({
        success:true,
        count:products.length,
        message:"This route will show all products in database",
        productCount,
        products
    })
})


//Get Single Product detail  => /api/v1/product/:id
exports.getSingleProduct=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found",404));
    }
    res.status(200).json({
        success:true,
        data:product
    })
})


//Update Product  => /api/v1/admin/product/:id

exports.updateProduct=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);
    if(!product){
        res.status(200).json({
        success:true,
        data:product
    })
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        data:product
    })
})



//Delete Product   => /api/v1/admin/product/id
exports.deleteProduct=catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);
    if(!product){
        res.status(200).json({
        success:true,
        data:product
    })
    }
    await product.remove();
    res.status(200).json({
        success:true,
        data:product
    })
})