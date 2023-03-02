require("dotenv").config();
const mongoose=require("mongoose");
const connection=mongoose.connect(`mongodb+srv://ajaya:${process.env.PASSWORD}@cluster0.tygvghs.mongodb.net/?retryWrites=true&w=majority`)
module.exports={
    connection
}