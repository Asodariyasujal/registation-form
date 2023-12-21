const mongoose=require('mongoose');
const empSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    }
});

const empcollection = new mongoose.model('empcollection'  ,empSchema);

module.exports=empcollection;