import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})


//This method is used to prevent overwrite model once compiled Mongoose
export default mongoose.models.user2 || mongoose.model('user2',userSchema);