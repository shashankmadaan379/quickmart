const  express=require("express");
const router=express.Router();


const {getProducts,newProduct,getSingleProduct, updateProduct, deleteProduct}=require("../controllers/productController");
const {isAuthentcatedUser, authorizeRoles } =require("../middlewares/auth")
router.route("/products").get(getProducts);
router.route('/admin/product/new').post(newProduct);
router.route("/product/:id").get(getSingleProduct); 
router.route("/admin/product/:id").put(isAuthentcatedUser,authorizeRoles,updateProduct); 
router.route("/admin/product/:id").delete(isAuthentcatedUser,authorizeRoles,deleteProduct); 
module.exports=router;