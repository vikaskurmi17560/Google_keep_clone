const express=require("express");
const app=express();
const user_router=require("./router/user.router")
app.use(express.json());

app.use('/user',user_router);

module.exports=app;