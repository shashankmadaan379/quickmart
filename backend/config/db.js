const mongoose=require("mongoose");
const connectDB=()=>{
  mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
  }).then(con=>{
    console.log(`MongoDB Database connected with Host:${con.connection.host} `)
  })
}
module.exports=connectDB; 