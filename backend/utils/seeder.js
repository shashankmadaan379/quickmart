const Product=require("../models/product");
const dotenv=require("dotenv");
const connectDB=require("../config/db");

const products=require("../data/product");


dotenv.config({path:"backend/config/config.env"});

connectDB();
const seedProducts=async()=>{
    try {
        // await Product.deleteMany();
        // console.log("Product deleted");
        await Product.insertMany(products);
        console.log("Products seeded");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();
// seedProducts();