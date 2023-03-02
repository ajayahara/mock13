const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    name:String,
    level:String,
    score:Number
})
const UserModel=mongoose.model("WordUser",UserSchema);
module.exports={
    UserModel
}