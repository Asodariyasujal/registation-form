const express = require('express');
const path= require("path");
const app = express();
const hbs=require("hbs");
const register=require("./models/register");
require("./db/conn");
const port= process.env.port || 4500;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.get('/some-route', 'controllerFunction');

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partial_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_path))

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partial_path);


app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/empdata', (req,res)=>{
    res.render("empdata")
})

app.post('/empdata', async(req,res)=>{
   try {
    const password=req.body.password;
    const cpassword=req.body.cpassword;
   if(password===cpassword){
    const registoremployee= new registor({
        name:req.body.name,
         email:req.body.email,
         phone:req.body.phone,
          password:req.body.password,
          cpassword:req.body.cpassword,
    })
    const registered =  await registoremployee.save();
    res.status(201).render(index);
   }

   } catch (error) {
    res.send("password does not match..");
   }
})



app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})