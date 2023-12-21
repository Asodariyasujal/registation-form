const { Router } = require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/empdata',{
    useNewUserparser:true
}).then(() =>{
    console.log(`connection succesfull`);
}).catch((e) =>{
    console.log(`no connection`);
})

// module.exports= Router;
