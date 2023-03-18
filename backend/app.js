const express=require("express");
const app=express();
app.use(express.json());
const errorMiddleware=require("./middlewares/errors");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
//Import all routes
const products=require("./routes/product")
const auth=require("./routes/auth");
app.use("/api/v1",products);
app.use("/api/v1",auth)
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorMiddleware); //Middleware to handle error
module.exports=app;