
import User from "../Schema/schema.js";

export const addusers=async(request , responce)=>{
const user=request.body;
const newUser=new User(user);
try {
await newUser.save();
responce.status(201).json(newUser);
}
catch(err){
console.log(err);
responce.status(402).json({message : err.message});
}

}

export const getUser=async(request , responce)=>{

    try{
        const user=await User.find({});
        responce.status(200).json(user);
    }
    catch(err){
        console.log(err);
        responce.status(404).json({message : err.message});
    }
}
export const getUsers=async(request,responce)=>{
    //console.log(request.params.id);
    try{
      //  const user=await User.find({_id:request.params.id});
        const user=await User.findById(request.params.id);
        responce.status(200).json(user);
    }
    catch(error){
        responce.status(404).json({message : err.message});
    }
}
export const EditUsers=async(request , responce)=>{
    let user=request.body;
    const editUser=new User(user);
    try{
        //  const user=await User.find({_id:request.params.id});
          const user=await User.updateOne({_id:request.params.id},editUser);
          responce.status(200).json(user);
      }
      catch(error){
          responce.status(404).json({message : error.message});
      } 
}
export const deleteDetail=async(request,responce)=>{
    //console.log(request.params.id);
    try{
     
        const user=await User.deleteOne({_id:request.params.id});
        responce.status(200).json(user);
    }
    catch(error){
        responce.status(404).json({message : error.message});
    }
}

