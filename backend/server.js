const app=require("./app");

const dotenv=require("dotenv");
const connectDB = require("./config/db");
dotenv.config({path:'backend/config/config.env'});

//Handle Uncaught Exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Uncaught Exception');
    server.close(() => {
        process.exit(1)
    })
})
const server=app.listen(process.env.PORT,()=>{
  console.log(`Server is running at PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})
// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})

connectDB();