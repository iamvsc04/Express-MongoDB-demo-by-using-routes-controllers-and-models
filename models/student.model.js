const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    _id: {
            type:Number,
            require:true
         },
    name:{
            type:String,
            require:true,
            // default:null
         },
    phone:{
            type:Number,
            require:true,
            // default:null
          },
    email:{
            type:String,
            require:true,
            // default:null
          }
})
const studentModel=mongoose.model("student",studentSchema);
module.exports = studentModel;