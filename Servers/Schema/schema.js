import mongoose from "mongoose";
//import autoincrement from 'mongoose-auto-increment'


const userSchema=mongoose.Schema({
    name :String,
    username : String , 
    email : String ,
    phone  : String 
});
//for autoincremtn start from 0 
//autoincrement.initialize(mongoose.connection);
//userSchema.plugin(autoincrement.plugin, 'user');

const User=mongoose.model('User' , userSchema);

export default User;