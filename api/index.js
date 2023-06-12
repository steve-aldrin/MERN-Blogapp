const express =require("express");
const app=express();
const cors=require("cors");
const User=require('./models/User');
const { default: mongoose } = require("mongoose");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const multer=require('multer');
const uploadmid=multer({dest:'uploads/'});
const secret='dasdasdasdadasdads'
const cookieparse=require('cookie-parser')
const fs=require('fs');
const Post= require('./models/Post');
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json())
app.use(cookieparse())
const salt=bcrypt.genSaltSync(10);
app.use('/uploads',express.static(__dirname+'/uploads'));
mongoose.connect('mongodb+srv://steve:e5eJVkNFCpOLPZug@cluster0.kvyagyz.mongodb.net/?retryWrites=true&w=majority')
app.post('/register',async (req,res)=>{

const {username,password}=req.body;
try{ 
    const userDoc=await User.create({username,password:bcrypt.hashSync(password,salt)});
    res.json(userDoc);
}
catch(e){
res.status(400).json(e)
}


});


app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const userDoc=await User.findOne({username});
    const passok=bcrypt.compareSync(password,userDoc.password);
    if(passok){
      jwt.sign({username,id:userDoc.id},secret,{},(err,token )=>{
        if (err) throw err;
        res.cookie('token',token).json({
          id:userDoc._id,
          username,
        });
      })
    }else{
        res.status(400).json("Wrong Creds")
    }
});

app.get('/profile',(req,res)=>{
const {token}=req.cookies;
jwt.verify(token,secret,{},(err,info)=> {
  if(err) throw err;
  res.json(info);
});

});

app.post('/logout',(req,res)=>{
  res.cookie('token',''),json('ok');
})

app.post('/create',uploadmid.single('file'),async (req,res)=>{

  const {originalname,path}=req.file;
  const parts=originalname.split('.');
  const ext=parts[parts.length-1];
 const newname=path+'.'+ext;
  fs.renameSync(path,newname);

  const {token}=req.cookies;
  jwt.verify(token,secret,{},async (err,info)=> {
    if(err) throw err;
    
  const{title,summary,text}=req.body;

  const postDoc= await Post.create({
     title,
     summary,
     text,
     cover:newname,
     author:info.id,
   });
   res.json(postDoc);
 
  });

});

app.get('/getpost',async (req,res)=>{
  res.json(await Post.find().populate('author',['username']));
})

app.listen(4000);