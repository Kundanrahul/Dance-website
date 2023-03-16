const express=require("express");
const path=require("path");
port=80;
const bodyparser= require('body-parser');
var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/contactdance');
const app=express();
const fs=require("fs");

const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    phone:String,
    address:String,
    message:String

  });

var contact =mongoose.model('contact',contactSchema);

app.use("/static",express.static("static"));

app.set('view engine',"pug");

app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    const params={};
    res.status(200).render("index.pug");
})
app.get("/contact",(req,res)=>{
    const params={};
    res.status(200).render("contact.pug");

 app.post('/contact',(req,res)=>{
     var mydata= new contact(req.body);
     mydata.save().then(()=>{
        res.send("your response has been recorded,we'll reach out to you ASAP")
     }).catch(()=>{
        res.status(400).send("there was an error")
     });
  })
})
// for starting the server
app.listen(port,()=>{
    console.log(`server listening at ${port}`);
     })

    

