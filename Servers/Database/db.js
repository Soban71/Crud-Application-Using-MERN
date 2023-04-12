import mongoose from "mongoose";



const connection= async ()=>{
    const url='mongodb+srv://janjuasoban71:cKi0BYn0bohg9UqY@crudapplication.srpc1fi.mongodb.net/?'
  try{
    await mongoose.connect(url,{useUnifiedTopology: true , useNewUrlParser: true});
    console.log("Database Connected Successfully");
  }
  catch(err){
    console.log(err);
  }
}

export default connection;